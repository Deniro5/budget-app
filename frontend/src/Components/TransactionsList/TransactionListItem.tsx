import styled from "styled-components";
import { Transaction } from "../../types";
import { formatNumberToDollar } from "../../utils";

export type ITransactionProps = {
  transaction: Transaction;
};

const TransactionListItem = ({ transaction }: ITransactionProps) => {
  return (
    <Container>
      <ImageAndNameContainer>
        <ImageContainer>
          <TransactionImage
            alt='Transaction image type'
            src='https://cdn-icons-png.flaticon.com/512/1440/1440506.png'
          />
        </ImageContainer>
        <NameContainer>
          <TransactionName> {transaction.name} </TransactionName>
          <TransactionCategory> {transaction.category[0]} </TransactionCategory>
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

const TransactionImage = styled.img`
  height: 30px;
  width: 30px;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 90px;
  width: 45px;
  height: 45px;
  background: whitesmoke;
`;

const NameContainer = styled.div`
  margin-left: 10px;
`;

const TransactionName = styled.p`
  font-weight: 700;
  margin: 0;
`;

const TransactionCategory = styled.p`
  margin: 0;
  font-size: 14px;
`;

const TransactionAmount = styled.p``;

export { TransactionListItem };
