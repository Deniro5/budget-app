import { useState, useEffect, useContext } from "react";
import { FETCH_LIMIT } from "../constants";
import Context from "../Context";
import { useAppSelector, useAppDispatch } from "../hooks";
import { setTransactions } from "../redux/slices/playerSlice";
import { Transaction } from "../types";
import moment from "moment";

const useFetchTransactions = () => {
  // const accessToken = useAppSelector((state) => state.player.accessToken);
  const { accessToken } = useContext(Context);
  const currentMonth = useAppSelector((state) => state.player.currentMonth);
  const [fetchUrl, setFetchUrl] = useState<string | null>(
    `https://api.spotify.com/v1/me/tracks?offset=0&limit=${FETCH_LIMIT}`
  );
  const [isFetchingInitial, setIsFetchingInitial] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const loadMoreTransactions = async () => {
    const startDate = moment(currentMonth).format("YYYY-MM-DD");
    const endDate = moment(currentMonth).endOf("month").format("YYYY-MM-DD");
    const response = await fetch(
      `/api/transactions?start_date=${encodeURIComponent(
        startDate
      )}&end_date=${encodeURIComponent(endDate)}`,
      {
        method: "GET",
      }
    );
    if (!response.ok) {
      dispatch({ type: "SET_STATE", state: { backend: false } });
      setErrorMessage("There was an error loading transactions");
      setIsFetchingInitial(false);
      return { paymentInitiation: false };
    }
    const data = await response.json();
    const formattedTransactions = data.transactions.map((transaction: Transaction) => {
      return {
        name: transaction.name,
        amount: transaction.amount,
        date: transaction.date,
        transaction_id: transaction.transaction_id,
        category: transaction.category,
      };
    });
    setErrorMessage(null);
    setIsFetchingInitial(false);
    dispatch(setTransactions(formattedTransactions));
  };

  useEffect(() => {
    loadMoreTransactions();
  }, [currentMonth]);

  return {
    isFetchingInitial,
    loadMoreTransactions,
    errorMessage,
  };
};

export default useFetchTransactions;
