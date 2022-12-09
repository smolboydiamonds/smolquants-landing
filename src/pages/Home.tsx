import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import Header from '../components/Header/Header'

const PageWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
`

function Home() {
  return (
    <PageWrapper>
      <Header />
    </PageWrapper>
  )
}

export default Home
