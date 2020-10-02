import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircularProgressComponent } from './components/circular-progress/circular-progress.component';
import { NgdIconsModule } from 'ngd-icons';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CircularProgressComponent],
  imports: [
    CommonModule,
    NgdIconsModule,
    FormsModule
  ],
  exports: [
    CircularProgressComponent,
    NgdIconsModule,
    FormsModule
  ]
})
export class SharedModule {
  constructor() { }
}
