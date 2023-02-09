import styled from "styled-components";
import { useAppSelector } from "../../hooks";
import { TransactionListItem } from "./TransactionListItem";
import { useMemo } from "react";
import { Transaction } from "../../types";
import moment, { Moment } from "moment";
import { CondensedTransactionListItem } from "./CondensedTransactionListItem";

interface TransactionsListProps {
  isFetchingInitial: boolean;
  errorMessage: string | null;
  isCondensed?: boolean;
}

const today = moment();
const yesterday = moment().add(-1, "days");

const TransactionsList = ({
  isFetchingInitial,
  errorMessage,
  isCondensed,
}: TransactionsListProps) => {
  const transactions = useAppSelector((state) => state.player.transactions);

  const convertDateToYesterdayOrToday = (date: Moment) => {
    if (date.isSame(today, "day")) {
      return "Today";
    } else if (date.isSame(yesterday, "day")) {
      return "Yesterday";
    }
    return date.format("DD MMM");
  };

  const transactionsGroupedByDate = useMemo(() => {
    let lastdate: string | null = null;
    const result: Array<string | Transaction> = [];
    transactions.forEach((transaction) => {
      //if we are on the condensed view we dont want to add the date here
      if (transaction.date !== lastdate && !isCondensed) {
        result.push(convertDateToYesterdayOrToday(moment(transaction.date)));
        lastdate = transaction.date;
      }
      result.push(transaction);
    });
    return result;
  }, [transactions, isCondensed]);

  if (isFetchingInitial) {
    return (
      <SpinnerContainer>
        <img alt='loading wheel' src='../../assets/loadingwheel.gif' />
      </SpinnerContainer>
    );
  } else if (errorMessage) {
    return <ErrorMessage> {errorMessage} </ErrorMessage>;
  } else if (transactions.length === 0) {
    return <Message> There were no transactions found for this month </Message>;
  } else {
    return (
      <>
        {transactionsGroupedByDate.map((transaction) =>
          typeof transaction === "string" ? (
            <DateText> {transaction} </DateText>
          ) : (
            <div key={transaction.transaction_id}>
              {isCondensed ? (
                <CondensedTransactionListItem transaction={transaction} />
              ) : (
                <TransactionListItem transaction={transaction} />
              )}
            </div>
          )
        )}
      </>
    );
  }
};

const SpinnerContainer = styled.div`
  text-align: center;
  img {
    width: 18px;
    height: 18px;
  }
`;

const Message = styled.div`
  font-size: 18px;
  text-align: center;
`;

const ErrorMessage = styled(Message)`
  color: red;
`;

const DateText = styled.p`
  color: grey;
  font-weight: 600;
  font-size: 14px;
`;

export { TransactionsList };
