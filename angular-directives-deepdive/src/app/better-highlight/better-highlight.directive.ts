import {Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit {
    @Input() defaultColor: string = 'transparent';
    @Input('appBetterHighlight') highLihtColor: string = 'transparent';

    constructor(private renderer: Renderer2, private elementRef: ElementRef){}

    ngOnInit(){
       this.backgroundColor = this.defaultColor
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');

    }

//bind to the styles of the host element
@HostBinding('style.backgroundColor') backgroundColor: string;

//bind to the events of the host element
@HostListener('mouseenter') mouseover(eventData: Event){ 
    this.backgroundColor = this.highLihtColor;
}
@HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = this.defaultColor;
}

}