import React from "react";
import moment from "moment";
import { useAppSelector } from "../hooks";
import useFetchTransactions from "../Hooks/useTransactions";
import { DateChanger } from "../Components/DateChanger";
import { TransactionsList } from "../Components/TransactionsList";
import styled from "styled-components";
import useAddTransactions from "../Hooks/useAddTransactions";

export type ITransactionsProps = {};

const Transactions: React.FC<ITransactionsProps> = ({}) => {
  const currentMonth = useAppSelector((state) => moment(state.player.currentMonth));
  const { isOpen, setIsOpen, Modal } = useAddTransactions();

  const { isFetchingInitial, loadMoreTransactions, errorMessage } =
    useFetchTransactions();

  return (
    <>
      <Container>
        <DateChanger />
        <AddButton onClick={() => setIsOpen(true)}> Add Transaction </AddButton>
        <TransactionsListContainer>
          <TransactionsList
            isFetchingInitial={isFetchingInitial}
            errorMessage={errorMessage}
          />
        </TransactionsListContainer>
      </Container>
      {Modal}
    </>
  );
};

const Container = styled.div`
  overflow: hidden;
  max-width: 800px;
  width: 90%;
  margin: auto;
`;

const AddButton = styled.button`
  background: mediumblue;
  color: white;
  border: none;
  height: 35px;
  width: 120px;
  border-radius: 4px;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    background: navy;
  }
`;
const TransactionsListContainer = styled.div`
  margin: auto;
  margin-top: 20px;
  width: 100%;
  // change this and fix double scroll
  height: 90vh;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  border-top: 1px solid lightgrey;
  padding-top: 8px;
`;

export { Transactions };
