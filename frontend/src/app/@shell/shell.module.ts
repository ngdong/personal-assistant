import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShellRoutingModule } from './shell-routing.module';
import { SharedModule } from '@shared/shared.module';
import { NgdIconsRegistry } from 'ngd-icons';
import { ngdIconBell, ngdIconSearch, ngdIconAngleArrowDown } from 'ngd-icons/icons';

@NgModule({
  declarations: [
    ShellComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ShellRoutingModule,
    SharedModule
  ]
})
export class ShellModule {
  constructor(private iconRegistry: NgdIconsRegistry) {
    this.iconRegistry.registerIcons([ngdIconBell, ngdIconSearch, ngdIconAngleArrowDown]);
  }
}
