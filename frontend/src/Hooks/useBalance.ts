import { useState, useEffect, useContext } from "react";
import { FETCH_LIMIT } from "../constants";
import Context from "../Context";
import { useAppSelector, useAppDispatch } from "../hooks";
import { setBalances } from "../redux/slices/playerSlice";
import { Transaction } from "../types";
import moment from "moment";

const useBalance = () => {
  // const accessToken = useAppSelector((state) => state.player.accessToken);
  const { accessToken } = useContext(Context);
  const [isFetchingInitial, setIsFetchingInitial] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const loadMoreTransactions = async () => {
    const response = await fetch(`/api/balance`, {
      method: "GET",
    });
    if (!response.ok) {
      dispatch({ type: "SET_STATE", state: { backend: false } });
      setErrorMessage("There was an error loading balance");
      return { paymentInitiation: false };
    }
    setIsFetchingInitial(false);
    const data = await response.json();
    dispatch(setBalances(data.accounts));
  };

  useEffect(() => {
    loadMoreTransactions();
  }, []);

  return {
    isFetchingInitial,
    errorMessage,
  };
};

export default useBalance;
