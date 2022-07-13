import { Action } from "@ngrx/store";
import { Transaction } from "../../shared/transaction.model";

export const SAVE_TRANSACTION = '[TRANSACTION] SAVE_TRANSACTION';
export class SaveTransaction implements Action {
    readonly type = SAVE_TRANSACTION;
    constructor(public transaction: Transaction) {

    }
}

export const SAVE_TRANSACTION_SUCCESS = '[TRANSACTION] SAVE_TRANSACTION_SUCCESS';
export class SaveTransactionSuccess implements Action {
    readonly type = SAVE_TRANSACTION_SUCCESS;
    constructor(public transaction: Transaction) { }
}

export const SAVE_TRANSACTION_FAIL = '[TRANSACTION] SAVE_TRANSACTION_FAIL';
export class SaveTransactionFail implements Action {
    readonly type = SAVE_TRANSACTION_FAIL;
    constructor(public error: string) { }
}

export const REMOVE_TRANSACTION = '[TRANSACTION] REMOVE_TRANSACTION';
export class RemoveTransaction implements Action {
    readonly type = REMOVE_TRANSACTION;
    constructor(public transactionId: number) { }
}

export const REMOVE_TRANSACTION_SUCCESS = '[TRANSACTION] REMOVE_TRANSACTION_SUCCESS';
export class RemoveTransactionSuccess implements Action {
    readonly type = REMOVE_TRANSACTION_SUCCESS;
    constructor(public transactionId: number) { }
}

export const REMOVE_TRANSACTION_FAIL = '[TRANSACTION] REMOVE_TRANSACTION_FAIL';
export class RemoveTransactionFail implements Action {
    readonly type = REMOVE_TRANSACTION_FAIL;
    constructor(public error: string) { }
}

export const UPDATE_TRANSACTION = '[TRANSACTION] UPDATE_TRANSACTION';
export class UpdateTransaction implements Action {
    readonly type = UPDATE_TRANSACTION;
    constructor(public transaction: Transaction) {}
}

export const UPDATE_TRANSACTION_SUCCESS = '[TRANSACTION] UPDATE_TRANSACTION_SUCCESS';
export class UpdateTransactionSuccess implements Action {
    readonly type = UPDATE_TRANSACTION_SUCCESS;
    constructor(public transaction: Transaction) {}
}

export const UPDATE_TRANSACTION_FAIL = '[TRANSACTION] UPDATE_TRANSACTION_FAIL';
export class UpdateTransactionFail implements Action {
    readonly type = UPDATE_TRANSACTION_FAIL;
    constructor(public error: string) { }
}

export const GET_TRANSACTION = '[TRANSACTION] GET_TRANSACTION';
export class GetTransaction implements Action {
    readonly type = GET_TRANSACTION;
}

export const GET_TRANSACTION_SUCCESS = '[TRANSACTION] GET_TRANSACTION_SUCCESS';
export class GetTransactionSuccess implements Action {
    readonly type = GET_TRANSACTION_SUCCESS;
    constructor(public transaction: Transaction[]) {}
}

export const GET_TRANSACTION_FAIL = '[TRANSACTION] GET_TRANSACTION_FAIL';
export class GetTransactionFail implements Action {
    readonly type = GET_TRANSACTION_FAIL;
    constructor(public error: string) {}
}

export type TransactionActions = SaveTransaction | SaveTransactionSuccess | SaveTransactionFail | 
                                 RemoveTransaction | RemoveTransactionSuccess | RemoveTransactionFail |
                                 UpdateTransaction | UpdateTransactionSuccess | UpdateTransactionFail |
                                 GetTransaction | GetTransactionSuccess | GetTransactionFail
