import Burger from "./Burger"

import Link from "next/link";

import styled from "styled-components";

function HomeMenu() {
  return (
    <HomeMenuStyled>
      <Burger/>
    </HomeMenuStyled>
  );
}

const HomeMenuStyled = styled.div`
  width: 250px;
  height: 280px;
  position: absolute;
  bottom: 0px;
  right: 0px;

  @media (max-width: 700px){
    width: 150px;
    height: 250px;
    top: 5px;
    right: 0px;
  }
`;



export default HomeMenu;
