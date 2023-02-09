export enum View {
  DASHBOARD = "Dashboard",
  GOALS = "Goals",
  SETTINGS = "Settings",
  TRANSACTIONS = "Transactions",
}

export interface Transaction {
  name: string;
  amount: number;
  date: string;
  transaction_id: string;
  category: string;
}

interface BalanceValues {
  available: number;
  current: number;
  iso_currency_code: string;
  limit: number | null;
  unofficial_currency_code: string | null;
}

export interface Balance {
  account_id: string;
  balances: BalanceValues;
  mask: string;
  name: string;
  official_name: string;
  subtype: string;
  type: string;
}
