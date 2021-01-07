import styled from "styled-components";

import Link from "next/link"

function SocialMedia() {
  return (
    <SocialMediaStyled>
    <Link href="https://instagram.com/thefunkasphere" passHref={true}>
      <a>
        <SocialMediaLogo src="/images/instagram.png" />
      </a>
    </Link>
    <Link href="https://twitter.com/thefunkasphere" passHref={true}>
      <a>
        <SocialMediaLogo src="/images/twitter.png" />
      </a>
    </Link>
  </SocialMediaStyled>
  )
}



const SocialMediaStyled = styled.div`
  width: 50px;
  height: 25px;
  position: fixed;
  top: 88%;
  left: 86%;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    left: 70%;
  }
`;

const SocialMediaLogo = styled.img`
  width: 35px;
  height: 35px;
  margin-left: 25px;
`;

export default SocialMedia;
