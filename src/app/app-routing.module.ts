import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueryCustomerComponent } from './customer-mgt/query-customer/query-customer.component';
import { CreateCustomerComponent } from './customer-mgt/create-customer/create-customer.component';
import { CustomerMgtComponent } from './customer-mgt/customer-mgt.component';
import { ViewCustomerComponent } from './customer-mgt/view-customer/view-customer.component';

const routes: Routes = [
  { path: '', component: CustomerMgtComponent },
  { path: 'query-customer', component: QueryCustomerComponent },
  { path: 'add-new-customer', component: CreateCustomerComponent },
  { path: 'view-customer/:id', component: ViewCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
