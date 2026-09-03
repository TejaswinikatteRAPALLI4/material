import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface CartItem {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
  }

  get total(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  increase(item: CartItem): void {
    item.quantity += 1;
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  decrease(item: CartItem): void {
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      this.cartItems = this.cartItems.filter((cartItem) => cartItem.id !== item.id);
    }
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  backToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}
