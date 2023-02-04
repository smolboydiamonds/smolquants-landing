import React from 'react'
import styled from 'styled-components'
import {UserProfile} from '../components/UserProfile/UserProfile'
import {SectionContainer, SectionTitle, SectionParagraph} from '../components/Section/Section'
import {CoreTeamUsers} from '../constants/core-team'

const PageWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
  flex: 1;
  padding: 45px 0;
`

function About() {
  return (
    <PageWrapper>
      <SectionContainer border={true}>
        <SectionTitle text="About" />
        <SectionParagraph>
          SmolQuants is a collective of DeFi Risk experts. We provide economic risk consulting &
          auditing services to various DeFi protocols. Beyond audit and advisory services, we also
          build open-source research tools that will support builders in making DeFi safer for all
          participants.
        </SectionParagraph>
        <SectionParagraph>
          We are happy to work with most DeFi protocols - our collective specializes in AMMs,
          derivative DEXs, and anything that makes use of onchain oracles.
        </SectionParagraph>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle text="Mission" />
        <SectionParagraph>
          SmolQuants aims to make DeFi a safer place by making economic risk audits a norm for DeFi
          Protocols. For bootstrapped builders that don't have funds for a full-scale audit,
          SmolQuants provides open-source tooling that builders can leverage to build more robust
          DeFi protocols.
        </SectionParagraph>
        <SectionParagraph>
          We are happy to work with most DeFi protocols - our collective specializes in AMMs,
          derivative DEXs, and anything that makes use of onchain oracles.
        </SectionParagraph>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle text="Values" />
        <SectionParagraph>
          We are a professional collective with a flat hierarchy that aims to act collaboratively
          and in good faith.
        </SectionParagraph>
        <SectionParagraph>
          Our three main values are <b>transparency</b>, <b>willingness to learn</b>, and{' '}
          <b>careful diligence</b>.
        </SectionParagraph>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle text="Vision" />
        <SectionParagraph>
          We partner with a small set of innovative DeFi projects to optimize their existing
          mechanisms and raise the bar for mathematical and economic rigor.
        </SectionParagraph>
      </SectionContainer>
    </PageWrapper>
  )
}

export default About
