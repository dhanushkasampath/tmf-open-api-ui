import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
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

  onFormSubmit(value: any) {
    console.log(value, "hh")
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

}
