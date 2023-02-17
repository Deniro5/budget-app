/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Transaction, View, Balance } from "../../types";
import moment, { Moment } from "moment";
import { RootState } from "../store";
// Define the state of the slice as an object
export interface PlayerState {
  currentView: View;
  currentMonth: string;
  transactions: Transaction[];
  balances: Balance[];
}

// Define an initial state
const initialState: PlayerState = {
  currentView: View.DASHBOARD,
  currentMonth: moment().toString(),
  transactions: [],
  balances: [],
};

// Create a slice containing the configuration of the state
// and the reducers functions
const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setCurrentView(state, action: PayloadAction<View>) {
      state.currentView = action.payload;
    },
    setCurrentMonth(state, action: PayloadAction<string>) {
      state.currentMonth = action.payload;
    },
    setTransactions(state, action: PayloadAction<Transaction[]>) {
      state.transactions = action.payload;
    },
    setBalances(state, action: PayloadAction<Balance[]>) {
      state.balances = action.payload;
    },
  },
});

// Export each reducers function defined in createSlice
export const { setCurrentView, setCurrentMonth, setTransactions, setBalances } =
  playerSlice.actions;

// Export default the slice reducer
export default playerSlice.reducer;

const transactions = (state: RootState) => state.player.transactions;

export const getMonthlyExpenses = createSelector([transactions], (transactions) =>
  transactions.filter((transaction) => transaction.amount > 0)
);

export const getMonthlyIncomes = createSelector([transactions], (transactions) =>
  transactions.filter((transaction) => transaction.amount < 0)
);

export const getMonthlyTransactionExpenses = createSelector(
  [getMonthlyExpenses],
  (expenses) => expenses.reduce((total, expense) => total + expense.amount, 0)
);

export const getMonthlyTransactionIncome = createSelector(
  [getMonthlyIncomes],
  (incomes) => incomes.reduce((total, income) => total + income.amount, 0)
);

export const getMonthlyNetIncome = createSelector(
  [getMonthlyTransactionExpenses, getMonthlyTransactionIncome],
  (expenses, revenue) => revenue - expenses
);

export const getExpenseCategoryValueMap = createSelector(
  [getMonthlyExpenses],
  (expenses) => {
    const result: Record<string, number> = {};
    expenses.forEach((expense) => {
      if (result[expense.mainCategory]) {
        result[expense.mainCategory] += expense.amount;
      } else {
        result[expense.mainCategory] = expense.amount;
      }
    });
    return result;
  }
);

export const getIncomeCategoryValueMap = createSelector(
  [getMonthlyIncomes],
  (incomes) => {
    const result: Record<string, number> = {};
    incomes.forEach((income) => {
      if (result[income.mainCategory]) {
        //Note that we have to reverse these because the incomes are negative
        result[income.mainCategory] -= income.amount;
      } else {
        result[income.mainCategory] = -income.amount;
      }
    });
    return result;
  }
);
