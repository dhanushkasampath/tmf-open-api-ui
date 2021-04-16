import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerServiceService } from '../../services/customer-service.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  queryForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private customerService: CustomerServiceService) { }

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
      startDateTime: new FormControl('', Validators.compose([
        Validators.required
      ])),
      endDateTime: new FormControl(''),

      account: this.formBuilder.array(
        []),

      paymentMethod: this.formBuilder.array(
        []),

      characteristic: this.formBuilder.array(
        []),

      relatedParty: this.formBuilder.array(
        []),

      engagedParty: this.formBuilder.array(
        []),

      agreement: this.formBuilder.array(
        []),

      creditProfile: this.formBuilder.array(
        []),

      contactMedium: this.formBuilder.array(
        []),

    });
  }

  // account
  get accountsListFormArray() {
    return (<FormArray>this.queryForm.get('account'));
  }

  addAccount() {
    this.accountsListFormArray.push(this.formBuilder.group({
      id: [''],
      referredType: [''],
      baseType: [''],
      type: [''],
      name: [''],
      description: [''],
      href: [''],
      schemaLocation: [''],
    }));
  }

  removeAccount(i: number) {
    this.accountsListFormArray.removeAt(i);
  }

  // payment
  get paymentMethodListFormArray() {
    return (<FormArray>this.queryForm.get('paymentMethod'));
  }

  addPaymentMethod() {
    this.paymentMethodListFormArray.push(this.formBuilder.group({
      id: [''],
      referredType: ['CreditCardPayment'],
      baseType: [''],
      type: [''],
      name: [''],
      href: [''],
      schemaLocation: [''],
    }));
  }

  removePaymentMethod(i: number) {
    this.paymentMethodListFormArray.removeAt(i);
  }

  //characteristic
  get characteristicListFormArray() {
    return (<FormArray>this.queryForm.get('characteristic'));
  }

  addCharacteristic() {
    this.characteristicListFormArray.push(this.formBuilder.group({
      id: [''],
      baseType: [''],
      type: [''],
      name: [''],
      valueType: [''],
      value: [''],
      schemaLocation: [''],
    }));
  }

  removeCharacteristic(i: number) {
    this.characteristicListFormArray.removeAt(i);
  }

  // relatedParty
  get relatedPartyListFormArray() {
    return (<FormArray>this.queryForm.get('relatedParty'));
  }

  addRelatedParty() {
    this.relatedPartyListFormArray.push(this.formBuilder.group({
      id: [''],
      referredType: [''],
      baseType: [''],
      type: [''],
      name: [''],
      role: [''],
      href: [''],
      schemaLocation: [''],
    }));
  }

  removeRelatedParty(i: number) {
    this.relatedPartyListFormArray.removeAt(i);
  }


  // engagedParty
  get engagedPartyListFormArray() {
    return (<FormArray>this.queryForm.get('engagedParty'));
  }

  addEngagedParty() {
    this.engagedPartyListFormArray.push(this.formBuilder.group({
      id: [''],
      referredType: [''],
      baseType: [''],
      type: [''],
      name: [''],
      role: [''],
      href: [''],
      schemaLocation: [''],
    }));
  }

  removeEngagedParty(i: number) {
    this.engagedPartyListFormArray.removeAt(i);
  }

  // agreement
  get agreementListFormArray() {
    return (<FormArray>this.queryForm.get('agreement'));
  }

  addAgreement() {
    this.agreementListFormArray.push(this.formBuilder.group({
      id: [''],
      referredType: [''],
      baseType: [''],
      type: [''],
      name: [''],
      href: [''],
      schemaLocation: [''],
    }));
  }

  removeAgreement(i: number) {
    this.agreementListFormArray.removeAt(i);
  }

  // creditProfile
  get creditProfileListFormArray() {
    return (<FormArray>this.queryForm.get('creditProfile'));
  }

  addCreditProfile() {
    this.creditProfileListFormArray.push(this.formBuilder.group({
      creditProfileId: [''],
      creditProfileDate: [''],
      creditProfilecreditScore: [''],
      creditProfilecreditRiskRating: [''],
      creditProfileType: [''],
      creditProfileBaseType: [''],
      creditProfileSchemaLocation: [''],
      creditProfileStartDateTime: [''],
      creditProfileEndDateTime: [''],
    }));
  }

  removeCreditProfile(i: number) {
    this.creditProfileListFormArray.removeAt(i);
  }

  // contactMedium
  get contactMediumListFormArray() {
    return (<FormArray>this.queryForm.get('contactMedium'));
  }

  addContactMedium() {
    this.contactMediumListFormArray.push(this.formBuilder.group({
      contactMediumId: [''],
      contactMediumMediumType: [''],
      contactMediumPreferred: [''],
      contactMediumBaseType: [''],
      contactMediumReferredType: [''],
      contactMediumSchemaLocation: [''],
      contactMediumStartDateTime: [''],
      contactMediumEndDateTime: [''],

      // contact medium characteristics
      contactMediumCharacteristicId: [''],
      contactMediumCharacteristicCountry: [''],
      contactMediumCharacteristiCity: [''],
      contactMediumCharacteristicContactType: [''],
      contactMediumCharacteristicSocialNetworkId: [''],
      contactMediumCharacteristicEmailAddress: [''],
      contactMediumCharacteristicPhoneNumber: [''],
      contactMediumCharacteristicStateOrProvince: [''],
      contactMediumCharacteristicFaxNumber: [''],
      contactMediumCharacteristicPostCode: [''],
      contactMediumCharacteristicStreet1: [''],
      contactMediumCharacteristicStreet2: [''],
      contactMediumCharacteristicSchemaLocation: [''],
      contactMediumCharacteristicType: [''],
      contactMediumCharacteristicBaseType: [''],
    }));
  }

  removeContactMedium(i: number) {
    this.contactMediumListFormArray.removeAt(i);
  }

  onFormSubmit(value: any) {

    const creditProfileList = [];
    const contactMediumList = [];

    value.creditProfile &&
      value.creditProfile.map((item) => {
        const profile = {
          id: item.creditProfileId,
          creditProfileDate: item.creditProfileDate,
          creditScore: item.creditProfilecreditScore,
          baseType: item.creditProfileBaseType,
          type: item.creditProfileType,
          creditRiskRating: item.creditProfilecreditRiskRating,
          schemaLocation: item.creditProfileSchemaLocation,
          validFor: {
            startDateTime: item.creditProfileStartDateTime,
            endDateTime: item.creditProfileEndDateTime,
          }
        };
        creditProfileList.push(profile);
      });


    value.contactMedium &&
      value.contactMedium.map((item) => {
        const contact = {
          id: item.contactMediumId,
          mediumType: item.contactMediumMediumType,
          preferred: item.contactMediumPreferred,
          baseType: item.contactMediumBaseType,
          referredType: item.contactMediumReferredType,
          schemaLocation: item.contactMediumSchemaLocation,
          validFor: {
            startDateTime: item.contactMediumStartDateTime,
            endDateTime: item.contactMediumEndDateTime,
          },
          characteristic: {
            id: item.contactMediumCharacteristicId,
            country: item.contactMediumCharacteristicCountry,
            city: item.contactMediumCharacteristiCity,
            contactType: item.contactMediumCharacteristicContactType,
            socialNetworkId: item.contactMediumCharacteristicSocialNetworkId,
            emailAddress: item.contactMediumCharacteristicEmailAddress,
            phoneNumber: item.contactMediumCharacteristicPhoneNumber,
            stateOrProvince: item.contactMediumCharacteristicStateOrProvince,
            faxNumber: item.contactMediumCharacteristicFaxNumber,
            postCode: item.contactMediumCharacteristicPostCode,
            street1: item.contactMediumCharacteristicStreet1,
            street2: item.contactMediumCharacteristicStreet2,
            schemaLocation: item.contactMediumCharacteristicSchemaLocation,
            type: item.contactMediumCharacteristicType,
            baseType: item.contactMediumCharacteristicBaseType,
          }
        };
        contactMediumList.push(contact);
      });

    const request = {
      "customer": {
       // "id": value.id,
        "@type": value.type,
        "href": value.href,
        "name": value.name,
        "status": value.status,
        "statusReason": value.statusReason,
        "baseType": value.baseType,
        "schemaLocation": value.schemaLocation,
        "validFor": {
          "startDateTime": value.startDateTime,
          "endDateTime": value.endDateTime,
        },
        "engagedParty": value.engagedParty,
        "account": value.account,
        "paymentMethod": value.paymentMethod,
        "agreement": value.agreement,
        "relatedParty": value.relatedParty,
        "characteristic": value.characteristic,
        "contactMedium": contactMediumList,
        "creditProfile": creditProfileList

      },
      "requestHeader": {
            "channel": "web",
            "requestId": "qadsf-sd23fsd-ffgss-fdsff",
            "timestamp": "2020-02-24T14:40:00"
      }
    }

    this.customerService.addCustomer(request)
      .subscribe(res => {
        this.router.navigate(['']);
      }, (err) => {
        console.log("error");
      });
  }

}
