import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Transaction } from '../shared/transaction.model';
import { SaveTransaction } from '../store/_actions/transaction.action';
import { AppState } from '../store/_reducers/app.reducer';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {
  checkModel: { credit?: boolean; debit?: boolean;} = { credit: false, debit: true };
  constructor(
    private store: Store<AppState>) 
  {
  }

  ngOnInit(): void {
  }

  createTransaction(): void {
    debugger;
    var transaction = {
      amount: 123,
      type: this.checkModel.credit ? 'Credit' : 'Debit',
      date: new Date()
    } as Transaction;
    this.store.dispatch(new SaveTransaction(transaction));
  }
}
