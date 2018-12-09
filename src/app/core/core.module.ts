import { NgModule,SkipSelf,Optional } from '@angular/core';
import { ServicesModule } from '../services/services.module';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { loadSvgResources } from '../utils/svg.util';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';


import 'hammerjs';
import 'rxjs/add/operator/take';
import '../utils/debug.util';

@NgModule({
  imports: [
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    ServicesModule.forRoot(),
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent,  
  ],
  providers: [
    {
      provide: 'BASE_CONFIG',
      useValue: {
        uri: 'http://localhost:3000'
      }
    }
  ]
})
export class CoreModule { 
  constructor( @Optional() @SkipSelf() parent: CoreModule,
    ir: MdIconRegistry,
    ds: DomSanitizer
  ){
    if(parent){
      throw new Error("模块已存在，不能再次加载");
    }
    loadSvgResources(ir,ds);
  }
}
