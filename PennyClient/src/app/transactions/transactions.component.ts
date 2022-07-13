import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { AppState } from '../store/_reducers/app.reducer';
import { GetTransaction } from '../store/_actions/transaction.action';
import { Transaction } from '../shared/transaction.model';
import { ActionStatus } from '../enums/action-status.enums';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[];
  displayCreateTransactionRow: boolean = false;
  constructor(
    private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new GetTransaction());
    this.store.select('transactions').subscribe(state => {
      if (state.status === ActionStatus.Success) {
        this.transactions = state.transactions;
      }
    })
  }

  refreshGrid() : void {
    this.store.dispatch(new GetTransaction());
  }

  displayCreateTransactionFields() : void {
    this.displayCreateTransactionRow = !this.displayCreateTransactionRow;
  }
}
