import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const URL = "http://localhost:8087/tmf-api/customerManagement/v4/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http: HttpClient) {
  }

  public getCustomerList(): Observable<any> {
    // const url = URL;
    const url = 'https://run.mocky.io/v3/e8d29acf-0a63-4f3b-906d-4bb3ad3d5009';
    return this.http.get<any>(url).pipe(
      tap(() => console.log('fetched data')),
    );
  }


  public getCustomerById(customerId): Observable<any> {
    // const url = URL + '/' + customerId;
    const url = 'https://run.mocky.io/v3/5255a67b-5351-462d-9c2b-b16f10c3afca';
    return this.http.get<any>(url).pipe(
      tap(() => console.log('fetched data')),
    );
  }

  public addCustomer(request): Observable<any> {
    const url = URL;
    return this.http.post<any>(url, request, httpOptions).pipe(
      tap(() => console.log('customer added')),
    );
  }

  public updateCustomer(customerId, request): Observable<any> {
    const url = URL + '/' + customerId;
    return this.http.put<any>(url, request, httpOptions).pipe(
      tap(() => console.log('customer added')),
    );
  }

  public deleteCustomer(customerId): Observable<any> {
    const url = URL + '/' + customerId;
    return this.http.delete(url, httpOptions).pipe(
      tap(_ => console.log(`delete customer`)),
    );
  }

  public queryCustomer(param): Observable<any> {
    console.log(param, "param")
    const url = URL + '?' + param;
    return this.http.get<any>(url).pipe(
      tap(() => console.log('fetched data')),
    );
  }

}
