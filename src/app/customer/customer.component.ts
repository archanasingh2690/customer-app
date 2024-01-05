import { Component, OnInit } from '@angular/core';
import { CustomerModel } from './customer.model';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customerList: CustomerModel[] = [];
  showAdd: boolean = false;
  selectedCustomer: number = 0;
  lastCust : number | string = '';
  constructor(private custService: CustomerService) { }

  ngOnInit(): void {
    this.bindCustomers();
  }
  bindCustomers() {
    this.custService.getAllCustomers().subscribe((c) => {
      this.customerList = c;
    });
    this.lastCust = sessionStorage.getItem('recentCust') ?? '';
  }
  hideDetail(event: any) {
    this.selectedCustomer = 0;
    this.showAdd = false;
  }
  delete(id: number) {
    this.custService.deleteCustomer(id).subscribe((x) => {
      if (x) {
        alert('customer deleted successfully!!');
        this.bindCustomers();
      }
      else alert('An error occured in deleted details!');
    });
  }
  editCustomer(id: number) {
    this.lastCust = id;
    sessionStorage.setItem('recentCust', `${id}`);
    this.selectedCustomer = id;
    this.showAdd = true;
  }
}
