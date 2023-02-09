import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setCurrentView } from "../../redux/slices/playerSlice";
import { View } from "../../types";

const Menu = ({}) => {
  const dispatch = useAppDispatch();
  const currentView = useAppSelector((state) => state.player.currentView);

  const handleMenuItemClick = (view: View) => {
    dispatch(setCurrentView(view));
  };

  return (
    <Container>
      <MenuItem onClick={() => handleMenuItemClick(View.DASHBOARD)}> Dashboard </MenuItem>
      <MenuItem onClick={() => handleMenuItemClick(View.TRANSACTIONS)}>
        Transactions
      </MenuItem>
      <MenuItem onClick={() => handleMenuItemClick(View.GOALS)}> Budget Goals </MenuItem>
      <MenuItem onClick={() => handleMenuItemClick(View.SETTINGS)}> Settings </MenuItem>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 35px;
`;

const IconContainer = styled.div<{ isActive: boolean }>`
  margin-right: 6px;
  transform: translateY(3px);
`;

export const MenuItem = styled.div`
  color: grey;
  transition: 0.1s;
  cursor: pointer;
  font-size: 13px;
  font-weight: 5 00;
  &:hover {
    color: blue;
  }
  display: flex;
  align-items: center;
  padding: 7px 0px;
`;

export { Menu };
