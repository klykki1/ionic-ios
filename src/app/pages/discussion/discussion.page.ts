import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IonInfiniteScroll, NavParams} from '@ionic/angular';
import { map } from 'rxjs/operators';
import { BadgeService } from 'src/app/services/badge-service/badge.service';
import {ApiServices} from '../../services/api-services/api-services';
import {ChatService} from "../../services/chat.service";
interface InfiniteScrollCustomEvent extends CustomEvent {
  target: HTMLIonInfiniteScrollElement;
}
@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.page.html',
  styleUrls: ['./discussion.page.scss'],
})
export class DiscussionPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

   product: any = {};
   discussions: any = [];
   currentUser:any;
  constructor(
    public router: Router,
    public navParams: NavParams,
    private services: ApiServices,
    private chatService: ChatService,
    private badgeService: BadgeService,
    private activatedRoute: ActivatedRoute
  ) {

    this.product = this.navParams.get('product');
    
    
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(res => {
      this.product = res?.idProduct;
    });
    this.getdiscussion();
    this.badgeService.clearBadgesMessage();
    this.currentUser = this.services.current_user.id;
    console.log(this.currentUser);
  }
  doRefresh(event) {

  setTimeout(() => {
    this.ngOnInit()
    event.target.complete();
  }, 1000);
}

  getdiscussion() {
    this.chatService.getChatByUser(this.product).pipe(
      map(discussion => discussion.sort((a, b) => new Date(b.last_message?.created_at).getTime() - new Date(a.last_message?.created_at).getTime()))
  ).subscribe((discussion: any) => {
      this.discussions = discussion;
    }, err => {
      this.services.fireError(err);
    });
  }

  gotoChat(conversation) {
    this.router.navigateByUrl('/chat', {state: {conversation}}).then(()=>{
      this.chatService.updateMessage(conversation.last_message.id).subscribe(res=>{
      })
    });
  }
  delete(discussion){
    let conversationId=discussion.id;
    this.chatService.deleteConversationUser(conversationId).subscribe(res=>{
      this.ngOnInit()
      
    })
    
  }
}
