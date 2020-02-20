import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from './../../environments/environment';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
})
export class CoreModule {}
