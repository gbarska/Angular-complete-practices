import {Directive,Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[appUnless]'
})

export class UnlessDirective{

    constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef){}
    
    //the property must receive the same name as the selector of the structural directive
    @Input() set appUnless(condition: boolean){
        if(!condition){
            this.vcRef.createEmbeddedView(this.templateRef);
        }else{
            this.vcRef.clear();
        }
    }

  
}