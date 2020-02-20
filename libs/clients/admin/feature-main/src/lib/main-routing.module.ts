import { SharedModule } from '@alessandra-zecca/clients/admin/feature-shared';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';
import { MenusComponent } from './pages/menus/menus.component';
import { PicturesComponent } from './pages/pictures/pictures.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        pathMatch: 'full',
        component: HomeComponent,
      },
      {
        path: 'menus',
        pathMatch: 'full',
        component: MenusComponent,
      },
      {
        path: 'pictures',
        pathMatch: 'full',
        component: PicturesComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [MainComponent, MenusComponent, PicturesComponent, HomeComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class MainRoutingModule {}
