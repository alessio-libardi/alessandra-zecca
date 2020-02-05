import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShellComponent } from './page/shell/shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        canActivate: [],
        loadChildren: () => import('@alessandra-zecca/clients/admin/feature-auth').then((m) => m.AuthModule),
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
