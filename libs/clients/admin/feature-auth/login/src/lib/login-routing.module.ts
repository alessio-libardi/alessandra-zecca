import { ShellComponent } from './page/shell.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'login',
        pathMatch: 'full',
        loadChildren: () => import('@alessandra-zecca/clients/admin/feature-auth/login').then(m => m.LoginModule)
      },
      {
        path: 'logout',
        pathMatch: 'full',
        loadChildren: () => import('@alessandra-zecca/clients/admin/feature-auth/logout').then(m => m.LogoutModule)
      },
    ]
  }
]
const config: ExtraOptions = {}

@NgModule({
  declarations: [ShellComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
