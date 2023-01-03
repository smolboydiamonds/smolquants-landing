import {useState, useEffect} from 'react'
import styled from 'styled-components'
import {NavLink, useNavigate, useLocation} from 'react-router-dom'
import {slide as SlideMenu} from 'react-burger-menu'
import {StyledCTAButton} from '../Button/Button'

import './SlideMenu.css'

const HeaderContainer = styled.div`
  font-family: 'Lexend Deca', sans-serif;
  display: flex;
  flex-direction: row;
  margin: 32px 32px 0;
  justify-content: space-between;

  ${({theme}) => theme.mediaWidth.minSmall`
      margin: 48px 48px 0;
  `}}
`

const CornerContainer = styled.div`
  display: flex;
  width: 225px;
  border-radius: 64px;
`

const RightCorner = styled(CornerContainer)`
  margin-left: auto;
`

const LeftCorner = styled(CornerContainer)`
  margin-right: auto;
`

const DesktopView = styled.div`
  display: none;

  ${({theme}) => theme.mediaWidth.minSmall`
    display: flex;
    width: 100%;
`}}
`

const MobileView = styled.div`
  display: flex;
  width: 100%;

  ${({theme}) => theme.mediaWidth.minSmall`
    display: none;
`}}
`

const BrandLogo = styled.div`
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 3px;
  cursor: pointer;
`

const NavigationPanel = styled.div`
  display: flex;
  flex-direction: row;
`

export const CTAButton = styled.button`
  font-family: 'Lexend Deca', sans-serif;
  font-weight: bold;
  padding: 16px;
  color: #fff;
  background: #16c0f5;
  border-radius: 64px;
  border-style: none;
  cursor: pointer;
`

enum NavigationRoutes {
  ABOUT = '/about',
  SERVICES = '/services',
  MEMBERS = '/members',
  CLIENTS = '/clients',
}

enum NavigationText {
  ABOUT = 'About',
  SERVICES = 'Services',
  MEMBERS = 'Members',
  CLIENTS = 'Clients',
}

const activeStyle = {
  textDecoration: 'none',
  color: '#16C0F5',
  margin: 'auto 9px',
}

const inactiveStyle = {
  textDecoration: 'none',
  color: '#ffffff',
  margin: 'auto 9px',
}

function Routes() {
  return (
    <>
      <NavLink
        to={NavigationRoutes.ABOUT}
        style={({isActive}) => (isActive ? activeStyle : inactiveStyle)}
      >
        {NavigationText.ABOUT}
      </NavLink>
      <NavLink
        to={NavigationRoutes.SERVICES}
        style={({isActive}) => (isActive ? activeStyle : inactiveStyle)}
      >
        {NavigationText.SERVICES}
      </NavLink>
      <NavLink
        to={NavigationRoutes.MEMBERS}
        style={({isActive}) => (isActive ? activeStyle : inactiveStyle)}
      >
        {NavigationText.MEMBERS}
      </NavLink>
      <NavLink
        to={NavigationRoutes.CLIENTS}
        style={({isActive}) => (isActive ? activeStyle : inactiveStyle)}
      >
        {NavigationText.CLIENTS}
      </NavLink>
    </>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const redirectToHome: () => void = () => navigate('/')

  // close menu when at new route
  let location = useLocation().pathname

  useEffect(() => {
    if (open) {
      setOpen(open => false)
    }
  }, [location])

  function handleOnOpen(): void {
    setOpen(open => true)
  }

  function handleOnClose(): void {
    setOpen(open => false)
  }

  return (
    <HeaderContainer>
      <DesktopView>
        <LeftCorner>
          <BrandLogo onClick={redirectToHome}>ODIS</BrandLogo>
        </LeftCorner>
        <NavigationPanel>{Routes()}</NavigationPanel>
        <RightCorner>
          <StyledCTAButton>Connect // Build With Us</StyledCTAButton>
        </RightCorner>
      </DesktopView>

      <MobileView>
        <LeftCorner>
          <BrandLogo onClick={redirectToHome}>ODIS</BrandLogo>
        </LeftCorner>
        <SlideMenu isOpen={open} onOpen={handleOnOpen} onClose={handleOnClose} right>
          {Routes()}
        </SlideMenu>
      </MobileView>
    </HeaderContainer>
  )
}
