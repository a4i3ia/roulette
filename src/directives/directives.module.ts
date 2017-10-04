import {NgModule} from '@angular/core';
import {SwipeListenerDirective} from './swipe-listener/swipe-listener';
import {IonicModule} from "ionic-angular";


@NgModule({
    declarations: [SwipeListenerDirective],
    imports: [IonicModule],
    exports: [SwipeListenerDirective]
})
export class DirectivesModule {
}
