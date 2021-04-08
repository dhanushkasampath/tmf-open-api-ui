import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from './../services/customer-service.service';

@Component({
  selector: 'app-customer-mgt',
  templateUrl: './customer-mgt.component.html',
  styleUrls: ['./customer-mgt.component.css']
})
export class CustomerMgtComponent implements OnInit {

  customerList = [];

  constructor(private customerService: CustomerServiceService) { }

  ngOnInit(): void {
    this.getCustomerList();
  }

  getCustomerList() {
    const request = {
      "requestHeader": {
        "channel": "app",
        "requestId": "e54eb678-b7b2-11ea-b3de-0242ac130004",
        "timestamp": "2020-12-08T14:00:00Z"
      }
    }

    this.customerService.getCustomerList()
      .subscribe(res => {
        
        this.customerList = res.responseData;
        console.log(this.customerList, "hh")
      }, err => {
        console.log(err);
      });
  }

}
