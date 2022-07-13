import { Store } from '@ngrx/store';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { AppState } from '../store/_reducers/app.reducer';
import { GetTransaction, GET_TRANSACTION_SUCCESS, RemoveTransaction, REMOVE_TRANSACTION_SUCCESS, SAVE_TRANSACTION_SUCCESS, UpdateTransaction, UPDATE_TRANSACTION_SUCCESS } from '../store/_actions/transaction.action';
import { Transaction } from '../shared/transaction.model';
import { ActionStatus } from '../enums/action-status.enums';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[];
  displayCreateTransactionRow: boolean = false;
  modalRef?: BsModalRef;
  constructor(
    private store: Store<AppState>,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.store.dispatch(new GetTransaction());
    this.store.select('transactions').subscribe(state => {
      if (state.status === ActionStatus.Success && state.action === GET_TRANSACTION_SUCCESS) {
        this.transactions = state.transactions;
      }
      else if (state.status === ActionStatus.Success && 
        (state.action === SAVE_TRANSACTION_SUCCESS 
          || state.action === REMOVE_TRANSACTION_SUCCESS
          || state.action === UPDATE_TRANSACTION_SUCCESS)) 
      {
        this.transactions = state.transactions;
        if (state.action === UPDATE_TRANSACTION_SUCCESS) {
          this.modalRef.hide();
        }
      }
    })
  }

  refreshGrid() : void {
    this.store.dispatch(new GetTransaction());
  }

  displayCreateTransactionFields(): void {
    this.displayCreateTransactionRow = !this.displayCreateTransactionRow;
  }

  deleteTransaction(transactionId: number): void {
    this.store.dispatch(new RemoveTransaction(transactionId));
  }

  transactionToUpdate: Transaction = {
    amount: 0,
    id: 0,
    type: ''
  };
  checkModel: { credit?: boolean; debit?: boolean;} = { credit: false, debit: false };
  openTransactionUpdateModal(template: TemplateRef<any>, transactionId: number) {
    const relatedTransaction = this.transactions.find(t => t.id === transactionId)
    this.transactionToUpdate = {
      id: relatedTransaction.id,
      type: relatedTransaction.type,
      amount: relatedTransaction.amount
    }
    
    if (this.transactionToUpdate.type === 'Debit') {
      this.checkModel.credit = false;
      this.checkModel.debit = true;
    }
    else {
      this.checkModel.credit = true;
      this.checkModel.debit = false;
    }
    this.modalRef = this.modalService.show(template);
  }

  
  updateTransaction(): void {
    var transactionNewType = this.checkModel.credit === true
      ? 'Credit'
      : 'Debit'
    this.transactionToUpdate.type = transactionNewType;
    this.transactionToUpdate.date = new Date();
    this.store.dispatch(new UpdateTransaction(this.transactionToUpdate));
  }
}
