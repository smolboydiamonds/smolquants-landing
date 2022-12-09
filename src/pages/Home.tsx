import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import Header from '../components/Header/Header'

const PageWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
`

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  margin: 48px;
  justify-content: space-between;
`

const Copyright = styled.div`
  font-size: 12px;
  margin-right: auto;
  font-family: 'Lexend-Deca', sans-serif;
  font-weight: 600;
`

const SocialMediaContainer = styled.div``

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 850px;
  font-family: 'Noto-Sans-JP', sans-serif;
  font-weight: bold;
  text-align: center;
  margin: auto;
`

const HeroHeader = styled.div`
  font-size: 64px;
`

const HeroSubheader = styled.div`
  font-size: 24px;
`

const Line = styled.div`
  height: 1px;
  width: auto;
  background: #fff;
  margin: 18px;
`

const HeroDescription = styled.div`
  font-size: 16px;
`

const CTAButton = styled.button`
  width: 225px;
  margin: 18px auto;
`

function Home() {
  return (
    <PageWrapper>
      <Header />
      <HeroContent>
        <HeroHeader>O D I S</HeroHeader>
        <HeroSubheader>a web3 collective</HeroSubheader>
        <Line />
        <HeroDescription>
          ODIS is an Advisory as a Service (AaaS) collective for Web3 companies and DAO’s. Through
          our full suite of service offerings, we help founders bootstrap their community and
          operations to scale on their own.
        </HeroDescription>
        <CTAButton>Connect // Build with us</CTAButton>
      </HeroContent>
      <Footer>
        <Copyright>©2022 Odis. All Rights Reserved.</Copyright>
        <SocialMediaContainer></SocialMediaContainer>
      </Footer>
    </PageWrapper>
  )
}

export default Home
