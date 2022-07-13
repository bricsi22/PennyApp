import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Transaction } from '../shared/transaction.model';
import { UpdateTransaction } from '../store/_actions/transaction.action';
import { AppState } from '../store/_reducers/app.reducer';

@Component({
  selector: 'app-update-transaction-modal',
  templateUrl: './update-transaction-modal.component.html',
  styleUrls: ['./update-transaction-modal.component.scss']
})
export class UpdateTransactionModalComponent implements OnInit {
  transaction: Transaction = {
    id: 0,
    type: 'Debit',
    amount: 0
  };

  constructor(
    private store: Store<AppState>,
    private modalService: BsModalService) { }

  ngOnInit(): void {
  }
}
