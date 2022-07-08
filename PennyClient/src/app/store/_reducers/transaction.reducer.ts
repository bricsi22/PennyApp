import { ActionStatus } from 'src/app/enums/action-status.enums';
import { Transaction } from '../../shared/transaction.model';
import * as fromTransactionActions from '../_actions/transaction.action';

export interface State {
    transactions: Transaction[];
    status: ActionStatus;
  }

const initialState: State = {
    transactions: [],
    status: ActionStatus.NotStarted
};

export function transactionReducer(state = initialState, action: fromTransactionActions.TransactionActions)
{
    switch(action.type)
    {
        case fromTransactionActions.GET_TRANSACTION:
            return {
                transactions: null,
                status: ActionStatus.InProgress
            };
        case fromTransactionActions.GET_TRANSACTION_SUCCESS:
            return {
                ...state,
                transactions: action.payload,
                status: ActionStatus.Success
            }
        case fromTransactionActions.GET_TRANSACTION_FAIL:
            return {
                ...state,
                status: ActionStatus.Fail
            }
        default:
            return initialState;
    }
}