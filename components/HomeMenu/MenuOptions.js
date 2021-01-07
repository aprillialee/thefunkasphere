import styled from "styled-components";

import Link from "next/link";

function MenuOptions({open}) {
  return(
    <MenuItemsStyled  open={open}>
    <MenuItemStyled>
    <Link href="/about">
      <li>ABOUT</li>
    </Link>
  </MenuItemStyled>
  <MenuItemStyled>
    <Link href="/episodes">
      <li>EPISODES</li>
    </Link>
  </MenuItemStyled>
  <MenuItemStyled>
    <Link href="/contact">
      <li>CONTACT</li>
    </Link>
  </MenuItemStyled>
  </MenuItemsStyled>
  )
}

const MenuItemsStyled = styled.ul`
  margin-bottom: 20px;
  font-size: 25px;
  letter-spacing: 0.2rem;
  text-align: center;
  list-style: none;
  cursor: pointer;

  @media (max-width: 768px){
   position: fixed;
   width: 100%;
   height: 100%;
   background: black;
   transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
   right: 0;
   top: 0;
   z-index: 10;
   transition: transform 0.5s ease-in-out;
  }
`

const MenuItemStyled = styled.li`
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 100px;
    margin-top: 50px;
  }
`;


export default MenuOptions