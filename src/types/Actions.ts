import {
    EditExpenseAction,
    RemoveExpenseAction,
    AddExpenseAction
} from './Actions';
import { Expense } from './Expenses';
/**
 * define each one of our types into a variable
 * and set them to our specific action types
 */

export const ADD_EXPENSE = 'ADD_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const SET_EXPENSES = 'SET_EXPENSES';

/**
 * export each action as an interface format
 */

export interface SetExpenseAction {
    type: typeof SET_EXPENSES;
    expenses: Expense[];
}
export interface EditExpenseAction {
    type: typeof EDIT_EXPENSE;
    expense: Expense;
}

export interface RemoveExpenseAction {
    type: typeof REMOVE_EXPENSE;
    id: string;
}

export interface AddExpenseAction {
    type: typeof ADD_EXPENSE;
    expense: Expense;
}

/**
 * set an aggregation of all actions interfaces
 */

export type ExpenseActionTypes =
    | SetExpenseAction
    | EditExpenseAction
    | RemoveExpenseAction
    | AddExpenseAction;

/**
 * set another aggregation of all expenses actions
 */

export type AppActions = ExpenseActionTypes;
