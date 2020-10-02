import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { SharedModule } from '@shared/shared.module';
import { NgdIconsRegistry } from 'ngd-icons';
import { ngdIconNewList, ngdIconNewTask, ngdIconCancel, ngdIconChecked, ngdIconMore } from 'ngd-icons/icons';
import { CreateTaskComponent } from './components/create-task/create-task.component';


@NgModule({
  declarations: [TodoComponent, CreateTaskComponent],
  imports: [
    CommonModule,
    SharedModule,
    TodoRoutingModule,
  ]
})
export class TodoModule {
  constructor(private iconRegistry: NgdIconsRegistry) {
    this.iconRegistry.registerIcons([ngdIconNewList, ngdIconNewTask, ngdIconCancel, ngdIconChecked, ngdIconMore]);
  }
}
