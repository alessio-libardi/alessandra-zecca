import { NgModule } from '@angular/core';
import { environment } from './../../environments/environment';

import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  imports: [ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
})
export class CoreModule { }
