import {Component, NgZone, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {trigger, transition, animate, style, keyframes} from '@angular/animations';
import {GroupByDaysPipe} from '../../pipes/group-by-days/group-by-days';
import {NavController, NavParams, Platform, IonContent} from '@ionic/angular';
import {ApiServices} from '../../services/api-services/api-services';
import {UiService} from '../../services/ui/ui';
import {Socket} from 'ngx-socket-io';
import {ActivatedRoute, Router} from '@angular/router';
import {ChatService} from '../../services/chat.service';
import { BadgeService } from 'src/app/services/badge-service/badge.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  animations: [
    trigger('isTypingAnimation', [
      transition(':enter', [
        animate('.2s ease-in', keyframes([
          style({transform: 'translateY(10px)', opacity: 0, offset: 0}),
          style({transform: 'translateY(0)', opacity: 1, offset: 1.0}),
        ]))
      ]),
      transition(':leave', [
        animate('.2s ease-out', keyframes([
          style({transform: 'translateY(0)', opacity: 1, offset: 0}),
          style({transform: 'translateY(10px)', opacity: 0, offset: 1.0}),
        ]))
      ])
    ])
  ],
  providers: [GroupByDaysPipe]

})
export class ChatPage implements OnInit, OnDestroy {
  @ViewChild(IonContent) content: IonContent;
  public unregisterBackButtonAction: any;
  product_target: any = {};
  conversation: any = {};
  receiver: any = {};
  amCalenderOptions: any = {};
  messages: any = [];
  groupedMessages: any = [];
  newMsg: string;
  typing = false;
  isTyping = false;
  onTypingTimeout = null;
  messagesCurrentPage = 0;
  isInfinitScrollEnabled = true;
  productId:any;
  from_notif:boolean;
  newMessage: string;
  messageList:  string[] = [];
  constructor(
    private navCtrl: NavController,
    public services: ApiServices,
    public chatservice: ChatService,
    private ui: UiService,
    private zone: NgZone,
    private platform: Platform,
    private router: Router,
    private socket: Socket,
    private chatService: ChatService,
    private groupPipe: GroupByDaysPipe,
    private badgeService:BadgeService
  ) {
    if (this.router.getCurrentNavigation().extras.state.conversation || {}) {
      this.conversation = this.router.getCurrentNavigation().extras.state.conversation || {};
      this.product_target = this.conversation.product;
      this.from_notif = this.conversation.comefromnotif;
    }

    if (this.from_notif) {
      this.productId=this.conversation.conversation.product.id;
      this.receiver = this.conversation.conversation.receiver;
    }else {
      this.productId=this.conversation.product.id;
      this.receiver = this.conversation.receiver;
    };

    this.amCalenderOptions = {
      sameDay: 'Aujourd\'hui',
      nextDay: 'Demain',
      lastDay: 'Hier',
      nextWeek: 'dddd',
      lastWeek: 'dddd',
      sameElse: 'DD/MM/YYYY'
    };

    this.initApp();
    this.platform.keyboardDidShow.subscribe(ev => {
      const { keyboardHeight } = ev;
      document.getElementById('footer-id').style.height=`${keyboardHeight+94}px`
      this.platform.backButton.subscribe(() => {
        console.log("test")
      });
    });
    this.platform.keyboardDidHide.subscribe(() => {
      document.getElementById('footer-id').style.height='auto';
    });
  }

  ionViewWillLeave() {
  }

  ionViewDidEnter() {
    this.initializeBackButtonCustomHandler();
  }
  openViewer(event){
console.log(event);

  }
  async initApp() {
    console.log('init', this.conversation);
    await this.initChat();
    this.initSocket();
  }

  async ngOnInit() {
    this.chatService
      .getMessages()
      .subscribe((message: string) => {
        this.messageList.push(message);
      });
  }

  initSocket() {
    this.socket.connect()
    this.socket.emit('joint-room', this.conversation.id);
    console.log( this.socket.emit('joint-room', this.conversation.id));
    this.socket.on('newMessage', (msg) => {
      console.log('messages essaii');
      if (msg.sender.id !== this.services.current_user.id) {
        this.zone.run(() => {
          this.isTyping = false;
          this.messages.push(msg);
          this.groupedMessages = this.groupPipe.transform(this.messages, 'created_at');
          this.scrollToBottom();
          console.log('new messages...');
        });
      }
    }
    );
    this.socket.on('isTyping', (userId) => {
      if (this.services.current_user.id !== userId) {
        this.zone.run(() => {
          this.isTyping = true;
          this.scrollToBottom();
          console.log('isTyping...');
        });
      }
    });

    this.socket.on('notTyping', (userId) => {
      if (this.services.current_user.id !== userId) {
        this.zone.run(() => {
          this.isTyping = false;
          this.typing = false;
          console.log('stopTyping');
        });
      }
    });

  }

