import { ActionStatus } from 'src/app/enums/action-status.enums';
import { Transaction } from '../../shared/transaction.model';
import * as fromTransactionActions from '../_actions/transaction.action';

export interface State {
    transactions: Transaction[];
    status: ActionStatus;
    action: string;
    error?: string;
  }

const initialState: State = {
    transactions: [],
    status: ActionStatus.NotStarted,
    action: '',
    error: null
};

export function transactionReducer(state = initialState, action: fromTransactionActions.TransactionActions): State
{
    switch(action.type)
    {
        case fromTransactionActions.GET_TRANSACTION:
            return {
                transactions: null,
                status: ActionStatus.InProgress,
                action: fromTransactionActions.GET_TRANSACTION
            };
        case fromTransactionActions.GET_TRANSACTION_SUCCESS:
            return {
                ...state,
                transactions: action.transaction,
                status: ActionStatus.Success,
                action: fromTransactionActions.GET_TRANSACTION_SUCCESS
            }
        case fromTransactionActions.GET_TRANSACTION_FAIL:
            return {
                ...state,
                status: ActionStatus.Fail,
                action: fromTransactionActions.GET_TRANSACTION_FAIL,
                error: action.error
            }
        case fromTransactionActions.SAVE_TRANSACTION:
            return {
                ...state,
                transactions: [...state.transactions, action.transaction],
                status: ActionStatus.InProgress,
                action: fromTransactionActions.SAVE_TRANSACTION
            }
        case fromTransactionActions.SAVE_TRANSACTION_SUCCESS:
            const newTransactions = [...state.transactions];
            newTransactions.pop();
            newTransactions.push(action.transaction);
            return {
                ...state,
                transactions: newTransactions,
                status: ActionStatus.Success,
                action: fromTransactionActions.SAVE_TRANSACTION_SUCCESS
            }
        case fromTransactionActions.SAVE_TRANSACTION_FAIL:
            return {
                ...state,
                status: ActionStatus.Fail,
                action: fromTransactionActions.SAVE_TRANSACTION_FAIL,
                error: action.error
            }
        case fromTransactionActions.REMOVE_TRANSACTION:
            return {
                ...state,
                status: ActionStatus.InProgress,
                action: fromTransactionActions.REMOVE_TRANSACTION
            }
        case fromTransactionActions.REMOVE_TRANSACTION_SUCCESS:
            var transactions = [...state.transactions]
            transactions = transactions.filter(x => x.id !== action.transactionId)
            return {
                ...state,
                status: ActionStatus.Success,
                action: fromTransactionActions.REMOVE_TRANSACTION_SUCCESS,
                transactions: transactions
            }
        case fromTransactionActions.REMOVE_TRANSACTION_FAIL:
            return {
                ...state,
                status: ActionStatus.Fail,
                action: fromTransactionActions.REMOVE_TRANSACTION_FAIL
            }
        case fromTransactionActions.UPDATE_TRANSACTION:
            return {
                ...state,
                status: ActionStatus.InProgress,
                action: fromTransactionActions.UPDATE_TRANSACTION
            }
        case fromTransactionActions.UPDATE_TRANSACTION_SUCCESS:
            var transactions = [...state.transactions];
            var updatedTransactionIndex = transactions.findIndex(t => t.id == action.transaction.id);
            transactions[updatedTransactionIndex] = action.transaction;
            return {
                ...state,
                status: ActionStatus.Success,
                action: fromTransactionActions.UPDATE_TRANSACTION_SUCCESS,
                transactions: transactions
            }
        case fromTransactionActions.UPDATE_TRANSACTION_FAIL:
            return {
                ...state,
                status: ActionStatus.Fail,
                action: fromTransactionActions.UPDATE_TRANSACTION_FAIL
            }
        default:
            return initialState;
    }
}