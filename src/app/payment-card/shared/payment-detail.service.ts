import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPaymentDetail } from './IPaymentDetail';

@Injectable({
  providedIn: 'root',
})
export class PaymentDetailService {
  constructor(private http: HttpClient) {}

  formData: IPaymentDetail = new PaymentDetail();

  baseUrl: string = environment.baseUrl;

  postPaymentDetail(): Observable<any> {
    const apiUrl = this.baseUrl + 'api/Payment/AddCard';
    return this.http.post(apiUrl, this.formData);
  }

  putPaymentDetail() {
    const apiUrl = this.baseUrl + 'api/Payment/UpdateCard';
    return this.http.put(
      `${apiUrl}/${this.formData.cardId}`,
      this.formData
    );
  }

  getCards() {
    const apiUrl = this.baseUrl + 'api/Payment/GetCards';
    return this.http.get<IPaymentDetail[]>(apiUrl).pipe(
      tap((x) => console.log('cards :' + JSON.stringify(x))),
      catchError(this.handleError)
    );
  }

  deletePaymentDetail(id: number) {
    const apiUrl = this.baseUrl + 'api/Payment/DeleteCard';
    return this.http.delete(`${apiUrl}/${id}`);
  }

  private handleError(err: HttpErrorResponse){
    return throwError(() => err);
  }
}
