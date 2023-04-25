import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InformationComponent } from './information/information.component';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InformationComponent,
    HomeComponent,
    SellerAuthComponent,
    ErrorComponent,
    SellerHomeComponent,
    SellerAddProductComponent,
    
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
