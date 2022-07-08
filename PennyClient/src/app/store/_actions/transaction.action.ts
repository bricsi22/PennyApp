import { Action } from "@ngrx/store";
import { Transaction } from "../../shared/transaction.model";

export const ADD_TRANSACTION = '[TRANSACTION] ADD_TRANSACTION';
export class AddTransaction implements Action {
    readonly type = ADD_TRANSACTION;
    payload: Transaction;
}

export const ADD_TRANSACTION_SUCCESS = '[TRANSACTION] ADD_TRANSACTION_SUCCESS';
export class AddTransactionSuccess implements Action {
    readonly type = ADD_TRANSACTION_SUCCESS;
    payload: Transaction;
}

export const ADD_TRANSACTION_FAIL = '[TRANSACTION] ADD_TRANSACTION_FAIL';
export class AddTransactionFail implements Action {
    readonly type = ADD_TRANSACTION_FAIL;
    payload: any;
}

export const REMOVE_TRANSACTION = '[TRANSACTION] REMOVE_TRANSACTION';
export class RemoveTransaction implements Action {
    readonly type = REMOVE_TRANSACTION;
    payload: any;
}

export const REMOVE_TRANSACTION_SUCCESS = '[TRANSACTION] REMOVE_TRANSACTION_SUCCESS';
export class RemoveTransactionSuccess implements Action {
    readonly type = REMOVE_TRANSACTION_SUCCESS;
}

export const REMOVE_TRANSACTION_FAIL = '[TRANSACTION] REMOVE_TRANSACTION_FAIL';
export class RemoveTransactionFail implements Action {
    readonly type = REMOVE_TRANSACTION_FAIL;
    payload: any;
}

export const UPDATE_TRANSACTION = '[TRANSACTION] UPDATE_TRANSACTION';
export class UpdateTransaction implements Action {
    readonly type = UPDATE_TRANSACTION;
    payload: Transaction;
}

export const UPDATE_TRANSACTION_SUCCESS = '[TRANSACTION] UPDATE_TRANSACTION_SUCCESS';
export class UpdateTransactionSuccess implements Action {
    readonly type = UPDATE_TRANSACTION_SUCCESS;
    payload: Transaction;
}

export const UPDATE_TRANSACTION_FAIL = '[TRANSACTION] UPDATE_TRANSACTION_FAIL';
export class UpdateTransactionFail implements Action {
    readonly type = UPDATE_TRANSACTION_FAIL;
    payload: any;
}

export const GET_TRANSACTION = '[TRANSACTION] GET_TRANSACTION';
export class GetTransaction implements Action {
    readonly type = GET_TRANSACTION;
}

export const GET_TRANSACTION_SUCCESS = '[TRANSACTION] GET_TRANSACTION_SUCCESS';
export class GetTransactionSuccess implements Action {
    readonly type = GET_TRANSACTION_SUCCESS;
    constructor(public payload: Transaction[]) {}
}

export const GET_TRANSACTION_FAIL = '[TRANSACTION] GET_TRANSACTION_FAIL';
export class GetTransactionFail implements Action {
    readonly type = GET_TRANSACTION_FAIL;
    constructor(public payload: any) {}
}

export type TransactionActions = AddTransaction | AddTransactionSuccess | AddTransactionFail | 
                                 RemoveTransaction | RemoveTransactionSuccess | RemoveTransactionFail |
                                 UpdateTransaction | UpdateTransactionSuccess | UpdateTransactionFail |
                                 GetTransaction | GetTransactionSuccess | GetTransactionFail
