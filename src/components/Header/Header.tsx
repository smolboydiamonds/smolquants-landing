import styled from 'styled-components'
import {NavLink, useNavigate} from 'react-router-dom'
import {slide as SlideMenu} from 'react-burger-menu'
import './SlideMenu.css'

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Lexend Deca', sans-serif;
  justify-content: space-between;
  margin: 32px 32px 0;

  ${({theme}) => theme.mediaWidth.minSmall`
      margin: 48px 48px 0;
  `}}
`

const CornerContainer = styled.div`
  display: flex;
  width: 200px;
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
  font-size: 30px;
  font-weight: 700;
  font-family: 'Noto Sans JP', sans-serif;
  letter-spacing: 3px;
  cursor: pointer;
`

const NavigationPanel = styled.div`
  display: flex;
  flex-direction: row;
`

export const CTAButton = styled.button`
  background: #16c0f5;
  border-radius: 16px;
  color: #fff;
  border-style: none;
  font-weight: bold;
  font-family: 'Lexend Deca', sans-serif;
  padding: 8px 16px;
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
  const navigate = useNavigate()
  const redirectToHome: () => void = () => navigate('/')

  return (
    <HeaderContainer>
      <DesktopView>
        <LeftCorner>
          <BrandLogo onClick={redirectToHome}>ODIS</BrandLogo>
        </LeftCorner>
        <NavigationPanel>{Routes()}</NavigationPanel>
        <RightCorner>
          <CTAButton>Connect // Build with us</CTAButton>
        </RightCorner>
      </DesktopView>

      <MobileView>
        <LeftCorner>
          <BrandLogo onClick={redirectToHome}>ODIS</BrandLogo>
        </LeftCorner>
        <SlideMenu right>{Routes()}</SlideMenu>
      </MobileView>
    </HeaderContainer>
  )
}
