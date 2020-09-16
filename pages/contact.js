import Header from "../components/Header/Header";
import HomeMenu from "../components/HomeMenu/HomeMenu";

import styled from "styled-components";

function Contact() {
  return (
    <>
      <Header />
      <HomeMenu />
      <ContactText>
        It takes time to harvest The Funk <br /> Check back soon for our first
        episode
      </ContactText>
    </>
  );
}

const ContactText = styled.p`
  text-align: center;
  margin: 0;
  line-height: 4rem;
  position: fixed;
  color: red;
`;

export default Contact;
