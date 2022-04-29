import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductSuiviPickerPopOverComponent } from './product-suivi-picker-pop-over.component';

describe('ProductSuiviPickerPopOverComponent', () => {
  let component: ProductSuiviPickerPopOverComponent;
  let fixture: ComponentFixture<ProductSuiviPickerPopOverComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSuiviPickerPopOverComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductSuiviPickerPopOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
