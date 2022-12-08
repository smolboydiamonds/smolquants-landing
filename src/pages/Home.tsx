import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const PageWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Lexend-Deca', sans-serif;
  font-weight: 700;
  justify-content: space-between;
  margin: 48px;
`

const LogoPlaceholder = styled.div`
  font-size: 30px;
  font-family: 'Noto-Sans-JP', sans-serif;
  letter-spacing: 3px;
`

const NavigationPanel = styled.div`
  display: flex;
  flex-direction: row;
`

const CTAButton = styled.button``

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
}

const inactiveStyle = {
  textDecoration: 'none',
  color: '#ffffff',
}

function Home() {
  return (
    <PageWrapper>
      <Header>
        <LogoPlaceholder>ODIS</LogoPlaceholder>
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
        <CTAButton>Connect // Build with us</CTAButton>
      </Header>
    </PageWrapper>
  )
}

export default Home
