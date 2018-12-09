

import { QuoteService } from './quote.service';
import { ModuleWithProviders, NgModule } from '@angular/core';


@NgModule()
export class ServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
        QuoteService
      ]
    }
  }
 }