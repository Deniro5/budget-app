import styled from "styled-components";
import useFetchTransactions from "../../Hooks/useTransactions";
import { Transaction } from "../../types";
import { BalanceDisplay } from "../BalanceDisplay";
import { TransactionsList } from "../TransactionsList";

export type ITransactionProps = {
  transaction?: Transaction;
};

const DashboardGrid = ({ transaction }: ITransactionProps) => {
  const { isFetchingInitial, loadMoreTransactions, errorMessage } =
    useFetchTransactions();

  return (
    <Container>
      <Grid>
        <GridSection>
          <BalanceDisplay />
        </GridSection>
        <GridSection> 2 </GridSection>
        <GridSection> 3 </GridSection>
        <GridSection>
          <OuterContainer>
            <ListLabel> Transactions </ListLabel>
            <TransactionsListContainer>
              <TransactionsList
                isFetchingInitial={isFetchingInitial}
                errorMessage={errorMessage}
                isCondensed
              />
            </TransactionsListContainer>
          </OuterContainer>
        </GridSection>
      </Grid>
    </Container>
  );
};

const GridSection = styled.div`
  height: calc((100vh - 100px) / 2);
`;

const Container = styled.div`
  height: calc(100vh - 100px);
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 10px;

  & > div:nth-child(-n + 3) {
    border: 1px solid black;
    text-align: center;
  }

  & > div:nth-child(4) {
    grid-column: 1 / -1;
    border-top: 1px solid whitesmoke;
    text-align: center;
  }
`;

const ListLabel = styled.h3`
  font-size: 16px;
  margin-left: 29px;
  color: black;
  text-decoration: underline;
  margin-bottom: 10px;
`;

const TransactionsListContainer = styled.div`
  width: 100%;

  text-align: left;
  height: calc(((100vh - 100px) / 2) - 22px);
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  padding-top: 8px;
`;

const OuterContainer = styled.div`
  text-align: left;
  max-width: 800px;
  margin: auto;
`;

export { DashboardGrid };
