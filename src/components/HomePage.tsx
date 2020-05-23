import React from "react";
import { connect } from "react-redux";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";
import { Expense } from "../types/Expenses";
import { AppState } from "../store/configureStore";
import { AppActions } from "../types/Actions";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";

/**
 * specify two interfaces for mapStateToProps and mapDispatchToProps
 */

interface HomePageProps {
  id?: string;
  color?: string;
}

interface HomePageState {}

type Props = HomePageProps & LinkDispatchProps & LinkStateProps;

export class HomePage extends React.Component<Props, HomePageState> {
  onEdit = (expense: Expense) => {
    this.props.startEditExpense(expense);
  };
  onRemove = (id: string) => {
    this.props.startRemoveExpense(id);
  };
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <h1>Expense Page</h1>
        <div>
          {expenses.map(expense => (
            <div>
              <p>{expense.description}</p>
              <p>{expense.amount}</p>
              <p>{expense.note}</p>
              <button onClick={() => this.onRemove(expense.id)}>
                Remove Expense
              </button>
              <button onClick={() => this.onEdit(expense)}>Edit Expense</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

/**
 * two interfaces, 1 to return the values for mapStateToProps e the other to return the values
 * to mapDispatchToProps
 */

interface LinkStateProps {
  expenses: Expense[];
}
interface LinkDispatchProps {
  startEditExpense: (expense: Expense) => void;
  startRemoveExpense: (id: string) => void;
}

const mapStateToProps = (
  state: AppState,
  props: HomePageProps
): LinkStateProps => ({
  expenses: state.expenses
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  props: HomePageProps
): LinkDispatchProps => ({
  startEditExpense: bindActionCreators(startEditExpense, dispatch),
  startRemoveExpense: bindActionCreators(startRemoveExpense, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
