import {Events} from 'ionic-angular';
import {Gesture} from 'ionic-angular/gestures/gesture';
import {Directive, ElementRef} from "@angular/core";
declare var Hammer: any;


@Directive({
    selector: '[swipe-listener]' // Attribute selector
})
export class SwipeListenerDirective {

    private el: HTMLElement;
    private swipeGesture: Gesture;
    currentAngel = 0

    constructor(el: ElementRef,  public events: Events) {
        this.el = el.nativeElement;
        this.events = events;
    }
    ngOnInit() {
        this.swipeGesture = new Gesture(this.el, {
            recognizers: [
                [Hammer.Swipe, {direction: Hammer.DIRECTION_ALL}]
            ]
        });
        this.swipeGesture.listen();
        this.swipeGesture.on('swipe', e => {
            console.log('swipe : ', e.velocity);
            let roulette = document.getElementById('roulette');
            this.currentAngel += 360*e.velocity;
            roulette.style.cssText = 'transform:rotate('+this.currentAngel+'deg); ' +
                'transition: '+Math.abs(e.velocity)+'s ease-in-out; ' +
                'width: 100%;';
        });
    }

    ngOnDestroy() {
        this.swipeGesture.destroy();
    }

}
