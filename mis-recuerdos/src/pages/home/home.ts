import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NuevoPage } from '../nuevo/nuevo';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

    irANuevo() {
    this.navCtrl.push(NuevoPage);
  }
}
