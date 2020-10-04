import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircularProgressComponent } from './components/circular-progress/circular-progress.component';
import { NgdIconsModule } from 'ngd-icons';
import { FormsModule } from '@angular/forms';
import { TrackByPropertyPipe } from './pipes/track-by-property.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [
    // Components
    CircularProgressComponent,
    // Pipes
    TrackByPropertyPipe,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    NgdIconsModule,
    FormsModule
  ],
  exports: [
    CircularProgressComponent,
    NgdIconsModule,
    FormsModule,
    // Pipes
    TrackByPropertyPipe,
    TruncatePipe
  ]
})
export class SharedModule {
  constructor() { }
}
