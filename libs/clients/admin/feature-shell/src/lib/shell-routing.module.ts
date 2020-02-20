import { SharedModule } from '@alessandra-zecca/clients/admin/feature-shared';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShellComponent } from './pages/shell/shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@alessandra-zecca/clients/admin/feature-auth').then((m) => m.AuthModule),
      },
      {
        path: '',
        loadChildren: () => import('@alessandra-zecca/clients/admin/feature-main').then((m) => m.MainModule),
      },
      {
        path: '**',
        redirectTo: '/login',
      },
    ],
  },
];

@NgModule({
  declarations: [ShellComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class ShellRoutingModule {}
