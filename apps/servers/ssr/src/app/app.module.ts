import { Module } from '@nestjs/common';
import {
  applyDomino,
  AngularUniversalModule,
  AngularUniversalOptions
} from '@nestjs/ng-universal';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import { join, resolve } from 'path';

const BROWSER_DIR = join(process.cwd(), 'dist/apps/clients/portfolio');
applyDomino(global, join(BROWSER_DIR, 'index.html'));

const {
  AppServerModuleNgFactory,
  LAZY_MODULE_MAP,
} = require('/dist/apps/clients/portfolio/server/main.js');

const OPTIONS: AngularUniversalOptions = {
  viewsPath: BROWSER_DIR,
  bundle: {
    AppServerModuleNgFactory,
    LAZY_MODULE_MAP,
    provideModuleMap,
    ngExpressEngine,
  },
};

@Module({
  imports: [AngularUniversalModule.forRoot(OPTIONS)],
})
export class AppModule {}
