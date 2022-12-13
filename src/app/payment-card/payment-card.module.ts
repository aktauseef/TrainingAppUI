import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentDetailFormComponent } from './payment-detail-form/payment-detail-form.component';
import { PaymentDetailsComponent } from './payment-details.component';
import { FormsModule } from '@angular/forms';
import { PaymentCardRoutingModule } from './payment-card-routing.module';

console.warn('payment card module loaded');
@NgModule({
  declarations: [PaymentDetailFormComponent, PaymentDetailsComponent],
  imports: [
    CommonModule,
    PaymentCardRoutingModule,
    FormsModule,
    // RouterModule.forChild([
    //   { path: 'paymentcards', component: PaymentDetailsComponent }
    // ])
  ],
  exports: [],
})
export class PaymentCardModule {}
