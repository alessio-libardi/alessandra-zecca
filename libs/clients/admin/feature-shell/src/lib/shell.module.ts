import { SharedModule } from '@alessandra-zecca/clients/admin/feature-shared';
import { NgModule } from '@angular/core';

import { ShellRoutingModule } from './shell-routing.module';

@NgModule({
  imports: [SharedModule, ShellRoutingModule],
})
export class ShellModule {}
