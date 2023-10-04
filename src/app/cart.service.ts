import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartSubject = new BehaviorSubject<number>(0);
  cartNumber$ = this.cartSubject.asObservable();

  // constructor() { }

  addtocart() {
    const currentCartValue = this.cartSubject.value;
    this.cartSubject.next(currentCartValue + 1);
  }
}
