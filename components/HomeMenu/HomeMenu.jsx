import Link from "next/link";

import styled from "styled-components";
import { rem } from "polished";

function HomeMenu() {
  return (
    <HomeMenuStyled>
      <MenuItemStyled>
        <Link href="/about">
          <a>ABOUT</a>
        </Link>
      </MenuItemStyled>
      <MenuItemStyled>
        <Link href="/episodes">
          <a>EPISODES</a>
        </Link>
      </MenuItemStyled>
      <MenuItemStyled>
        <Link href="/contact">
          <a>CONTACT</a>
        </Link>
      </MenuItemStyled>
      <SocialMediaStyled>
        <Link href="https://instagram.com/thefunkasphere" passHref={true}>
          <a>
            <SocialMediaLogo src="/images/instagram.png" />
          </a>
        </Link>
        <Link href="https://twitter.com/thefunkasphere" passHref={true}>
          <a>
            <SocialMediaLogo src="/images/twitter.png" />
          </a>
        </Link>
      </SocialMediaStyled>
    </HomeMenuStyled>
  );
}

const HomeMenuStyled = styled.div`
  width: 250px;
  height: 280px;
  position: fixed;
  bottom: 0px;
  right: 0px;
`;

const MenuItemStyled = styled.h1`
  font-size: 25px;
  letter-spacing: 0.2rem;
  text-align: center;
  margin-bottom: 20px;
`;

const SocialMediaStyled = styled.div`
  width: 50%;
  height: 25%;
  margin: auto;
`;

const SocialMediaLogo = styled.img`
  width: 35px;
  height: 35px;
  margin-left: 16px;
`;

export default HomeMenu;
