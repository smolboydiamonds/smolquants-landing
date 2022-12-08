import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
  display: flex;
  flex-direction: row;
`

const LogoPlaceholder = styled.div``

const NavigationPanel = styled.div`
  display: flex;
  flex-direction: row;
`

const NavigationRoute = styled.div``

const CTAButton = styled.button``

enum HeaderNavigationRoutes {
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
          <NavigationRoute>{HeaderNavigationRoutes.ABOUT}</NavigationRoute>
          <NavigationRoute>{HeaderNavigationRoutes.SERVICES}</NavigationRoute>
          <NavigationRoute>{HeaderNavigationRoutes.MEMBERS}</NavigationRoute>
          <NavigationRoute>{HeaderNavigationRoutes.CLIENTS}</NavigationRoute>
        </NavigationPanel>
        <CTAButton>Connect // Build with us</CTAButton>
      </Header>
    </>
  )
}

export default Home
