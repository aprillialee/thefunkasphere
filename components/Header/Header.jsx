import styled from "styled-components";
import { rem } from "polished";

function Header() {
  return <HeaderStyled>THE FUNKASPHERE</HeaderStyled>;
}

const HeaderStyled = styled.h1`
  font-size: ${rem("48px")};
  letter-spacing: 0.2rem;
  margin: ${rem("40px")};
`;

export default Header;
