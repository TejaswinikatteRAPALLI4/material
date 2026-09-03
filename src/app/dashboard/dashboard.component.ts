import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface FoodItem {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router) {}

  foods: FoodItem[] = [
    { id: 1, name: 'Pizza', category: 'Fast Food', price: 180, image: '🍕' },
    { id: 2, name: 'Burger', category: 'Fast Food', price: 140, image: '🍔' },
    { id: 3, name: 'Pasta', category: 'Italian', price: 220, image: '🍝' },
    { id: 4, name: 'Salad', category: 'Healthy', price: 120, image: '🥗' },
    { id: 5, name: 'Cake', category: 'Dessert', price: 90, image: '🍰' },
    { id: 6, name: 'Sushi', category: 'Japanese', price: 260, image: '🍣' }
  ];

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }

  goToCart(food: FoodItem): void {
    const existingCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const existingItem = existingCart.find((item: any) => item.id === food.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      existingCart.push({ ...food, quantity: 1 });
    }

    localStorage.setItem('cartItems', JSON.stringify(existingCart));
    this.router.navigate(['/cart']);
  }
}
