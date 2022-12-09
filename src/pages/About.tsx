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

const Paragraph = styled.div`
  font-size: 16px;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: regular;
  margin-top: 16px;
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
        <Paragraph>
          Odis is a collective of crypto-native developers, product managers, investors, and
          community experts with past experiences working in both the large scale web2 software
          industry as well as the web3 space. We are a founder-first firm that specializes in
          helping you scale up your protocol to the next level by providing you engineering,
          product, and community resources to help you gain wider mainstream adoption.
        </Paragraph>
        <Paragraph>
          The amount of equity and/or tokens taken by other accelerators is disproportionately high
          compared to the value they provide, negatively impacting the cap table and impairing
          possible follow-on funding due to skewed tokenomics. After going through the long
          onboarding process, accelerators throw companies into cohorts with a holistic approach,
          which is an inefficient use of time and resources for founders.
        </Paragraph>
        <Paragraph>
          We offer more founder-friendly terms than traditional accelerators and advisory services
          while still aligning incentives for both parties. The onboarding process is less than two
          weeks and a bespoke advisory program is developed for each client. Our core team has been
          on both sides of the table and has the expertise to steer any Web3 startup in the right
          direction.
        </Paragraph>
      </SectionContainer>
    </PageWrapper>
  )
}

export default About
