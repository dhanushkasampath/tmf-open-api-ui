import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryCustomerComponent } from './query-customer.component';

describe('QueryCustomerComponent', () => {
  let component: QueryCustomerComponent;
  let fixture: ComponentFixture<QueryCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
