import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { CartComponentComponent } from './components/cart-component/cart-component.component';
import { SubmitMobileDataComponent } from './components/submit-mobile-data/submit-mobile-data.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponentComponent,
    CartComponentComponent,
    SubmitMobileDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
