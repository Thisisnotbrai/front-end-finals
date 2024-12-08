import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerchantAnalyticsComponent } from './merchant-analytics/merchant-analytics.component';  // Correct import

const routes: Routes = [
  { path: 'merchant-analytics', component: MerchantAnalyticsComponent },
  // Other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
