import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appGithighlight]'
})
export class GithighlightDirective {

  constructor(private elem: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter(){
    this.highlight('yellow');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('');
  }
  private highlight(color:string){
    this.elem.nativeElement.style.backgroundColor=color;
  }
}
