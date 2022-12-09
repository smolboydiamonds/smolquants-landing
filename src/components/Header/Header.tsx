import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Lexend Deca', sans-serif;
  justify-content: space-between;
  margin: 48px 48px 0;
  max-width: 1600px;
`

const CornerContainer = styled.div`
  display: flex;
  width: 200px;
`

const LogoPlaceholder = styled.div`
  font-size: 30px;
  font-weight: 700;
  font-family: 'Noto Sans JP', sans-serif;
  letter-spacing: 3px;
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

export default function Header() {
  return (
    <HeaderContainer>
      <CornerContainer>
        <LogoPlaceholder>ODIS</LogoPlaceholder>
      </CornerContainer>
      <NavigationPanel>
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
      </NavigationPanel>
      <CornerContainer>
        <CTAButton>Connect // Build with us</CTAButton>
      </CornerContainer>
    </HeaderContainer>
  )
}
