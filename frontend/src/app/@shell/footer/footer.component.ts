import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngd-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  today: number = Date.now();
  constructor() { }

  ngOnInit(): void {
  }

}
