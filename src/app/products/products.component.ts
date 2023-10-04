import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products: any = [];

  constructor(private product: ProductService) {
    this.product.getProducts().subscribe((data) =>{
      this.products = data.products;
      console.log(this.products);
    })
  }



}
