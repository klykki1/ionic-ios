import {
  Component,
  ElementRef, Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {IonContent, ModalController, NavController} from '@ionic/angular';
import {ApiServices} from '../../services/api-services/api-services';
import {forkJoin} from 'rxjs';
import { ProductService } from 'src/app/services/product/product.service';
import { SuiviService } from 'src/app/services/suivi.service';

declare const google: any;

@Component({
  selector: 'app-slideup',
  templateUrl: './slideup.component.html',
  styleUrls: ['./slideup.component.scss'],
})
export class SlideupComponent implements OnInit {
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild(IonContent) content: IonContent;
  @ViewChild('directionsPanel') directionsPanel: ElementRef;
  @Input('product') product: any;
  currentProduct: any;
  map: any;
  show_confirm: boolean = false;
  showways: boolean = false;
  gettingLocation = false;

  constructor(public navCtrl: NavController,
              private modalController: ModalController,
              private services: ApiServices,
              private productService: ProductService,
              private suiviServices: SuiviService
  ) {
  }

  ngOnInit(): void {
    console.log('1')
    forkJoin([
      this.productService.getProductbyId(this.product),
      this.services.addvisitors(this.product)
    ]).subscribe(results => {
      this.currentProduct = results[0];
      this.currentProduct.visitor = results[1].visitors;
      this.getCurrentPosition();
    });
  }

  getCurrentPosition() {
    console.log('2');
    this.gettingLocation = true;
    this.services.getCurrentLocation(true).then((res: any) => {
      this.gettingLocation = false;
      this.services.current_position.lat = res.coords.latitude;
      this.services.current_position.lng = res.coords.longitude;
      console.log(this.services.current_position);
      console.log(this.currentProduct);
      this.loadMap();
      this.startNavigating();
    }).catch(err => {
      this.gettingLocation = false;
      console.log('Position Error ', err);
    });
  }


  convertedtoObject(start) {
    return Array(start).fill(1);
  }

  // MAPS Methodes

  loadMap() {
    console.log(this.currentProduct);
    const latLng = new google.maps.LatLng(parseFloat(this.currentProduct.address.lat),
      parseFloat(this.currentProduct.address.long));

    const mapOptions = {
      center: latLng,
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }

  startNavigating() {
    console.log(this.currentProduct, 'currentProduct');
    console.log(this.services, 'services');
    let directionsService = new google.maps.DirectionsService();
    let directionsDisplay = new google.maps.DirectionsRenderer();

    directionsDisplay.setMap(this.map);
    directionsDisplay.setPanel(this.directionsPanel.nativeElement);
    directionsService.route({
      origin: {
        lat: parseFloat(this.services.current_position.lat),
        lng: parseFloat(this.services.current_position.lng)
      },
      destination: {
        lat: parseFloat(this.currentProduct.address.lat),
        lng: parseFloat(this.currentProduct.address.long)
      },
      travelMode: google.maps.TravelMode.DRIVING
    }, (res, status) => {
      console.log(res);
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(res);
      } else {
        console.warn(status);
      }

    });

  }

  scrollToBottom(duration?: number) {
    this.showways = !this.showways;
    if (this.showways) {
      setTimeout(() => {
        if (this.content) {
          this.content.scrollToBottom(duration);
        }
      }, 200);
    }
  }

  thisIstheProduct() {
    console.log('this is The product');
    this.suiviServices.deletesuivi(this.currentProduct.id).then((res: any) => {
      console.log(res);
      // this.ui.toast('On a Trouvé : '+this.current_product.title+' !!! ' ,null,null,null,'top');
      this.show_confirm = false;
    }).catch((err: any) => {
      console.log(err);
    });
  }

  close() {
    // this.navCtrl.pop();
    this.modalController.dismiss();
  }
}
