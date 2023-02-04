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

const NumberedPointContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  font-family: 'Noto Sans JP', sans-serif;
  padding-right: 30px;
  margin-left: 11px;
`

const Number = styled.div`
  width: 8px;
  margin-right: 12px;
`

const Point = styled.div`
  font-size: 16px;
`

interface BulletPointProps {
  number: number
  children?: React.ReactNode | string
}

const NumberedPoint = ({number, children}: BulletPointProps) => {
  return (
    <NumberedPointContainer>
      <Number>{number}.</Number>
      <Point>{children}</Point>
    </NumberedPointContainer>
  )
}

function Services() {
  return (
    <PageWrapper>
      <SectionContainer>
        <SectionTitle text="Services" />
        <SectionParagraph>Generally, we offer economic risk audits in three ways:</SectionParagraph>
        <NumberedPoint number={1}>
          <b>One-off</b>: Comprehensive economic risk review of major protocol mechanisms (2-4
          weeks)
        </NumberedPoint>
        <NumberedPoint number={2}>
          <b>Retainer</b>: We work with existing clients for proactive risk review & monitoring
          (ongoing)
        </NumberedPoint>
        <NumberedPoint number={3}>
          <b>Lite Audit</b>: We offer on-demand risk reviews on specific mechanisms and produce
          research to optimize specific aspects of your protocol (1-2 weeks)
        </NumberedPoint>
      </SectionContainer>
    </PageWrapper>
  )
}

export default Services
