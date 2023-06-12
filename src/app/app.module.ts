import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MenyydComponent } from './menyyd/menyyd.component';
import { FooterComponent } from './footer/footer.component';
import { KlaverComponent } from './klaver/klaver.component';
import { MorvComponent } from './morv/morv.component';
import { MeistComponent } from './meist/meist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MenyydComponent,
    FooterComponent,
    KlaverComponent,
    MorvComponent,
    MeistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
