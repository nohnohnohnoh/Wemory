import React from 'react'
import styled, { keyframes } from 'styled-components'

interface menuToggleProps {
  menuToggle: boolean
}

const MenuModal = ({ menuToggle }: menuToggleProps) => {
  return (
    <MenuModalPage menuToggle={menuToggle}>
      {/* <MenuModalBox> */}
      <List>내 기수 보러가기</List>
      <List>My Page</List>
      <List>로그아웃</List>
      {/* </MenuModalBox> */}
    </MenuModalPage>
  )
}

// const boxFade = keyframes`
//   0%{
//     opacity:1
//   }
//   100%{
//    opacity:1
//   }
// `

const MenuModalPage = styled.div<menuToggleProps>`
  width: 10%;
  position: fixed;
  top: 10%;
  right: 7%;
  border: 1px gray;
  border-radius: 10px;
  box-shadow: 4px 5px 10px rgb(0 0 0 / 30%);
  transition: 5s ease-in-out;
  z-index: 1000;
  list-style: none;
`
// const MenuModalBox = styled.ul`
//   width: 10%;
//   position: fixed;
//   top: 10%;
//   right: 7%;
//   border: 1px gray;
//   border-radius: 10px;
//   box-shadow: 4px 5px 10px rgb(0 0 0 / 30%);
//   transform: translate(-10%, -7%);
//   z-index: 1000;
//   list-style: none;
// `
const List = styled.div`
  font-weight: bold;
  margin: 10%;
`

export default MenuModal
