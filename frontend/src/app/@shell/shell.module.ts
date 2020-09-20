import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShellRoutingModule } from './shell-routing.module';
import { SharedModule } from '@app/@shared/shared.module';

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
export class ShellModule { }
