import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerServiceService } from '../../services/customer-service.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  customerData = [];

  queryForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute, private customerService: CustomerServiceService,
    private router: Router) { }

  ngOnInit(): void {

    this.getCustomerById();
    this.queryForm = this.formBuilder.group({
      id: new FormControl(''),
      name: new FormControl(''),
      href: new FormControl(''),
      status: new FormControl(''),
      type: new FormControl(''),
      statusReason: new FormControl(''),
      baseType: new FormControl(''),
      schemaLocation: new FormControl(''),
      startDateTime: new FormControl(''),
      endDateTime: new FormControl(''),

      // account
      accountId: new FormControl(''),
      accountReferredType: new FormControl(''),
      accountBaseType: new FormControl(''),
      accountType: new FormControl(''),
      accountName: new FormControl(''),
      accountDescription: new FormControl(''),
      accountHref: new FormControl(''),
      accountSchemaLocation: new FormControl(''),

      // payment
      paymentId: new FormControl(''),
      paymentReferredType: new FormControl(''),
      paymentBaseType: new FormControl(''),
      paymentType: new FormControl(''),
      paymentName: new FormControl(''),
      paymentHref: new FormControl(''),
      paymentSchemaLocation: new FormControl(''),

      // // characteristic
      // characteristicId: new FormControl(''),
      // characteristicName: new FormControl(''),
      // characteristicType: new FormControl(''),
      // characteristicBaseType: new FormControl(''),
      // characteristicValue: new FormControl(''),
      // characteristicValueType: new FormControl(''),
      // characteristicSchemaLocation: new FormControl(''),

      // // relatedParty
      // relatedPartyId: new FormControl(''),
      // relatedPartyName: new FormControl(''),
      // relatedPartyHref: new FormControl(''),
      // relatedPartyReferredType: new FormControl(''),
      // relatedPartyType: new FormControl(''),
      // relatedPartyBaseType: new FormControl(''),
      // relatedpartyRole: new FormControl(''),
      // relatedPartySchemaLocation: new FormControl(''),

      // // agreement
      // agreementId: new FormControl(''),
      // agreementName: new FormControl(''),
      // agreementHref: new FormControl(''),
      // agreementReferredType: new FormControl(''),
      // agreementType: new FormControl(''),
      // agreementBaseType: new FormControl(''),
      // agreementSchemaLocation: new FormControl(''),

      // // engagedPartyRole
      // engagedPartyId: new FormControl(''),
      // engagedPartyName: new FormControl(''),
      // engagedPartyHref: new FormControl(''),
      // engagedPartyReferredType: new FormControl(''),
      // engagedPartyType: new FormControl(''),
      // engagedPartyBaseType: new FormControl(''),
      // engagedPartyRole: new FormControl(''),
      // engagedPartySchemaLocation: new FormControl(''),

      // // creditProfile
      // creditProfileId: new FormControl(''),
      // creditProfileDate: new FormControl(''),
      // creditProfilecreditScore: new FormControl(''),
      // creditProfilecreditRiskRating: new FormControl(''),
      // creditProfileType: new FormControl(''),
      // creditProfileBaseType: new FormControl(''),
      // creditProfileSchemaLocation: new FormControl(''),
      // creditProfileStartDateTime: new FormControl(''),
      // creditProfileEndDateTime: new FormControl(''),

      // // contactMedium
      // contactMediumId: new FormControl(''),
      // contactMediumMediumType: new FormControl(''),
      // contactMediumPreferred: new FormControl(''),
      // contactMediumBaseType: new FormControl(''),
      // contactMediumReferredType: new FormControl(''),
      // contactMediumSchemaLocation: new FormControl(''),
      // contactMediumStartDateTime: new FormControl(''),
      // contactMediumEndDateTime: new FormControl(''),

      // // contact medium characteristics
      // contactMediumCharacteristicId: new FormControl(''),
      // contactMediumCharacteristicCountry: new FormControl(''),
      // contactMediumCharacteristiCity: new FormControl(''),
      // contactMediumCharacteristicContactType: new FormControl(''),
      // contactMediumCharacteristicSocialNetworkId: new FormControl(''),
      // contactMediumCharacteristicEmailAddress: new FormControl(''),
      // contactMediumCharacteristicPhoneNumber: new FormControl(''),
      // contactMediumCharacteristicStateOrProvince: new FormControl(''),
      // contactMediumCharacteristicFaxNumber: new FormControl(''),
      // contactMediumCharacteristicPostCode: new FormControl(''),
      // contactMediumCharacteristicStreet1: new FormControl(''),
      // contactMediumCharacteristicStreet2: new FormControl(''),
      // contactMediumCharacteristicSchemaLocation: new FormControl(''),
      // contactMediumCharacteristicType: new FormControl(''),
      // contactMediumCharacteristicBaseType: new FormControl(''),
    });
  }

  getCustomerById() {
    const request = {
      "requestHeader": {
        "channel": "app",
        "requestId": "e54eb678-b7b2-11ea-b3de-0242ac130004",
        "timestamp": "2020-12-08T14:00:00Z"
      }
    }

    this.customerService.getCustomerById()
      .subscribe(res => {

        this.customerData = res.responseData;
        // this.queryForm.setValue({
        //   id: res.responseData.id,
        //   name: res.responseData.name,
        //   href: res.responseData.href,
        //   status: res.responseData.status,
        //   type: res.responseData.type,
        //   statusReason: res.responseData.statusReason,
        //   baseType: res.responseData.baseType,
        //   schemaLocation: res.responseData.schemaLocation,
        //   startDateTime: res.responseData.validFor ? res.responseData.validFor.startDateTime : "",
        //   endDateTime: res.responseData.validFor ? res.responseData.validFor.endDateTime : "",

        //   // account
        //   accountId: res.responseData.account && res.responseData.account[0].id ? res.responseData.account[0].id : "",
        //   accountReferredType: res.responseData.account && res.responseData.account[0].referredType ? res.responseData.account[0].referredType : "",
        //   accountBaseType: res.responseData.account && res.responseData.account[0].baseType ? res.responseData.account[0].baseType : "",
        //   accountType: res.responseData.account && res.responseData.account[0].type ? res.responseData.account[0].type : "",
        //   accountName: res.responseData.account && res.responseData.account[0].name ? res.responseData.account[0].name : "",
        //   accountDescription: res.responseData.account && res.responseData.account[0].description ? res.responseData.account[0].description : "",
        //   accountHref: res.responseData.account && res.responseData.account[0].href ? res.responseData.account[0].href : "11",
        //   accountSchemaLocation: res.responseData.account && res.responseData.account[0].schemaLocation ? res.responseData.account[0].schemaLocation : "",




        // })
        console.log(this.customerData, "hh")
      }, err => {
        console.log(err);
      });
  }


}
