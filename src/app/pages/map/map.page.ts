import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MenuController, ModalController, NavParams} from '@ionic/angular';
import {ApiServices} from '../../services/api-services/api-services';
import {Router} from '@angular/router';
import * as $ from 'jquery';
import {RegisterPage} from '../register/register.page';
import {ConfidentialitePage} from '../confidentialite/confidentialite.page';

@Component({
    selector: 'app-map',
    templateUrl: './map.page.html',
    styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {


    @ViewChild('mainContainer') mainContainer: ElementRef;
    @ViewChild('logo') logo: ElementRef;
    @ViewChild('chat_input') myInput;
    public showbutton: any = false;
    public filtred: any = [];
    public focused = false;
    public autocomplete = false;
    public regions: any[] = [{title: '- Vide -'}];
    public address: any;
    public chosedRegion = false;

    constructor(public router: Router,
                private modalCtrl: ModalController,
                public navParams: NavParams,
                private menu: MenuController,
                private services: ApiServices) {
        const self = this;
        $(document).ready(() => {
            $('path').on('click', (event) => {
                $('path').css('fill', '#c4bcb2');
                $(this).css('fill', '#f0b43e');
                this.showbutton = true;
                console.log(this.showbutton);
                setTimeout(() => {
                    // self.router.push(HomePage, {'location': $('path').attr('id')});
                    // this.router.navigateByUrl('/home');
                }, 200);
            });
        });
        this.filtred = this.regions;
    }
    ngOnInit() {
    }

    gotoHome() {
        // this.navCtrl.push(HomePage,{'region':this.address});
        // this.navCtrl.push(HomePage, {'openMenu': true});
       // this.menu.open('first');
        this.router.navigateByUrl('/products');
    }

    filterItems(ev: any) {
        this.chosedRegion = false;
        const val = ev.target.value;
        const me = this;
        this.filtred = this.regions;
        if (val && val.trim() !== '') {
            console.log('This is The value ', val, ' / ', val.trim());
            this.filtred = this.filtred.filter((item) => item.name.toLowerCase().includes(val.toLowerCase()));
            if (this.filtred.length > 0) {
                this.autocomplete = true;
            } else {
                this.autocomplete = false;
            }
            console.log('After-Filter-Search : ', this.filtred);
        } else {
            this.autocomplete = false;
        }
    }

    choseRegion(filter) {
        console.log(filter);
        this.address = filter.name;
        this.autocomplete = false;
        this.chosedRegion = true;
        console.log('Chosed Region Here ', this.chosedRegion);
    }

    changePosition($event) {
        this.focused = true;
        this.mainContainer.nativeElement.style.transform = 'translateY(0%)';
        this.mainContainer.nativeElement.style.width = '100%';
        this.logo.nativeElement.style.transform = 'translateX(-50%) rotate(360deg)';
        this.logo.nativeElement.style.width = '0px';
        console.log(this.mainContainer.nativeElement);
    }

    changePositionBlur($event) {
        setTimeout(() => {
            this.focused = false;
            this.mainContainer.nativeElement.style.transform = 'translateY(50%)';
            this.logo.nativeElement.style.transform = 'translateX(-50%)';
            this.logo.nativeElement.style.width = '120px';
            console.log(this.mainContainer.nativeElement);
        }, 10);

    }


    async openModal() {
        const modal = await this.modalCtrl.create({
            component: ConfidentialitePage
        });
        return await modal.present();
    }

    async profileEdit() {
        const modal = await this.modalCtrl.create({
            component: RegisterPage,
            componentProps: {
                profile: true
            }
        });
        return await modal.present();
    }
}
