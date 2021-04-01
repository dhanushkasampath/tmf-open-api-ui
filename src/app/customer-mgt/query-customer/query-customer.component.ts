import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-query-customer',
  templateUrl: './query-customer.component.html',
  styleUrls: ['./query-customer.component.scss']
})
export class QueryCustomerComponent implements OnInit {
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
    });
  }

  onFormSubmit(value: any) {

  }
}
