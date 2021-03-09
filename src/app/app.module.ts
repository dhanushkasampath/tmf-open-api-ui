import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerMgtComponent } from './customer-mgt/customer-mgt.component';
import { CreateCustomerComponent } from './customer-mgt/create-customer/create-customer.component';
import { QueryCustomerComponent } from './customer-mgt/query-customer/query-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerMgtComponent,
    CreateCustomerComponent,
    QueryCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
