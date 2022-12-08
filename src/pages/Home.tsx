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

function Home() {
  return (
    <>
      <Header>
        <LogoPlaceholder>ODIS</LogoPlaceholder>
        <NavigationPanel>
          <NavigationRoute></NavigationRoute>
          <NavigationRoute></NavigationRoute>
          <NavigationRoute></NavigationRoute>
          <NavigationRoute></NavigationRoute>
        </NavigationPanel>
        <CTAButton>Connect // Build with us</CTAButton>
      </Header>
    </>
  )
}

export default Home
