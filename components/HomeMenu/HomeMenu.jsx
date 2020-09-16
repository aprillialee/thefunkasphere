import styled from "styled-components";
import { rem } from "polished";

function HomeMenu() {
  return (
    <HomeMenuStyled>
      <MenuItemStyled>ABOUT</MenuItemStyled>
      <MenuItemStyled>EPISODES</MenuItemStyled>
      <MenuItemStyled>CONTACT</MenuItemStyled>
      <SocialMediaStyled>
        <SocialMediaLogo src="/images/instagram.png" />
        <SocialMediaLogo src="/images/twitter.png" />
      </SocialMediaStyled>
    </HomeMenuStyled>
  );
}

const HomeMenuStyled = styled.div`
  width: ${rem("250px")};
  height: ${rem("280px")};
  position: fixed;
  bottom: 0px;
  right: 0px;
`;

const MenuItemStyled = styled.h1`
  font-size: ${rem("25px")};
  letter-spacing: 0.2rem;
  text-align: center;
  margin-bottom: ${rem("20px")};
`;

const SocialMediaStyled = styled.div`
  width: 50%;
  height: 25%;
  margin: auto;
`;

const SocialMediaLogo = styled.img`
  width: ${rem("35px")};
  height: ${rem("35px")};
  margin-left: ${rem("16px")};
`;

export default HomeMenu;
