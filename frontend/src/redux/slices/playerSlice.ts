/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Transaction, View, Balance } from "../../types";
import moment, { Moment } from "moment";
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
