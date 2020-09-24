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
      <ContactDiv />
    </>
  );
}

const ContactDiv = styled.div`
  position: fixed;
  top: 120px;
  left: ${rem("325px")};
  width: 50%;
  height: 70%;
  display: flex;
  background: #1e272c;
  opacity: 0.6;
`;

export default Contact;
