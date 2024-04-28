import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../../shared/interfaces/product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'acme-product-list',
  standalone: true,
  imports: [ RouterLink, ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent{
  @Input() products!: Product[]; 

}
