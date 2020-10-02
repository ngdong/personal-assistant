import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input, Optional } from '@angular/core';
import { NgdIconsRegistry } from './ngd-icons-registry.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'ngd-icons',
  template: `
    <ng-content></ng-content>
  `,
  styles: [':host::ng-deep svg{ width: 100%; height: 100% }'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgdIconsComponent {
  private svgIcon: SVGElement;

  @Input()
  set name(iconName: string) {
    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }
    const svgData = this.ngdIconRegistry.getIcon(iconName);
    this.svgIcon = this.svgElementFromString(svgData);
    this.element.nativeElement.appendChild(this.svgIcon);
  }

  constructor(private element: ElementRef,
              private ngdIconRegistry: NgdIconsRegistry,
              @Optional() @Inject(DOCUMENT) private document: any) { }

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
  }
}
