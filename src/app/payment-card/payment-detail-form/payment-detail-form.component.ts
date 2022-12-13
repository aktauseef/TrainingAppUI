import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetailsComponent } from '../payment-details.component';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [],
})
export class PaymentDetailFormComponent implements OnInit {
  cardForm: FormGroup | undefined;
  constructor(
    public service: PaymentDetailService,
    private toastr: ToastrService,
    private paymentdetail: PaymentDetailsComponent
  ) {
    // this.cardForm=new FormGroup({
    //   'paymentDetailId':new FormControl(''),
    //   'cardOwnerName':new FormControl(''),
    //   'cardNumber':new FormControl(''),
    //   'expirationDate':new FormControl(''),
    //   'securityCode':new FormControl('')
    // })
  }

  ngOnInit(): void {
    console.log('Payment detail form Component Initiated');
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.cardId == 0) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.service.postPaymentDetail().subscribe((res) => {
      this.resetForm(form);
      this.paymentdetail.refreshList();
      this.toastr.success('Submitted successfully', 'Payment Detail Register');
    });
  }

  updateRecord(form: NgForm) {
    this.service.putPaymentDetail().subscribe((res) => {
      this.resetForm(form);
      this.paymentdetail.refreshList();
      this.toastr.info('Updated successfully', 'Payment Detail Register');
    });
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new PaymentDetail();
  }
}
