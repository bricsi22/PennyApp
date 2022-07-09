import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Transaction } from '../shared/transaction.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) {  }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(
        `${environment.apiUrl}Transactions`
    );
  }
}