  initChat(infiniteScroll?) {
    return new Promise(async (resolve) => {
        const data = {
          senderId: this.services.current_user.id,
          receiverId: this.receiver.id,
          productId: this.productId
        };
        this.messagesCurrentPage++;
        this.chatservice.initConversation(data, this.messagesCurrentPage, infiniteScroll).subscribe(res => {
          this.conversation = res;
          // this.events.publish('chatPage', this.conversation.id)
          resolve(this.conversation);
          if (this.conversation.messages.length < 10) {
            this.isInfinitScrollEnabled = false;
          }
          this.messages = [...this.conversation.messages.reverse(), ...this.messages];
          this.groupedMessages = this.groupPipe.transform(this.messages, 'created_at');
        
          if (!infiniteScroll) {
            this.scrollToBottom(0);
          } else {
            infiniteScroll.target.complete();
          }
        });
      }
    );
  }

  async pickImage() {
    const image = await this.ui.imageType();
    this.sendMsg(image);
  }

  onFocus() {
    this.zone.run(() => {
      this.scrollToBottom();
    });
  }

  onTyping() {
    if (this.typing == false) {
      this.typing = true;
      this.socket.emit('typing', {userId: this.services.current_user.id, room: this.conversation.id});
    } else {
      clearTimeout(this.onTypingTimeout);
    }
    this.onTypingTimeout = setTimeout(() => {
      this.typing = false;
      this.socket.emit('noLongerTyping', {userId: this.services.current_user.id, room: this.conversation.id});
    }, 3000);
  }

  send() {

    if (!this.newMsg.trim()) {
      return;
    }
    this.sendMsg();
  }
  sendMessage() {
    const storedMsg: any = {
      conversation_id: this.conversation.id,
      created_at: new Date(),
      sender: this.services.current_user
    };
    this.socket.emit('message', storedMsg);
    console.log(this.socket.emit('message', storedMsg));
    
  }
  getMessage() {
    return this.socket.fromEvent('message').pipe(map((data) =>console.log(data)
    ));
  }
  /**
   * @name sendMsg
   */
  async sendMsg(image ?) {
    const storedMsg: any = {
      conversation_id: this.conversation.id,
      created_at: new Date(),
      sender: this.services.current_user
    };
    if (image) {
      storedMsg.image = image;
    } else {
      storedMsg.body = this.newMsg;
    }
    this.pushNewMsg(storedMsg);
    console.log("send msg");
    
    if (!image) {
      this.newMsg = null;
    }
    await this.chatService.storeMessage(storedMsg).subscribe(res => {
      console.log(res);
    });
  }

  /**
   * @name pushNewMsg
   * @param msg
   */
  pushNewMsg(msg) {
    this.zone.run(() => {
      this.messages.push(msg);
     // console.log("messages", this.socket.emit('message', {room: this.conversation.id, msg}));
      
      this.groupedMessages = this.groupPipe.transform(this.messages, 'created_at');
      this.socket.emit('message', {room: this.conversation.id, msg});
      this.scrollToBottom();
    });
  }

  scrollToBottom(duration?: number) {
    setTimeout(() => {
      if (this.content && this.content.ionScroll) {
        this.content.scrollToBottom(duration);
      }
    }, 200);
  }

  initializeBackButtonCustomHandler(): void {
    this.unregisterBackButtonAction = this.platform.ready().then(() => {
      document.addEventListener('backbutton', () => {
        this.whengetout();
      });
    });
  }

  whengetout() {
    this.socket.emit('leave-room', this.conversation.id);
    console.log('leaveRoom', this.conversation.id);
    setTimeout(() => {
      this.socket.disconnect();
      // this.navCtrl.pop();
      // if (this.navCtr.canGoBack()) {
      // 	this.navCtr.pop();
      // } else {
      // 	this.platform.exitApp();
      // }
      console.log('Disconnect');
    }, 100);
  }

  ngOnDestroy() {
    this.whengetout();
  }

  goBackProduct(product) {
    this.router.navigateByUrl('/discussion').finally(()=>this.whengetout())
    this.whengetout();
    this.navCtrl.back();  
  }
 async goToProduct(product) {
    this.whengetout();
    setTimeout(() => {
      this.router.navigateByUrl('/product-details/' + product?.id);
    }, 200);
   }
}
