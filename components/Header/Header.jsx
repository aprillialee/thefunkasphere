import Link from "next/link";

import styled from "styled-components";
import { rem } from "polished";

function Header() {
  return (
    <HeaderStyled>
      <HeaderTitle>
        <Link href="/">
          <a>THE FUNKASPHERE</a>
        </Link>
      </HeaderTitle>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  width: 35%;
  height: 80px;
  position: fixed;
  top: -10px;
  left: 60px;
  @media (max-width: 768px) {
    left: 20px;
  }
`;

const HeaderTitle = styled.h1`
  font-size: ${rem("48px")};
  letter-spacing: 0.2rem;
`;

export default Header;
