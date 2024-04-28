import { Injectable } from '@angular/core';
import { customers } from '../data/customers';
import { Customer } from '../shared/interfaces/customer'

@Injectable({
    providedIn: 'root'
})

export class CustomerService {
  getCustomerById(arg0: number): Customer {
    throw new Error('Method not implemented.');
  }
    
    getAllCustomer(){
        return customers;
    }


getFoodById(id:number):any{
    const result = customers.find((customer:Customer) => 
        customer.id === id
)
if (result !== undefined) return result;
}
}