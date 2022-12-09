import React from 'react'
import styled from 'styled-components'
import {CTAButton} from '../components/Header/Header'

const PageWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
  flex: 1;
`
const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 850px;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  text-align: center;
  margin: 100px auto auto;
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
  font-weight: 500;
`

const HeroButton = styled(CTAButton)`
  width: 225px;
  margin: 18px auto;
`

function Home() {
  return (
    <PageWrapper>
      <HeroContent>
        <HeroHeader>O D I S</HeroHeader>
        <HeroSubheader>a web3 collective</HeroSubheader>
        <Line />
        <HeroDescription>
          ODIS is an Advisory as a Service (AaaS) collective for Web3 companies and DAO’s. Through
          our full suite of service offerings, we help founders bootstrap their community and
          operations to scale on their own.
        </HeroDescription>
        <HeroButton>Connect // Build with us</HeroButton>
      </HeroContent>
    </PageWrapper>
  )
}

export default Home
