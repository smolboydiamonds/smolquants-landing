import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {NONAME} from 'dns'

const PageWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
`

const LogoPlaceholder = styled.div``

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
