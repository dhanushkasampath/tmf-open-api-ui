import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueryCustomerComponent } from './customer-mgt/query-customer/query-customer.component';
import { CreateCustomerComponent } from './customer-mgt/create-customer/create-customer.component';

const routes: Routes = [
  { path: '', component: QueryCustomerComponent },
  { path: 'add-new-customer', component: CreateCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
