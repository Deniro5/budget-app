import styled from "styled-components";
import { Menu } from "./Menu";

const Sidebar = () => {
  return (
    <Container>
      <Title> Personal Budget</Title>
      <Menu />
    </Container>
  );
};

const Container = styled.div`
  width: 200px;
  padding: 0 25px;
  height: 100vh;
  background: white;
  position: fixed;
  border-right: 1px whitesmoke solid;
  left: 0;
  top: 0;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  padding-bottom: 8px;
  text-align: center;

  border-bottom: 3px solid whitesmoke;
`;

export { Sidebar };
