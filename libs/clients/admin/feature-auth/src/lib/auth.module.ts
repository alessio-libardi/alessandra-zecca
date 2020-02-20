import { SharedModule } from '@alessandra-zecca/clients/admin/feature-shared';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [SharedModule, AuthRoutingModule],
})
export class AuthModule {}
