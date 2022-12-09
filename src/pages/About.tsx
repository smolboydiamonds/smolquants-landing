import React from 'react'
import styled from 'styled-components'

const PageWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
  flex: 1;
`

const SectionContainer = styled.div`
  max-width: 850px;
  border-top: 1px solid #fff;
  margin: 70px auto auto;
`

const Title = styled.div`
  font-size: 24px;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  margin: 16px 0;
`

interface SectionTitleProps {
  text: string
}

const SectionTitle = ({text}: SectionTitleProps) => {
  return <Title>// {text}</Title>
}

function About() {
  return (
    <PageWrapper>
      <SectionContainer>
        <SectionTitle text="About"></SectionTitle>
      </SectionContainer>
    </PageWrapper>
  )
}

export default About
