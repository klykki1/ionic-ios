import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {IonSlides, ModalController, NavParams, Platform} from '@ionic/angular';
import {UiService} from '../../services/ui/ui';
import {ApiServices} from '../../services/api-services/api-services';
import {AppConfigService} from '../../services/app-config/app-config';
import {MapPikkerPage} from '../map-pikker/map-pikker.page';
import {File} from '@awesome-cordova-plugins/file/ngx';
import {Media, MediaObject} from '@awesome-cordova-plugins/media/ngx';
import {catchError} from 'rxjs/operators';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
   public updatedCatID: any;
  public  updatedCatSubCat: any;
   public addProduct: boolean = false;
  public  startRecord: boolean = false;
  public  addProducts: FormGroup= new FormGroup({});
  public  selectedProperties: any = [];
  public  audiopath: any = null;
  public  selectedRegion: any;
  public  showplay: any=false;
   public selectedCategory: any;
  public  product: any = {
    address:
      {
        address: null,
        lat: 45.087890625,
        long: 2.321167252957821
      }
  };
 public arrayImages: any = [];
 public subcategories: any = [];
 public filePath: string;
 public fileName: string;
 public audio: MediaObject;
 public hasRecord = false;
 public  isplaying: any = false;
 public  isAudio: any = false;
 public  audioDuration: any = null;
 public  go = false;
 public  myDate: any;
 public  categorys: any = [];
 public  regions: any = [];
 public  selectedC: any = [];
 public  propertyModel: any = {};
 public editProduct:any;
 public modif:boolean=false;
  constructor(public router: Router,
              private formBuilder: FormBuilder,
              public navParams: NavParams,
              private ui: UiService,
              private media: Media,
              private zone: NgZone,
              private services: ApiServices,
              public modalCtrl: ModalController,
              private file: File,
              public platform: Platform,
              private productService:ProductService
  ) {
    this.modif = this.router.getCurrentNavigation().extras.state?.modify;
    if (this.modif == true) {
      this.initializeFrom()
      this.editProduct= this.router.getCurrentNavigation().extras.state.product_to_edit;
      
    } else this.initializeFrom() 
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.productService.getCategories().subscribe(res => {
      this.categorys = res;
      if (this.modif){
        this.product = this.editProduct;
        this.arrayImages = this.product.arrayImages;
          this.zone.run(() => {
            // this.updatedCat_ID=this.product.subcategory.category.id;
            this.selectedC = this.product.subcategory.category;
            let category = this.categorys.filter(x => x.id === this.product.subcategory.category.id);
            this.subcategories = category.subcategories;
            // console.log(this.updatedCat_ID);
              if (this.selectedC.title !== 'EMPLOI') this.addProducts.addControl('price', new FormControl('', [Validators.required]));
               else this.addProducts.removeControl('price'); 
              this.selectedCategory = this.product.subcategory.id;
               this.loadproperties();
          })
      }
     
    }, catchError(error => {
      this.ui.toast('Erreur : Chargement des Categories');
      throw error;
    }));

    this.productService.getRegions().subscribe(res => {
     
      this.regions = res;
    }, err => {
      this.ui.toast('Erreur : Chargement des regions');
    });

  }


  loadSubcategories($event?) {
    if (this.selectedC.title !== 'EMPLOI') {
      this.addProducts.addControl('price', new FormControl('', Validators.required));
    } else {
      this.addProducts.removeControl('price');
    }
    this.subcategories = this.selectedC.subcategories;
  }


  loadproperties($event?) {
    this.productService.getProperties(this.selectedCategory).then((res: any) => {
      console.log('Recieved Properties : ', res.properties);
      this.zone.run(() => {
        this.clearfoms().then(() => {
          this.selectedProperties = res.properties;
          this.refactureFroms(res.properties);
        });
      });
    }).catch((error: any) => {
      this.ui.fireError(error);
    });
  }

  clearfoms() {
    return new Promise((resolve, reject) => {
      this.selectedProperties.forEach(property => {
        this.addProducts.removeControl(property.key);
      });
      resolve(true);
    });
  }

  refactureFroms(properties:any) {
    return new Promise((resolve, reject) => {
      properties.forEach((property:any) => {
        console.log('props',properties,property);
        
        if (property.required) {
          this.addProducts.addControl(property.key, new FormControl('', Validators.required));
        } else {
          this.addProducts.addControl(property.key, new FormControl(''));
        }
      });
      resolve(true);
    });
  }

  initializeFrom() {
    this.addProducts = this.formBuilder.group({
      description: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      title: ['', Validators.compose([Validators.required])],
      price: [''],
      phone: ['', Validators.compose([Validators.required])],
      address: ['', Validators.compose([Validators.required])],
      category: ['', Validators.compose([Validators.required])],
      subcategory: ['', Validators.compose([Validators.required])],
      // 'region':[', Validators.compose([Validators.required])]
    });
  }

  ionViewDidEnter() {

    
  }


  // compareFn(e1: any, e2: any): boolean {
  //   return e1 && e2 ? e1.id === e2.id : e1 === e2;
  // }
  compareFn(e1: any, e2: any): boolean {
    return e1 && e2 ? e1.id === e2.id : e1 === e2;
  }
  compareWith(e1: any, e2: any): boolean {
    return e1 && e2 ? e1.id == e2 : e1 == e2;
  }
  pictureType() {
    this.ui.imageType().then(base64Image => {
      this.arrayImages.push(base64Image);
    });
  }

  async showMap() {
    if (this.audio && this.fileName) {
      this.audio.stop();
    }
    const mapModal = await this.modalCtrl.create({
        component: MapPikkerPage,
        componentProps: {
          product: this.product
        }
      }
    );
    await mapModal.present();
    await mapModal.onDidDismiss().then((params: any) => {
      if (params) {
        this.product.address = {
          address: params.data.address.toString(),
          long: params.data.long.toString(),
          lat: params.data.lat.toString()
        };
      }
    });
  }

  pikkerDate(propertyId) {
    this.propertyModel[propertyId] = (new Date(this.myDate)).getTime();
    console.log(this.propertyModel[propertyId]);
  }

  deleteImage(img:any, index:any) {
    const currentIndex = index;
    if (img.id) {
      this.arrayImages.splice(currentIndex, 1);
    } else {
      this.arrayImages.splice(currentIndex, 1);
      this.slides.slidePrev(0);

    }
  }

  sendingData() {
    console.log('This the Properties Content ', this.propertyModel);
    this.addProduct = true;
    console.log(this.addProducts);
    console.log(this.addProducts.valid);
    console.log(this.arrayImages);
    // if (this.addProducts.valid && this.arrayImages.length > 0) {
    if (this.addProducts.valid && this.arrayImages.length > 0 ) {
      this.product.galleries = this.arrayImages;
      console.log(this.arrayImages);
      
      this.product.propertyAnswer = this.propertyModel;
      this.product.userid = this.services.current_user.id; // Must be Current User from auth
      this.product.subcategoryid = this.selectedCategory;//Must Be from Select from API Data
      this.product.categoryid = this.selectedC;//Must Be from Select from API Data
      this.product.regionid = this.selectedRegion;//Methode to get Region from Lat Long Required
      if (this.filePath) {
      console.log('this is the Product avec photo',this.product,this.filePath);
        this.productService.addFullProduct(this.product, this.filePath).subscribe(res => {
          this.router.navigateByUrl('/annonce');
        });
      } else {
      console.log('this is the Product');
        this.productService.addFullProduct(this.product).subscribe(res => {
          this.router.navigateByUrl('/annonce');
        });
      }
    }
  }


  startAudioRecorde() {
    if (this.platform.is('ios')) {
      this.fileName = 'record' + new Date().getDate() + new Date().getMonth() +
        new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.m4a';
      this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
      this.audio = this.media.create(this.filePath);
    } else if (this.platform.is('android')) {
      this.fileName = 'record' + new Date().getDate() + new Date().getMonth() +
        new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.mp3';
      this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
      this.audio = this.media.create(this.filePath);
      console.log(this.filePath);
      
      console.log("audio",this.audio);
      
    }
    setTimeout(() => {
      this.startRecord = true;
      this.audio.startRecord();
      console.log("start");
      
    }, 100);
  }

  showAndPlay() {
    this.stopAudio().then(() => {
      this.isAudio=true;
      this.hasRecord = true;
      this.showplayer();
    });
  }

  showplayer() {
    console.log('showPlay',this.filePath);
    this.showplay = true;
  }

  stopAudio() {
    
    return new Promise((resolve, reject) => {
      if (this.audio) {
        console.log("stop",this.audio);
        
        try {
          this.audio.stopRecord();
          this.startRecord = false;
          resolve(true);
        } catch (e) {
          this.startRecord = false;
          reject(false);
        }
      } else {
        this.startRecord = false;
        reject(false);
      }
    })
  
  }

  playAudio() {
    console.log('playAudio');
    this.audio = this.media.create(this.filePath);
    console.log('playAudio',this.audio);
    console.log('showPlay',this.filePath);
    setTimeout(() => {
      this.audio.play();
      console.log('playAudio',this.audio);
      this.isplaying = true;
      setTimeout(() => {
        let duration = Math.floor(this.audio.getDuration());
        console.log("duration",duration);
        
        setTimeout(() => {
          this.isplaying = false;
        }, (duration * 1000) + 200);
      }, 200);

    }, 100);
  }


  pauseAudio() {
    console.log('pauseAudio');
    this.isplaying = false;
    this.audio.stop();
  }

}
