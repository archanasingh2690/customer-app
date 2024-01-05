import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CustomerModel } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit,OnChanges {

  @Input() id : number = 0;
  @Output() hideDetail = new EventEmitter();
  customer : CustomerModel = {id : 0, firstName :'',lastName:''};
  constructor(private custService : CustomerService) { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['id'].previousValue != changes['id'].currentValue)
    {
      this.custService.getCustomerById(changes['id'].currentValue).subscribe((x) => {
        this.customer = x;
      });
    }
  }

  ngOnInit(): void {
  }
  hideDetails()
  {
    this.hideDetail.emit(false);
  }
  saveCustomer()
  {
    this.custService.addUpdateCustomer(this.customer).subscribe((d) => {
      console.log(d);
    });
  }
}
