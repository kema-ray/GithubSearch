import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appGithighlight]'
})
export class GithighlightDirective {

  constructor(private elem: ElementRef) { }
  private highlight(color:string){
    this.elem.nativeElement.style.backgroungColor=color;
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.highlight('blue');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('');
  }
}
