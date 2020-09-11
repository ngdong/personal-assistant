import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell.component';
import { AuthenticationGuard } from '@app/@core/guards/authentication.guard';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    canActivate: [AuthenticationGuard],
    data: { reuse: true },
    children: [
      {
        path: '',
        loadChildren: () => import('@app/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShellRoutingModule {}
