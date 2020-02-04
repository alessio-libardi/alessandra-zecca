import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routes: Routes = [
  {
    path: '**',
    loadChildren: () => import('@alessandra-zecca/clients/admin/feature-shell/shell').then(m => m.ShellModule)
  }
]
const config: ExtraOptions = {}

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
