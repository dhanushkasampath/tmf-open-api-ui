import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const URL = "http://localhost:8085/price-engine-app/api/v1.0";

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http: HttpClient) {
  }

  public getCustomerList(): Observable<any> {
    const url = 'https://run.mocky.io/v3/e8d29acf-0a63-4f3b-906d-4bb3ad3d5009';
    return this.http.get<any>(url).pipe(
      tap(() => console.log('fetched data')),
    );
  }


  public getCustomerById(): Observable<any> {
    const url = 'https://run.mocky.io/v3/5255a67b-5351-462d-9c2b-b16f10c3afca';
    return this.http.get<any>(url).pipe(
      tap(() => console.log('fetched data')),
    );
  }

  public calculatePrice(value, request): Observable<any> {
    console.log(value)
    const url = URL + '/pricemgt/unit-price/query/' + value.productCode + '?cartonQuantity=' + value.cartonQuantity + '&singleUnitQuantity=' + value.singleUnitQuantity;
    return this.http.post<any>(url, request, httpOptions).pipe(
      tap(() => console.log('fetched data')),
    );
  }
}
