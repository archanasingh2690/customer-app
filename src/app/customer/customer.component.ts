import { Component, OnInit } from '@angular/core';
import { CustomerModel } from './customer.model';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customerList : CustomerModel [] = [];
  showAdd : boolean = false;
  selectedCustomer : number=0;
  constructor(private custService : CustomerService) { }

  ngOnInit(): void {
    this.custService.getAllCustomers().subscribe((c) => {
      this.customerList = c;
    });
  }
  hideDetail(event : any)
  {
    this.showAdd = false;
  }
  delete(id : number)
  {}
  editCustomer(id : number)
  {
    this.selectedCustomer = id;
    this.showAdd = true;
  }
}
