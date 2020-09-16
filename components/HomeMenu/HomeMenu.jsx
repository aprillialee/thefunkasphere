import styled from "styled-components";
import { rem } from "polished";

function HomeMenu() {
  return (
    <HomeMenuStyled>
      <MenuItemStyled>ABOUT</MenuItemStyled>
      <MenuItemStyled>EPISODES</MenuItemStyled>
      <MenuItemStyled>CONTACT</MenuItemStyled>
    </HomeMenuStyled>
  );
}

const HomeMenuStyled = styled.div`
  width: 250px;
  height: 230px;
  position: fixed;
  bottom: 0px;
  right: 0px;
  justify-content: center;
`;

const MenuItemStyled = styled.h1`
  font-size: ${rem("25px")};
  letter-spacing: 0.2rem;
  text-align: center;
`;

export default HomeMenu;
