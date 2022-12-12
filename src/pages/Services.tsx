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

const Text = `Focus on building your product and hiring technical talent — our team will serve as an extension of your core team with business development and partnership support.
Warm introductions to ecosystem and protocol partners. No more having to send cold messages and getting ghosted — we are, at most, 1 degree of separation form anyone in the space.
We will attend conferences on your behalf to promote your product.
Develop a GTM strategy that we will initially help you execute on and provide mentorship/guidance to future BD and Partnerships hires.`

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
        <Accordion accordionText={'Business Development & Partnerships'}>{Text} </Accordion>
      </SectionContainer>
    </PageWrapper>
  )
}

export default Services
