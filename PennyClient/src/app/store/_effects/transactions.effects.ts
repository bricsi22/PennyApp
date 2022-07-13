import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { ofType } from '@ngrx/effects';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { TransactionService } from 'src/app/services/transaction.service';
import { SaveTransactionFail, SaveTransactionSuccess, SAVE_TRANSACTION, GetTransactionFail, GetTransactionSuccess, GET_TRANSACTION, SaveTransaction } from '../_actions/transaction.action';
import { Action } from '@ngrx/store';
import { Transaction } from 'src/app/shared/transaction.model';



@Injectable()
export class TransactionsEffects {
  constructor(private actions$: Actions, private transactionService: TransactionService) {}

    getTransactions$ = createEffect(() =>
    this.actions$
        .pipe(
            ofType<Action>(GET_TRANSACTION),
            mergeMap(() =>
                this.transactionService.getTransactions().pipe(
                    map(res => (new GetTransactionSuccess(res))),
                    catchError(err => {
                        return of(new GetTransactionFail(err.error));
                    })
                )
            )
        )
    );

    addTransaction$ = createEffect(() =>
        this.actions$
            .pipe(
                ofType<Action>(SAVE_TRANSACTION),
                mergeMap((action: SaveTransaction) =>
                    this.transactionService.addTransactions(action.transaction).pipe(
                        map(res => (new SaveTransactionSuccess(res))),
                        catchError(err => of(new SaveTransactionFail(err)))
                    )
                )
            )
    );
}

