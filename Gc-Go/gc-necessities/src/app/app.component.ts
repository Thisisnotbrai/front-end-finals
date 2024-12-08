import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gc-necessities'; // You can modify this as needed

  constructor(private router: Router) {}

  goToMerchantAnalytics() {
    console.log('Navigating to Merchant Analytics');
    this.router.navigate(['/merchant-analytics']); // Navigate to the "merchant-analytics" route
  }
}
