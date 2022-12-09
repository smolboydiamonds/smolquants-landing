import React from 'react'
import styled from 'styled-components'
import {Hero} from '../components/Hero/Hero'

const PageWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
  flex: 1;
`

function Home() {
  return (
    <PageWrapper>
      <Hero />
    </PageWrapper>
  )
}

export default Home
