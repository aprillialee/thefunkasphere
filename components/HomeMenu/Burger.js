import styled from "styled-components";

import MenuOptions from "./MenuOptions";

import { useState } from "react";

function Burger() {
  const [open, setOpen] = useState(false)
  return(
    <>
  <BurgerStyled open={open} onClick={() => setOpen(!open)}>
  <div/>
  <div/>
  <div/>
  </BurgerStyled>
  <MenuOptions open={open}/>
    </>
  )
}

const BurgerStyled = styled.div`
width: 2rem;
height: 2rem;
position: fixed;
right: 20px;
top: 35px;
display: none;
z-index: 20;

@media (max-width: 768px){
display: flex;
justify-content: space-around;
flex-flow: column nowrap;
}

div {
  width: 2rem;
  height: 0.25rem;
  border-radius: 2px;
  background: ${({ open }) => open ? "white" : "white"};
  transform-origin: 1px;
  transition: all 0.3s linear;

  &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
}
`
export default Burger;