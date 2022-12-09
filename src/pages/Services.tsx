import React from 'react'
import styled from 'styled-components'
import {SectionContainer, SectionTitle, SectionParagraph} from '../components/Section/Section'
const PageWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
  flex: 1;
`

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
      </SectionContainer>
    </PageWrapper>
  )
}

export default Services
