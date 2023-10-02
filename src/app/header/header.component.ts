import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { faCartShopping, faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  faCartShopping = faCartShopping;
  
  
  constructor(private router: Router) {}

  onLogout() {
    // Remove user data from local storage (simulate logout)
    // localStorage.removeItem('userData');

    // Redirect to the sign-in page
    this.router.navigate(['/']);
  }
  
}
