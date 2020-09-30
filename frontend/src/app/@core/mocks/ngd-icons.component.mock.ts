import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngd-icons',
  template: '<ng-content></ng-content>'
})
export class MockNgdIconsComponent implements OnInit {
  @Input() name: string;
  constructor() { }

  ngOnInit(): void { }
}
