import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Registration3Page } from '../registration3/registration3';

/**
 * Generated class for the Registration2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-registration2',
  templateUrl: 'registration2.html',
})
export class Registration2Page {


  is_subleaser: boolean;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.is_subleaser= navParams.get('is_subleaser');
    console.log("User status is: " + this.is_subleaser);
  }


  navigateToRegistration3Page(first_name: string, last_name: string, email: string, password: string, is_subleaser: boolean) {
    console.log("navigating...");
    this.navCtrl.push(Registration3Page, {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        is_subleaser: this.is_subleaser

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Registration2Page');
  }

}
