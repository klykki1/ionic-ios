import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BadgeService {
  private subject = new Subject<any>();
  private messageSubject = new Subject<any>();
  private resetmessageSubject = new Subject<any>();
  private resetSubject = new Subject<any>();
  private suiviSubject = new Subject<Array<number>>();
  private insideChatSubject = new BehaviorSubject<boolean>(false);
  constructor() { }

  sendBadgeProductNumber(number: number) {
    this.subject.next(number)
  }
  sendBadgeMessageNumber(number: number) {
    this.messageSubject.next(number)
  }
  sendSuivisNotificationId(number: Array<number>) {
    this.suiviSubject.next(number);
    console.log(number);
    console.log(this.suiviSubject.next(number));
    
  }
  insideChat(response) {
    this.insideChatSubject.next(response)
  }
  clearBadges() {
    this.subject.next();
    this.resetSubject.next();
  }
  clearBadgesMessage() {
    this.messageSubject.next();
    this.resetmessageSubject.next()
  }
  resetBadgeMessage(): Observable<any> {
    return this.resetmessageSubject.asObservable();
  }
  resetBadgeProduct(): Observable<any> {
    return this.resetSubject.asObservable();
  }
  getNumber(): Observable<any> {
    return this.subject.asObservable();
  }
  getNumberMessage(): Observable<any> {
    return this.messageSubject.asObservable();
  }
  getinsidechat(): Observable<boolean> {
    return this.insideChatSubject.asObservable();
  }
  getSuiviNotif(): Observable<Array<number>> {
    return this.suiviSubject.asObservable();
  }

}
