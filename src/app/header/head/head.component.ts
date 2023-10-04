import { Component } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent {
  cartValue: number = 0;

  constructor(private cart: CartService){}

  ngOnInit() {
    this.cart.cartNumber$.subscribe((cartNumber) =>{
      this.cartValue = cartNumber;
    })
  }

}
