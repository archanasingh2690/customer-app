import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CustomerModel } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http : HttpClient) { }

  getAllCustomers()
  {
    return this.http.get<CustomerModel[]>(`${environment.apiEndpoint}/Customer`);
  }
  getCustomerById(id : number)
  {
    return this.http.get<CustomerModel>(`${environment.apiEndpoint}/Customer/${id}`);
  }
  addUpdateCustomer(cust : CustomerModel)
  {
    return this.http.post<boolean>(`${environment.apiEndpoint}/Customer/addUpdateCustomer`,cust);
  }
  deleteCustomer(id : number)
  {
    return this.http.post<boolean>(`${environment.apiEndpoint}/Customer/deleteCustomer`,{id : id});
  }
}
