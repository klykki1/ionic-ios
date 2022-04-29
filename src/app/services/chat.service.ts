import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpHelperService} from './http-helper/http-helper';
import {UiService} from './ui/ui';
import {AppConfigService} from './app-config/app-config';
import {HttpClient} from "@angular/common/http";
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private httpHelper: HttpHelperService,
              private configService: AppConfigService,
              private socket: Socket,
              private http: HttpClient,
              private ui: UiService) {
  }
  public sendMessage(message) {
    this.socket.emit('new-message', message);
}
public getMessages() :Observable<any> {
  return new Observable((observer)=>{
   this.socket.on('serverSendMsg',(data)=>{
     console.log(data)
     observer.next(data)
  })  ;
});
}
  /**
   *   chatList Chat
   */
  chatList(productId ?): Observable<any> {
     this.ui.loading();
    return this.httpHelper.request('GET', `/chat/list/${productId}`).pipe(map(response => {
        const resp = response;
         this.ui.unLoading();
        return resp;
      }, err => {
        console.log(err);
        this.ui.fireError(err);
      }
    ));
  }

  getChatByUser(productId?): Observable<any> {
     this.ui.loading();
    if(productId){
      return this.httpHelper.request('GET', `/chat/list/${productId}`).pipe(map(response => {
        const resp = response;
          this.ui.unLoading();
        return resp;
      }, err => {
        console.log(err);
        this.ui.fireError(err);
      }
    ));
    }else {
      return this.httpHelper.request('GET', `/chat/list`).pipe(map(response => {
        const resp = response;
         this.ui.unLoading();
        return resp;
      }, err => {
        console.log(err);
        this.ui.fireError(err);
      }
    ));
    }
  
  }

  /**
   *   storeMessage Chat
   *
   *   @param body: required
   *   @param conversationId: required
   */
  storeMessage(data): Observable<any> {
    return this.httpHelper.request('POST', `${this.configService.API}/chat/message`, data).pipe(map(response => {
        return response;
      }, err => {
        console.log(err);
        this.ui.fireError(err);
      }
    ));

  }

// Chat methods
  /**
   *   initConversation Chat
   *
   *   @param senderId: required
   *   @param receiverId: required
   */
  initConversation(data, page?, infiniteScroll?): Observable<any> {
    return this.httpHelper.request('POST', `/chat/init?page=${page}`, data).pipe(map(response => {
        const resp = response;
        return resp;
      }, err => this.ui.fireError(err)
    ));
  }

  deleteConversation(conversationId) {
    return new Promise(async (resolve) => {
      this.httpHelper.request('DELETE', `/chat/conversations/${conversationId}`).pipe(map(response => {
          const resp = response;
          resolve(resp);
        }, err => this.ui.fireError(err)
      ));
    });
  }
  deleteConversationUser(conversationId): Observable<any>  {
    return this.httpHelper.request('POST', `/chat/updateConversation/${conversationId}`).pipe(map(response => {
      const resp = response;
      return resp;
    }, err => this.ui.fireError(err)
  ));
  }
  updateMessage(id): Observable<any>  {
    return this.httpHelper.request('POST', `/chat/updateMessage/${id}`).pipe(map(response => {
      const resp = response;
      return resp;
    }, err => this.ui.fireError(err)
  ));
  }

  getDiscussions(product_id) {
     this.ui.loading();
    return new Promise((resolve, reject) => {
      this.httpHelper.request('post', this.configService.API + '/discussions', {product_id}).pipe(map((data) => {
        this.ui.unLoading();
        resolve(data);
      }, (error) => {
        this.ui.unLoading();
        reject(error);
      }));
    });
  }

  getCurrentdiscussion(product_id, opner ?) {
     this.ui.loading();
    return new Promise((resolve, reject) => {
      this.httpHelper.request('post', this.configService.API + '/currentdiscussion', {
        product_id,
        opner
      }).pipe(map((data) => {
        this.ui.unLoading();
        resolve(data);
      }, (error) => {
        this.ui.unLoading();
        reject(error);
      }));
    });
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  getDiscussionsById(discussion_id) {
     this.ui.loading();
    return new Promise((resolve, reject) => {
      this.http.get(this.configService.API + '/discussion/' + discussion_id).pipe(map((data) => {
        this.ui.unLoading();
        resolve(data);
      }, (error) => {
        this.ui.unLoading();
        reject(error);
      }));
    });
  }
}
