import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { IndividualConfig, ToastrModule } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { PaymentDetailsComponent } from '../payment-details.component';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { PaymentDetailFormComponent } from './payment-detail-form.component';

describe('Payment detail form component', () => {
  let component: PaymentDetailFormComponent;
  let fixture: ComponentFixture<PaymentDetailFormComponent>;

  const toastrService = {
    success: (
      message?: string,
      title?: string,
      override?: Partial<IndividualConfig>
    ) => {
      'success';
    },
    error: (
      message?: string,
      title?: string,
      override?: Partial<IndividualConfig>
    ) => {
      'error';
    },
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentDetailFormComponent, PaymentDetailsComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientTestingModule,
        ToastrModule.forRoot(),
      ],
      providers: [
        PaymentDetailsComponent,
        PaymentDetailService,
        { provide: toastrService, useValue: toastrService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call method on click event', () => {
    fixture.detectChanges();
    spyOn(component, 'onSubmit').and.callThrough(); //method attached to the click.
    let btn = fixture.debugElement.query(By.css('.btn'));
    btn.triggerEventHandler('click', null);
    expect(component.onSubmit).toHaveBeenCalled();
  });

  it('should insert record', () => {
    const testForm = <NgForm>{
      value: {
        name: 'Hello',
        category: 'World',
      },
    };
    let postServiceSpy =
      fixture.debugElement.injector.get(PaymentDetailService);
    const postDetailResponse = new Observable<any>((observer) =>
      observer.next('')
    );
    spyOn(postServiceSpy, 'postPaymentDetail').and.returnValue(
      postDetailResponse
    );
    component.insertRecord(testForm);
    expect(component.insertRecord);
  });
});
