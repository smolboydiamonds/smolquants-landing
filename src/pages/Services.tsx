import React from 'react'
import styled from 'styled-components'
import {Accordion} from '../components/Accordion/Accordion'
import {SectionContainer, SectionTitle, SectionParagraph} from '../components/Section/Section'

const PageWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
  flex: 1;
`

const BulletPointContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  font-family: 'Noto Sans JP', sans-serif;
  padding-right: 30px;
`

const Bullet = styled.div`
  width: 8px;
  margin-right: 8px;
`

const Point = styled.div`
  font-size: 16px;
`

interface BulletPointProps {
  children?: React.ReactNode | string
}

const BulletPoint = ({children}: BulletPointProps) => {
  return (
    <BulletPointContainer>
      <Bullet>•</Bullet>
      <Point>{children}</Point>
    </BulletPointContainer>
  )
}

function Services() {
  return (
    <PageWrapper>
      <SectionContainer>
        <SectionTitle text="Services" />
        <SectionParagraph>
          ODIS is an Advisory as a Service (AaaS) collective for Web3 companies and DAO’s. Through
          our full suite of service offerings, we help founders bootstrap their community and
          operations to scale on their own.
        </SectionParagraph>
        <SectionParagraph>
          Our team consists of members with strong technical and non-technical backgrounds and
          extensive experience at some of the top Web3 DAOs and companies such as Redacted Cartel,
          Steel Perlot, Outlier Ventures, Covalent, YGG, GCR, New Order, 8it, and Krause House.
        </SectionParagraph>
        <SectionParagraph>Services Include:</SectionParagraph>

        <Accordion accordionText={'Business Development & Partnerships'}>
          <SectionParagraph>
            Focus on building your product and hiring technical talent — our team will serve as an
            extension of your core team with business development and partnership support.
          </SectionParagraph>
          <BulletPoint>
            Warm introductions to ecosystem and protocol partners. No more having to send cold
            messages and getting ghosted — we are, at most, 1 degree of separation form anyone in
            the space.
          </BulletPoint>
          <BulletPoint>
            We will attend conferences on your behalf to promote your product.
          </BulletPoint>
          <BulletPoint>
            Develop a GTM strategy that we will initially help you execute on and provide
            mentorship/guidance to future BD and Partnerships hires.
          </BulletPoint>
        </Accordion>

        <Accordion accordionText={'Fundraising Strategy'}>
          <SectionParagraph>
            As builders and investors that have sat through 1,000+ pitches, we can help you
            strategize and position your team for the best chances at securing capital.
          </SectionParagraph>
          <BulletPoint>
            Direct introductions to the team’s vast network of 100+ VC’s, Angels, and Market Markers
            (i.e., a16z, GoldenTree, Dragonfly, Polychain, Framework, Jump, GSR, Fenbushi, Steel
            Perlot, Lightspeed and more.
          </BulletPoint>
          <BulletPoint>Pitch deck structuring, review, and refinement.</BulletPoint>
          <BulletPoint>Pitch coaching.</BulletPoint>
        </Accordion>

        <Accordion accordionText={'Governance Advisory'}>
          <SectionParagraph>
            Focus on building your product and hiring technical talent — our team will serve as an
            extension of your core team with business development and partnership support.
          </SectionParagraph>
          <BulletPoint>
            Warm introductions to ecosystem and protocol partners. No more having to send cold
            messages and getting ghosted — we are, at most, 1 degree of separation form anyone in
            the space.
          </BulletPoint>
          <BulletPoint>
            We will attend conferences on your behalf to promote your product.
          </BulletPoint>
          <BulletPoint>
            Develop a GTM strategy that we will initially help you execute on and provide
            mentorship/guidance to future BD and Partnerships hires.
          </BulletPoint>
        </Accordion>
      </SectionContainer>
    </PageWrapper>
  )
}

export default Services
