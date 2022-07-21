import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineMenu } from 'react-icons/ai'
import { theme } from 'styles/theme'
import MenuModal from './MenuModal'

const Nav = () => {
  const [menuToggle, setMenuToggle] = useState<boolean>(true)

  const menuHandle = (e: React.MouseEvent<SVGAElement>) => {
    setMenuToggle(!menuToggle)
    e.preventDefault()
    console.log(menuToggle)
  }
  return (
    <NavPage>
      <NavBox>
        <NavLogo>Wemory</NavLogo>
        <MenuBox>
          <Login>로그인</Login>
          <Logout>로그아웃</Logout>
          <Menu onClick={menuHandle}></Menu>
        </MenuBox>
      </NavBox>
      {menuToggle ? <MenuModal /> : null}
    </NavPage>
  )
}

const NavPage = styled.nav`
  width: 100%;
  ${({ theme }) => theme.flexMixIn('center', 'center')}
`
const NavBox = styled.div`
  width: 90%;
  ${({ theme }) => theme.flexMixIn('space-between', 'center')}
  border-bottom: 3px solid gray;
`
const NavLogo = styled.h1``

const MenuBox = styled.div`
  width: 20%;
  ${({ theme }) => theme.flexMixIn('space-around', 'center')}
`
const Login = styled.div`
  font-weight: bold;
`
const Logout = styled(Login)``
const Menu = styled(AiOutlineMenu)`
  font-size: 28px;
`
export default Nav
