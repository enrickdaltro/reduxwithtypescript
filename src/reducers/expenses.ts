import { ExpenseActionTypes } from "./../types/Actions";
import { Expense } from "../types/Expenses";

const expensesReducerDefaultState: Expense[] = []; // type the default state from types folder

export default (
  state = expensesReducerDefaultState,
  action: ExpenseActionTypes
): Expense[] => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.expense.id) {
          return {
            ...expense,
            ...action.expense
          };
        } else {
          return expense;
        }
      });
    case "SET_EXPENSES":
      return action.expenses;
    default:
      return state;
  }
};
