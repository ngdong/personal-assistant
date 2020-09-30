import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngd-circular-progress',
  templateUrl: './circular-progress.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CircularProgressComponent implements OnInit{
  @Input() diameter: number;
  @Input() percentage: number;
  @Input() borderWidth: number;
  @Input() bgColor = '#f3f3f3';
  @Input() progressClass: string;
  @Input() percentSignClass: string;
  @Input() percentNumberClass: string;
  radius: number;
  coordinate: number;
  strokeDasharray: number;
  strokeDashoffset: number;
  constructor(private cdf: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.coordinate = Number(this.diameter) / 2;
    this.radius = Number(this.diameter) / 2 - Number(this.borderWidth);
    this.strokeDasharray = Math.PI * (this.radius * 2);
    this.strokeDashoffset = this.strokeDasharray - (this.strokeDasharray * Number(this.percentage)) / 100;
    this.cdf.detectChanges();
  }
}
