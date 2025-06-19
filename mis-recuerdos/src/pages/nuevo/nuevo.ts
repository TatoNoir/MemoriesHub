import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-nuevo',
  templateUrl: 'nuevo.html'
})

export class NuevoPage {
  constructor(public navCtrl: NavController, private camera: Camera) { }

  tomarFoto() {
  const options: CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  this.camera.getPicture(options).then((imageData) => {
    const base64Image = 'data:image/jpeg;base64,' + imageData;
    console.log('Foto tomada:', base64Image);
  }, (err) => {
    console.error('Error al tomar la foto', err);
  });
}
}
