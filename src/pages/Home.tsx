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

function Home() {
  return (
    <PageWrapper>
      <Header />
      <Footer>
        <Copyright>©2022 Odis. All Rights Reserved.</Copyright>
        <SocialMediaContainer></SocialMediaContainer>
      </Footer>
    </PageWrapper>
  )
}

export default Home
