import { ActionReducerMap } from '@ngrx/store';
import * as fromTransactionReducer  from "./transaction.reducer";

export interface AppState {
    transactions: fromTransactionReducer.State;
  }

export const appReducer: ActionReducerMap<AppState> = {
    transactions: fromTransactionReducer.transactionReducer,
  };