import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActionStatus } from '../enums/action-status.enums';
import { Transaction } from '../shared/transaction.model';
import { SaveTransaction, SAVE_TRANSACTION_SUCCESS } from '../store/_actions/transaction.action';
import { AppState } from '../store/_reducers/app.reducer';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {
  checkModel: { credit?: boolean; debit?: boolean;} = { credit: false, debit: true };
  transaction: Transaction = {
    id: 0,
    type: 'Debit',
    amount: 0
  };
  constructor(
    private store: Store<AppState>) 
  {
  }

  ngOnInit(): void {
    this.store.select('transactions').subscribe((state) => {
      if (state.status === ActionStatus.Success && state.action === SAVE_TRANSACTION_SUCCESS) 
      {
        
      }
    })
  }

  createTransaction(): void {
    var transaction = {
      amount: this.transaction.amount,
      type: this.checkModel.credit ? 'Credit' : 'Debit',
      date: new Date()
    } as Transaction;
    this.store.dispatch(new SaveTransaction(transaction));
  }
}
