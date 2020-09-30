import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '@shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { NgdIconsRegistry } from 'ngd-icons';
import { ngdIconLongUpArrow, ngdIconAngleArrowDown } from 'ngd-icons/icons';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {
  constructor(private iconRegistry: NgdIconsRegistry) {
    this.iconRegistry.registerIcons([ngdIconLongUpArrow, ngdIconAngleArrowDown]);
  }
}
