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
      id: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      name: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      href: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      status: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      type: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      statusReason: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      baseType: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      schemaLocation: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      startDateTime: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      endDateTime: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      accountId: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      accountReferredType: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      accountBaseType: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      accountType: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      accountName: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      accountDescription: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      accountHref: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      accountSchemaLocation: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    });
  }

  onFormSubmit(value: any) {
    console.log(value, "hh")
  }

}
