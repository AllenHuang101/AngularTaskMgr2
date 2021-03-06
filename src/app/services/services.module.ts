

import { ModuleWithProviders, NgModule } from '@angular/core';
import { ProjectService } from './project.service';
import { QuoteService } from './quote.service';


@NgModule()
export class ServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
        QuoteService,
        ProjectService
      ]
    }
  }
}
