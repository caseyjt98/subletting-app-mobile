import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {}


  navigateToLogin() {

    console.log("Navigating...") 

  }

}