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
        <Email>Contact us: thefunkasphere@gmail.com</Email>
      </ContactDiv>
    </>
  );
}

const ContactDiv = styled.div`
  position: fixed;
  top: 120px;
  left: ${rem("365px")};
  width: 50%;
  height: 70%;
  display: flex;
  display: block;
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
/*
<FormDiv>
<InputDiv>
  <InputName type="text" placeholder="First Name" />
</InputDiv>
<InputDiv>
  <InputName type="text" placeholder="Second Name" />
</InputDiv>
<InputEmailDiv>
  <InputEmail type="email" placeholder="yourname@youremail.com" />
</InputEmailDiv>
<InputTextDiv>
  <InputText type="Text" placeholder="Enter your transmission" />
</InputTextDiv>
<SubmitDiv>
  <SubmitButton type="button">Submit</SubmitButton>
</SubmitDiv>
</FormDiv>

const ContactDiv = styled.div`
  position: fixed;
  top: 120px;
  left: ${rem("365px")};
  width: 50%;
  height: 70%;
  display: flex;
  display: block;
`;

const ContactTitle = styled.h2`
  font-size: 20px;
  opacity: 1;
  letter-spacing: 1px;
  margin: 30px;
`;

const FormDiv = styled.form`
  width: 100%;
  height: 75%;
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto auto;
  justify-content: space-evenly;
`;

const InputDiv = styled.div`
  height: 100%;
  width: 100%;
`;

const InputEmailDiv = styled.div`
  height: 100%;
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
`;

const InputTextDiv = styled.div`
  height: 100%;
  width: 100%;
  grid-row-start: 3;
  grid-row-end: 4;
  grid-column-start: 1;
  grid-column-end: 3;
`;

const SubmitDiv = styled.div`
  height: 30%;
  width: 40%;
  grid-row-start: 4;
  grid-row-end: 5;
  grid-column-start: 2;
  grid-column-end: 3;
  margin-top: 10px;
  margin-left: 50%;
`;

const SubmitButton = styled.button`
  width: 100px;
  height: 30px;
  letter-spacing: 1px;
  font-family: "Anton", sans-serif;
  text-align: center;
  background: rgb(73, 85, 91);
  outline: none;
  color: #fcfcfc;
  border-radius: 3px;
`;

const InputName = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  border-radius: 3px;
  width: 210px;
  letter-spacing: 1px;
  font-family: "Anton", sans-serif;
  text-align: center;
  background: rgb(73, 85, 91);
  border: 1px white solid;
  outline: none;
  color: #fcfcfc;

  ::-webkit-input-placeholder {
    color: rgb(147, 164, 173);
  }
`;

const InputEmail = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  border-radius: 3px;
  width: 500px;
  letter-spacing: 1px;
  font-family: "Anton", sans-serif;
  text-align: center;
  background: rgb(73, 85, 91);
  border: 1px white solid;
  outline: none;
  color: #fcfcfc;

  ::-webkit-input-placeholder {
    color: rgb(147, 164, 173);
  }
`;

const InputText = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  border-radius: 3px;
  width: 500px;
  height: 180px;
  letter-spacing: 1px;
  font-family: "Anton", sans-serif;
  text-align: center;
  background: rgb(73, 85, 91);
  border: 1px white solid;
  outline: none;
  color: #fcfcfc;

  ::-webkit-input-placeholder {
    color: rgb(147, 164, 173);
  }
`;
*/
export default Contact;
