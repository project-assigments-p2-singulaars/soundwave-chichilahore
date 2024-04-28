import { Component, OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../../shared/interfaces/customer';

@Component({
  selector: 'acme-customer-list',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit {
  customers!:Customer[];
  constructor(private customerService: CustomerService){}

  ngOnInit(): void { 
    this.customers = this.customerService.getAllCustomer();
  }
  
  trackCustomer(Index: number, customer:Customer){
    return customer.id
  }

}

