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
  width: 250px;
  height: 280px;
  position: fixed;
  bottom: 0px;
  right: 0px;
`;

const MenuItemStyled = styled.h1`
  font-size: ${rem("25px")};
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
  width: 45px;
  height: 45px;
  margin-left: 10px;
`;

export default HomeMenu;
