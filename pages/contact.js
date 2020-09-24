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
        <FormDiv>
          <form>
            <Input type="text" placeholder="First Name" />

            <Input type="text" placeholder="Second Name" />
          </form>
        </FormDiv>
      </ContactDiv>
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
  background: rgb(30, 39, 44, 0.6);
  display: block;
`;

const ContactTitle = styled.h2`
  font-size: 20px;
  opacity: 1;
  letter-spacing: 1px;
  margin: 30px;
`;

const FormDiv = styled.div`
  width: 100%;
  height: 75%;
  margin-top: 20px;
  margin-left: 30px;
  display: flex;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: rgb(30, 39, 44);
  border-radius: 3px;
  width: 45%;
  letter-spacing: 1px;
  font-family: "Anton", sans-serif;
  text-align: center;
`;
export default Contact;
