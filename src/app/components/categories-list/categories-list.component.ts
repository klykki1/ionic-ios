import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ApiServices} from '../../services/api-services/api-services';
import {catchError} from 'rxjs/operators';
import {IonMenu} from '@ionic/angular';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent implements OnInit {
  @Output() categoryClick: EventEmitter<any> = new EventEmitter();
  @ViewChild(IonMenu, {read: ElementRef}) content: ElementRef;
  isVisibles;

  @Input() set isVisible(val) {
    if (val !== this.isVisibles) {
      this.isVisibles = val;
      this.toggleState();
    }
  }

  contentHeight = null;
  innerMaxHeight = null;
  maxHeight = 0;
  categories: any = [];

  constructor(private services: ApiServices) {
    // this.events.unsubscribe('onMenuOpen')
    // this.events.subscribe('onMenuOpen', () => {
    //   this.initComponent();
    // })
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.services.getCategories().subscribe((res: any) => {
      // console.log(res)
      this.categories = res;
    }, catchError((err: any) => {
      this.services.fireError(err);
      this.categories = [];
      throw err;
    }));
  }

  initComponent() {
    this.contentHeight = this.content.nativeElement.clientHeight;
    this.innerMaxHeight = this.maxHeight;
    this.toggleState();
  }

  showSubcategories(category) {
    this.categoryClick.emit(category);
  }

  toggleState() {
    if (this.isVisibles) {
      this.content.nativeElement.style.height = `${this.contentHeight}px`;
    } else {
      this.content.nativeElement.style.height = `${this.innerMaxHeight}px`;
    }
  }
}

