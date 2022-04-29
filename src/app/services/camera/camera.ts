import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import {Platform} from '@ionic/angular';
import { ImagePicker, ImagePickerOptions } from '@awesome-cordova-plugins/image-picker/ngx';
@Injectable({ providedIn: 'root' })
export class CameraProvider {
	 optionsPicker: ImagePickerOptions = {
		//quality: 100, 
		maximumImagesCount: 8 			
	};
  constructor(public platform: Platform,
	private imagePicker: ImagePicker,
  						// public events: EventTarget,
              private camera: Camera) {}

  fromCamera() {
		return new Promise((resolve, reject) => {
			const options: CameraOptions = {
				destinationType: this.camera.DestinationType.DATA_URL,
				sourceType: this.camera.PictureSourceType.CAMERA,
				encodingType: this.camera.EncodingType.JPEG,
				quality: 50,
				targetWidth: 500,
				correctOrientation: true
			};
			this.platform.ready().then(() => {
				this.camera.getPicture(options).then((imageData) => {
					let base64Image = 'data:image/jpeg;base64,' + imageData;
					// this.events.publish('image:success', base64Image);
					resolve(base64Image);
				}, (err) => {
					reject(err);
					console.log('err get image : ', err);
				});
			});
		});
	}

	fromGalley() {
		return new Promise((resolve, reject) => {
			const options: CameraOptions = {
				destinationType: this.camera.DestinationType.DATA_URL,
				sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
				encodingType: this.camera.EncodingType.JPEG,
				quality: 50,
				targetWidth: 500,
				correctOrientation: true,
				
			};



			this.platform.ready().then(() => {
			
				this.camera.getPicture(options).then((imageData) => {
					let base64Image = 'data:image/jpeg;base64,' + imageData;
					// this.events.publish('image:success', base64Image);
					resolve(base64Image);
				}, (err) => {
					reject(err);
					console.log('err get image : ', err);
				// Handle error
				});
			});
		});
	}

}
