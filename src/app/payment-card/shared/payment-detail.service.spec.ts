import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { PaymentDetailService } from './payment-detail.service';

describe('payment-detail service', () => {
  let httpClient: HttpClient;
  let paymentDetailService = PaymentDetailService;
  let httpTestingController: HttpTestingController;
  let baseUrl: string;
  let serviceMock: PaymentDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [paymentDetailService],
    });
    baseUrl = environment.baseUrl;
    httpTestingController = TestBed.inject(HttpTestingController);
    serviceMock = TestBed.inject(paymentDetailService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should delete payment detail', () => {
    let reqUrl = `${baseUrl}api/PaymentDetail/1`;
    serviceMock.deletePaymentDetail(1).subscribe((res) => {
      expect(res).toBeTruthy();
    });
    const req = httpTestingController.expectOne(reqUrl);
    expect(req.request.method).toEqual('DELETE');
    expect(req.request.url).toEqual(reqUrl);
  });
});
