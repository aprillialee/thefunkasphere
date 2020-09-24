import Header from "../components/Header/Header";
import HomeMenu from "../components/HomeMenu/HomeMenu";

import styled from "styled-components";

import dynamic from "next/dynamic";

import React, { useState, useEffect } from "react";

import { rem } from "polished";

const Background = dynamic(import("../r3f/Background"), {
  ssr: false,
});

function About() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);
  return (
    <>
      {hasMounted && <Background />}
      <Header />
      <HomeMenu />
      <AboutStyled>
        <AboutText>
          Recently discovered by NASA, a new atmospheric layer just beyond the
          stratosphere; <br />
          THE FUNKASPHERE. For millions of years the funk mothership has been in
          orbit waiting to be tuned into and has only been harvested by the
          greatest minds to have walked the earth. <br />
        </AboutText>
      </AboutStyled>
      <AboutSecondParagraph>
        <AboutText>
          Unearth stories of The Funk Pioneers from around the World. Explore
          the many dimensions of sound; from creators to fanatics, from
          performers to engineers. The Funkasphere is a podcast that will ignite
          your right to party, challenge your perceptions on music, and expand
          your knowledge of sound. Make sure you’ve refuelled your jetpack, its
          time to initiate launch.
        </AboutText>
      </AboutSecondParagraph>
    </>
  );
}

const AboutStyled = styled.div`
  position: fixed;
  top: 170px;
  left: ${rem("325px")};
  width: 50%;
  display: flex;
  justify-content: center;
`;

const AboutSecondParagraph = styled.div`
  position: fixed;
  width: 50%;
  display: flex;
  justify-content: center;
  top: 300px;
  left: ${rem("325px")};
`;

const AboutText = styled.p`
  line-height: 2rem;
  text-align: center;
  font-size: ${rem("15px")};
`;

export default About;
//  margin-top: ${rem("170px")};
//  margin-left: ${rem("325px")};
