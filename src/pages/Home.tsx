import React from 'react'
import styled from 'styled-components'
import {Hero} from '../components/Hero/Hero'

const PageWrapper = styled.div`
  max-width: 1600px;
  margin: auto;
  height: 100%;
  padding: 20px;

  ${({theme}) => theme.mediaWidth.minSmall`
     margin: 0 auto;
     flex: 1;
`}}
`

function Home() {
  return (
    <PageWrapper>
      <Hero />
    </PageWrapper>
  )
}

export default Home
