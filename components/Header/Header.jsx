import styled from "styled-components";
import { rem } from "polished";

function Header() {
  return (
    <HeaderStyled>
      <HeaderTitle>THE FUNKASPHERE</HeaderTitle>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  width: 35%;
  height: 80px;
  position: fixed;
  top: -10px;
  left: 60px;
`;

const HeaderTitle = styled.h1`
  font-size: ${rem("48px")};
  letter-spacing: 0.2rem;
`;

export default Header;
