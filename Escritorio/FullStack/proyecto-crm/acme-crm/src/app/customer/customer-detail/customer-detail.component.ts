import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../../shared/interfaces/customer';

@Component({
  selector: 'acme-customer-detail',
  standalone: true,
  imports: [],
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.scss',
})
export class CustomerDetailComponent implements OnInit {
  @Input() id!: string;
  customer!: Customer;

  constructor(private customerService: CustomerService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngONInit(): void {
    this.customer = this.customerService.getCustomerById(+this.id);
  }
  saludar(event:MouseEvent){
    console.log(event)
    alert("kik")
  }
}