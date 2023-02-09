import styled from "styled-components";
import { useAppSelector } from "../../hooks";
import useBalance from "../../Hooks/useBalance";
import { formatNumberToDollar } from "../../utils";

const BalanceDisplay = () => {
  const { isFetchingInitial, errorMessage } = useBalance();
  const balances = useAppSelector((state) => state.player.balances);
  console.log(balances);

  if (isFetchingInitial) {
    return <div> Loading </div>;
  } else if (errorMessage) {
    return <div> {errorMessage} </div>;
  }

  return (
    <Container>
      <Label> Accounts: </Label>
      {balances.map((balance) => (
        <BalanceContainer>
          <BalanceName> {balance.name} :</BalanceName>
          <BalanceValue> {formatNumberToDollar(balance.balances.current)}</BalanceValue>
        </BalanceContainer>
      ))}
    </Container>
  );
};

const Container = styled.div`
  text-align: left;
  padding: 10px;
`;

const Label = styled.p`
  font-weight: 400;
  font-size: 24px;
  text-align: left;
  margin: 10px;
`;

const BalanceContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

const BalanceName = styled.div`
  font-weight: 600;
`;

const BalanceValue = styled.div`
  margin-left: 5px;
  margin-top: 1px;
`;

export { BalanceDisplay };
