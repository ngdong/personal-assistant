import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircularProgressComponent } from './components/circular-progress/circular-progress.component';
import { NgdIconsModule } from 'ngd-icons';

@NgModule({
  declarations: [CircularProgressComponent],
  imports: [
    CommonModule,
    NgdIconsModule
  ],
  exports: [
    CircularProgressComponent,
    NgdIconsModule
  ]
})
export class SharedModule {
  constructor() { }
}
