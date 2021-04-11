import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersViewComponent } from './customer-mgt/customers-view/customers-view.component';
import { CreateCustomerComponent } from './customer-mgt/create-customer/create-customer.component';
import { ManageCustomerComponent } from './customer-mgt/manage-customer/manage-customer.component';
import { QueryCustomerComponent } from './customer-mgt/query-customer/query-customer.component';

const routes: Routes = [
  { path: '', component: CustomersViewComponent },
  { path: 'query-customer', component: QueryCustomerComponent },
  { path: 'add-new-customer', component: CreateCustomerComponent },
  { path: 'view-customer/:id', component: ManageCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
