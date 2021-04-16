import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CustomerServiceService } from '../../services/customer-service.service';

@Component({
  selector: 'app-query-customer',
  templateUrl: './query-customer.component.html',
  styleUrls: ['./query-customer.component.scss']
})
export class QueryCustomerComponent implements OnInit {

  queryForm: FormGroup;
  displayTable = false;
  customerList = [];
  constructor(private formBuilder: FormBuilder, private customerService: CustomerServiceService) { }

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
      paymentReferredType: new FormControl('CreditCardPayment'),
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
    this.displayTable = false;
    var param = "";
    param =
      "id=" + value.id + '&' +
      "href=" + value.id + '&' +
      "status=" + value.status + '&' +
      "type=" + value.type + '&' +
      "statusReason=" + value.statusReason + '&' +
      "baseType=" + value.baseType + '&' +
      "name=" + value.name + '&' +
      "schemaLocation=" + value.schemaLocation + '&' +
      "validFor.startDateTime=" + value.startDateTime + '&' +
      "validFor.endDateTime=" + value.endDateTime + '&' +

      "account.id=" + value.accountId + '&' +
      "account.referredType=" + value.accountReferredType + '&' +
      "account.baseType=" + value.accountBaseType + '&' +
      "account.type=" + value.accountType + '&' +
      "account.name=" + value.accountName + '&' +
      "account.description=" + value.accountDescription + '&' +
      "account.href=" + value.accountHref + '&' +
      "account.schemaLocation=" + value.accountSchemaLocation + '&' +

      "paymentMethod.id=" + value.paymentId + '&' +
      "paymentMethod.referredType=" + value.paymentReferredType + '&' +
      "paymentMethod.baseType=" + value.paymentBaseType + '&' +
      "paymentMethod.type=" + value.paymentType + '&' +
      "paymentMethod.name=" + value.paymentName + '&' +
      "paymentMethod.href=" + value.paymentHref + '&' +
      "paymentMethod.schemaLocation=" + value.paymentSchemaLocation + '&' +

      "characteristic.id=" + value.characteristicId + '&' +
      "characteristic.baseType=" + value.characteristicBaseType + '&' +
      "characteristic.type=" + value.characteristicType + '&' +
      "characteristic.valueType=" + value.characteristicValueType + '&' +
      "characteristic.value=" + value.characteristicValue + '&' +
      "characteristic.name=" + value.characteristicName + '&' +
      "characteristic.schemaLocation=" + value.characteristicSchemaLocation + '&' +

      "engagedParty.id=" + value.engagedPartyId + '&' +
      "engagedParty.referredType=" + value.engagedPartyReferredType + '&' +
      "engagedParty.role=" + value.engagedPartyRole + '&' +
      "engagedParty.baseType=" + value.engagedPartyBaseType + '&' +
      "engagedParty.type=" + value.engagedPartyType + '&' +
      "engagedParty.name=" + value.engagedPartyName + '&' +
      "engagedParty.href=" + value.engagedPartyHref + '&' +
      "engagedParty.schemaLocation=" + value.engagedPartySchemaLocation + '&' +

      "relatedParty.id=" + value.relatedPartyId + '&' +
      "relatedParty.referredType=" + value.relatedPartyReferredType + '&' +
      "relatedParty.role=" + value.relatedpartyRole + '&' +
      "relatedParty.baseType=" + value.relatedPartyBaseType + '&' +
      "relatedParty.type=" + value.relatedPartyType + '&' +
      "relatedParty.name=" + value.relatedPartyName + '&' +
      "relatedParty.href=" + value.relatedPartyHref + '&' +
      "relatedParty.schemaLocation=" + value.relatedPartySchemaLocation + '&' +

      "agreement.id=" + value.agreementId + '&' +
      "agreement.referredType=" + value.agreementReferredType + '&' +
      "agreement.baseType=" + value.agreementBaseType + '&' +
      "agreement.type=" + value.agreementType + '&' +
      "agreement.name=" + value.agreementName + '&' +
      "agreement.href=" + value.agreementHref + '&' +
      "agreement.schemaLocation=" + value.agreementSchemaLocation + '&' +

      "creditProfile.id=" + value.creditProfileId + '&' +
      "creditProfile.creditProfileDate=" + value.creditProfileDate + '&' +
      "creditProfile.creditScore=" + value.creditProfilecreditScore + '&' +
      "creditProfile.baseType=" + value.creditProfileBaseType + '&' +
      "creditProfile.type=" + value.creditProfileType + '&' +
      "creditProfile.creditRiskRating=" + value.creditProfilecreditRiskRating + '&' +
      "creditProfile.schemaLocation=" + value.creditProfileSchemaLocation + '&' +
      "creditProfile.validFor.startDateTime=" + value.creditProfileStartDateTime + '&' +
      "creditProfile.validFor.endDateTime=" + value.creditProfileEndDateTime + '&' +

      "contactMedium.id=" + value.contactMediumId + '&' +
      "contactMedium.mediumType=" + value.contactMediumMediumType + '&' +
      "contactMedium.preferred=" + value.contactMediumPreferred + '&' +
      "contactMedium.baseType=" + value.contactMediumBaseType + '&' +
      "contactMedium.referredType=" + value.contactMediumReferredType + '&' +
      "contactMedium.schemaLocation=" + value.contactMediumSchemaLocation + '&' +
      "contactMedium.validFor.startDateTime=" + value.contactMediumStartDateTime + '&' +
      "contactMedium.validFor.endDateTime=" + value.contactMediumEndDateTime + '&' +

      "contactMedium.characteristic.id=" + value.contactMediumCharacteristicId + '&' +
      "contactMedium.characteristic.country=" + value.contactMediumCharacteristicCountry + '&' +
      "contactMedium.characteristic.city=" + value.contactMediumCharacteristiCity + '&' +
      "contactMedium.characteristic.contactType=" + value.contactMediumCharacteristicContactType + '&' +
      "contactMedium.characteristic.socialNetworkId=" + value.contactMediumCharacteristicSocialNetworkId + '&' +
      "contactMedium.characteristic.emailAddress=" + value.contactMediumCharacteristicEmailAddress + '&' +
      "contactMedium.characteristic.phoneNumber=" + value.contactMediumCharacteristicPhoneNumber + '&' +
      "contactMedium.characteristic.stateOrProvince=" + value.contactMediumCharacteristicStateOrProvince + '&' +
      "contactMedium.characteristic.faxNumber=" + value.contactMediumCharacteristicFaxNumber + '&' +
      "contactMedium.characteristic.postCode=" + value.contactMediumCharacteristicPostCode + '&' +
      "contactMedium.characteristic.street1=" + value.contactMediumCharacteristicStreet1 + '&' +
      "contactMedium.characteristic.street2=" + value.contactMediumCharacteristicStreet2 + '&' +
      "contactMedium.characteristic.schemaLocation=" + value.contactMediumCharacteristicSchemaLocation + '&' +
      "contactMedium.characteristic.type=" + value.contactMediumCharacteristicType + '&' +
      "contactMedium.characteristic.baseType=" + value.contactMediumCharacteristicBaseType;


    this.customerService.queryCustomer(param)
      .subscribe(res => {
        this.displayTable = true;
        this.customerList = res.responseData;
      }, err => {
        this.displayTable = false;
        console.log("error");
      });
  }

}
