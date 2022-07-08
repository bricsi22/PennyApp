import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../shared/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  getAdminTables(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(
        //`${this.apiBaseUrl}${this.endpoint.base}${this.endpoint.tableAdmin}${this.endpoint.tableValues}`
        ''
    );
}

}
