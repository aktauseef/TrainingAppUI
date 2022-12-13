import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { PaymentDetail } from './shared/payment-detail.model';
import { PaymentDetailService } from './shared/payment-detail.service';
import { IPaymentDetail } from './shared/IPaymentDetail';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [],
})
export class PaymentDetailsComponent implements OnInit {
  cardDetails: IPaymentDetail[] = [];
  constructor(
    public service: PaymentDetailService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.service.getCards().subscribe((res) => (this.cardDetails = res));
  }

  populateForm(selectedRecord: PaymentDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number): void {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deletePaymentDetail(id).subscribe((res) => {
        this.toastr.error('Deleted succesfully', 'Payment Detail Register');
        this.refreshList();
      });
    }
  }
}
