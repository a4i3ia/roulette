import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {RoulettePage} from './roulette';
import {DirectivesModule} from "../../directives/directives.module";

@NgModule({
    declarations: [
        RoulettePage,
    ],
    imports: [
        DirectivesModule,
        IonicPageModule.forChild(RoulettePage),
    ],
})
export class RoulettePageModule {
}
