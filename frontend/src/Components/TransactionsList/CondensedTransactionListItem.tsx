import styled from "styled-components";
import { Transaction } from "../../types";
import { formatNumberToDollar } from "../../utils";

export type ICondensedTransactionListItemProps = {
  transaction: Transaction;
};

const CondensedTransactionListItem = ({
  transaction,
}: ICondensedTransactionListItemProps) => {
  return (
    <Container>
      <ImageAndNameContainer>
        <NameContainer>
          <TransactionName> {transaction.name} </TransactionName>
          <TransactionCategory> {transaction.mainCategory} </TransactionCategory>
        </NameContainer>
      </ImageAndNameContainer>
      <TransactionAmount> {formatNumberToDollar(transaction.amount)}</TransactionAmount>
    </Container>
  );
};

const Container = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
`;

const ImageAndNameContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NameContainer = styled.div`
  margin-left: 10px;
`;

const TransactionName = styled.p`
  font-weight: 600;
  font-size: 14px;
  margin: 0;
`;

const TransactionCategory = styled.p`
  margin: 0;
  font-size: 14px;
`;

const TransactionAmount = styled.p``;

export { CondensedTransactionListItem };
