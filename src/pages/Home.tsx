import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

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

function Home() {
  return (
    <>
      <Header>
        <LogoPlaceholder>ODIS</LogoPlaceholder>
        <NavigationPanel>
          <NavLink to={NavigationRoutes.ABOUT}> {NavigationText.ABOUT} </NavLink>
          <NavLink to={NavigationRoutes.SERVICES}> {NavigationText.SERVICES} </NavLink>
          <NavLink to={NavigationRoutes.MEMBERS}> {NavigationText.MEMBERS} </NavLink>
          <NavLink to={NavigationRoutes.CLIENTS}> {NavigationText.CLIENTS} </NavLink>
        </NavigationPanel>
        <CTAButton>Connect // Build with us</CTAButton>
      </Header>
    </>
  )
}

export default Home
