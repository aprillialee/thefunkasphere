import Header from "../components/Header/Header";
import HomeMenu from "../components/HomeMenu/HomeMenu";

import styled from "styled-components";

import { rem } from "polished";

function Episodes() {
  return (
    <>
      <Header />
      <HomeMenu />
      <EpisodeStyled>
        <EpisodesText>
          It takes time to harvest The Funk <br /> Check back soon for our first
          episode
        </EpisodesText>
      </EpisodeStyled>
    </>
  );
}

const EpisodeStyled = styled.div`
  margin-top: ${rem("220px")};
  display: flex;
  justify-content: center;
`;

const EpisodesText = styled.p`
  line-height: 4rem;
  text-align: center;
  font-size: ${rem("22px")};
`;

export default Episodes;
