import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() productId: string = "";
  @Input() productImage: string = "";
  @Input() productName: string = "Product_Name";
  @Input() productPrice: string = "999";
  @Input() productDescription: string = "Product_Name is gerat product to consider";
  @Input() productQuantity: string = "0";
  @Input() productStock: string = "0";
  @Input() buttonText: string = "Add to Cart"

  productQuan: number = +this.productQuantity;

  constructor(private cart: CartService){}

  minus() {
    if(this.productQuan === 0) {
      console.log("No Product added");
  }
  else {
    this.productQuan--;
  }
  }

  plus() {
    this.productQuan++;
  }
  
  addToCart(){
    this.cart.addtocart();
    this.buttonText = "Added to Cart";
  }
}
