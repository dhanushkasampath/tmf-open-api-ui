import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  queryForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
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

      // characteristic
      characteristicId: new FormControl(''),
      characteristicName: new FormControl(''),
      characteristicType: new FormControl(''),
      characteristicBaseType: new FormControl(''),
      characteristicValue: new FormControl(''),
      characteristicValueType: new FormControl(''),
      characteristicSchemaLocation: new FormControl(''),

      // relatedParty
      relatedPartyId: new FormControl(''),
      relatedPartyName: new FormControl(''),
      relatedPartyHref: new FormControl(''),
      relatedPartyReferredType: new FormControl(''),
      relatedPartyType: new FormControl(''),
      relatedPartyBaseType: new FormControl(''),
      relatedpartyRole: new FormControl(''),
      relatedPartySchemaLocation: new FormControl(''),

      // agreement
      agreementId: new FormControl(''),
      agreementName: new FormControl(''),
      agreementHref: new FormControl(''),
      agreementReferredType: new FormControl(''),
      agreementType: new FormControl(''),
      agreementBaseType: new FormControl(''),
      agreementSchemaLocation: new FormControl(''),

      // engagedPartyRole
      engagedPartyId: new FormControl(''),
      engagedPartyName: new FormControl(''),
      engagedPartyHref: new FormControl(''),
      engagedPartyReferredType: new FormControl(''),
      engagedPartyType: new FormControl(''),
      engagedPartyBaseType: new FormControl(''),
      engagedPartyRole: new FormControl(''),
      engagedPartySchemaLocation: new FormControl(''),

      // creditProfile
      creditProfileId: new FormControl(''),
      creditProfileDate: new FormControl(''),
      creditProfilecreditScore: new FormControl(''),
      creditProfilecreditRiskRating: new FormControl(''),
      creditProfileType: new FormControl(''),
      creditProfileBaseType: new FormControl(''),
      creditProfileSchemaLocation: new FormControl(''),
      creditProfileStartDateTime: new FormControl(''),
      creditProfileEndDateTime: new FormControl(''),

      // contactMedium
      contactMediumId: new FormControl(''),
      contactMediumMediumType: new FormControl(''),
      contactMediumPreferred: new FormControl(''),
      contactMediumBaseType: new FormControl(''),
      contactMediumReferredType: new FormControl(''),
      contactMediumSchemaLocation: new FormControl(''),
      contactMediumStartDateTime: new FormControl(''),
      contactMediumEndDateTime: new FormControl(''),

      // contact medium characteristics
      contactMediumCharacteristicId: new FormControl(''),
      contactMediumCharacteristicCountry: new FormControl(''),
      contactMediumCharacteristiCity: new FormControl(''),
      contactMediumCharacteristicContactType: new FormControl(''),
      contactMediumCharacteristicSocialNetworkId: new FormControl(''),
      contactMediumCharacteristicEmailAddress: new FormControl(''),
      contactMediumCharacteristicPhoneNumber: new FormControl(''),
      contactMediumCharacteristicStateOrProvince: new FormControl(''),
      contactMediumCharacteristicFaxNumber: new FormControl(''),
      contactMediumCharacteristicPostCode: new FormControl(''),
      contactMediumCharacteristicStreet1: new FormControl(''),
      contactMediumCharacteristicStreet2: new FormControl(''),
      contactMediumCharacteristicSchemaLocation: new FormControl(''),
      contactMediumCharacteristicType: new FormControl(''),
      contactMediumCharacteristicBaseType: new FormControl(''),
    });
  }

  onFormSubmit(value: any) {
    console.log(value, "hh")
  }

}
