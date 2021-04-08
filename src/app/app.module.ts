import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerMgtComponent } from './customer-mgt/customer-mgt.component';
import { CreateCustomerComponent } from './customer-mgt/create-customer/create-customer.component';
import { QueryCustomerComponent } from './customer-mgt/query-customer/query-customer.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {UtilMaterialModule} from "./util/util-material.module";
import {CommonModule} from "@angular/common";
import { ViewCustomerComponent } from './customer-mgt/view-customer/view-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerMgtComponent,
    CreateCustomerComponent,
    QueryCustomerComponent,
    ViewCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
    UtilMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
