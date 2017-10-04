import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RoulettePage} from "../roulette/roulette";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    roulettePage = RoulettePage;

    constructor (public navCtrl: NavController) {

    }

}
