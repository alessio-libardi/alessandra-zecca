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
    ],
  },
];

@NgModule({
  declarations: [ShellComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShellRoutingModule {}
