import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import {StoreapiService} from './store/storeapi.service';
import {ProductapiService} from './products/productapi.service'
import { HttpClientModule } from '@angular/common/http';
import { LocationComponent } from './location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    ProductsComponent,
    HeaderComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [StoreapiService,ProductapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
