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
          A new atmospheric layer just beyond the stratosphere has been
          discovered; <br />
          THE FUNKASPHERE. For millions of years the funk mothership has been in
          orbit waiting to be tuned into and has only been harvested by the
          greatest minds to have walked the earth. <br />
        </AboutText>
      </AboutStyled>
      <AboutSecondParagraph>
        <AboutText>
          Get ready to unearth stories of The Funk Pioneers from around the
          World. Explore the many dimensions of sound; from creators to
          fanatics, from performers to engineers. The Funkasphere is a podcast
          that will ignite your right to party, challenge your perceptions on
          music, and expand your knowledge of sound. Make sure you’ve refuelled
          your jetpack, its time to initiate launch.
        </AboutText>
      </AboutSecondParagraph>
    </>
  );
}

const AboutStyled = styled.div`
  position: fixed;
  top: 174px;
  left: 20%;
  width: 50%;
  display: flex;
  justify-content: center;
  
  @media (max-width: 1400px) {
    top: 190px;
    left: 13%;
  }

`;

const AboutSecondParagraph = styled.div`
  position: fixed;
  width: 50%;
  left: 20%;
  top: 300px;
  display: flex;
  justify-content: center;

  @media (max-width: 1400px) {
    left: 13%;
  }

  @media (max-width: 700px){
    top: 320px;
  }

  @media (max-width: 450px){
    top: 350px;
  }

  @media (max-width: 350px){
    top: 370px;
  }

`;

const AboutText = styled.p`
  line-height: 2rem;
  text-align: center;
  font-size: 15px;

  @media (max-width: 1000px) {
    font-size: 12px;
    line-height: 1.1rem;
  }
`;

export default About;
