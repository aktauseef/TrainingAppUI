import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { PaymentDetailsComponent } from './payment-details.component';
import { PaymentDetailService } from './shared/payment-detail.service';

describe('Payment detail component', () => {
  let component: PaymentDetailsComponent;
  let fixture: ComponentFixture<PaymentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentDetailsComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientTestingModule,
        ToastrModule.forRoot(),
      ],
      providers: [PaymentDetailService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call deletePaymentDetail() once', () => {
    let paymentDetailServiceSpy =
      fixture.debugElement.injector.get(PaymentDetailService);
    const getProductDataResponse = new Observable<any>((observer) => {
      //create observable to return data from product service
      observer.next(true);
    });
    spyOn(
      paymentDetailServiceSpy,
      'deletePaymentDetail' as never
    ).and.returnValue(getProductDataResponse as never);
    component.onDelete(1);
    expect(paymentDetailServiceSpy.deletePaymentDetail).toHaveBeenCalledWith(1);
  });
});
