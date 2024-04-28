import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/interfaces/product';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { ProductFormComponent } from './components/product-form/product-form.component';


@Component({
  selector: 'acme-product',
  standalone: true,
  imports: [ProductListComponent, ProductFormComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{

  products!: Product[]; 
  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.products = this.productService.getAllProducts() 
  }

  registerProduct: any{
    this.productService.addProduct()
  }
}
