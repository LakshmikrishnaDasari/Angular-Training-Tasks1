import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  // constructor(el:ElementRef) { 
  //   el.nativeElement.style.background="yellow";
  // }

  constructor(private el: ElementRef) { }
 
  @Input() defaultColor: string;
 
  @Input('appHighlighter') highlightColor: string;
 
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
 
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}