import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) { 
    this.el.nativeElement.onmouseover = function (){
      this.highlight("yellow");
    };
    this.el.nativeElement.onmouseout = function (){
      this.highlight += 'red';
    }
  }
  

}
