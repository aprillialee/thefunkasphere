import Header from "../components/Header/Header";
import HomeMenu from "../components/HomeMenu/HomeMenu";

import styled from "styled-components";
import { rem } from "polished";

import React, { useState, useEffect } from "react";

import dynamic from "next/dynamic";

const Background = dynamic(import("../r3f/Background"), {
  ssr: false,
});

function Contact() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);
  return (
    <>
      {hasMounted && <Background />}
      <Header />
      <HomeMenu />
      <ContactDiv>
        <ContactTitle>Transmit To The Funk Mothership</ContactTitle>
        <Email>
          Contact us: thefunkasphere@gmail.com or message us on Instagram
        </Email>
      </ContactDiv>
    </>
  );
}

const ContactDiv = styled.div`
  position: fixed;
  top: 120px;
  left: 365px;
  width: 50%;
  height: 70%;
  display: flex;
  display: block;

  @media (max-width: 768px){
    top: 160px;
    left: 50px;
    width: 80%;
  }
`;

const ContactTitle = styled.h2`
  font-size: 20px;
  opacity: 1;
  letter-spacing: 1px;
  margin: 30px;
`;

const Email = styled.h2`
  font-size: 18px;
  margin: 80px;
  letter-spacing: 1px;
`;

export default Contact;
