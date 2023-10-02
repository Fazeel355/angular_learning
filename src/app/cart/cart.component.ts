import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor(private router: Router) {}

  Cart() {
    // Remove user data from local storage (simulate logout)
    // localStorage.removeItem('userData');

    // Redirect to the sign-in page
    this.router.navigate(['/home']);
  }
  cShopping() {
    // Remove user data from local storage (simulate logout)
    // localStorage.removeItem('userData');

    // Redirect to the sign-in page
    this.router.navigate(['/shop']);
  }
}
