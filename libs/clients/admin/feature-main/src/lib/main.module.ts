import { SharedModule } from '@alessandra-zecca/clients/admin/feature-shared';
import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';

@NgModule({
  imports: [SharedModule, MainRoutingModule],
})
export class MainModule {}
