import styled from 'styled-components'
import {StyledCTAButton} from '../Button/Button'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 850px;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  text-align: center;
  margin: auto;

  ${({theme}) => theme.mediaWidth.minSmall`
    margin: 25vh auto auto;
`}}
`

const Header = styled.div`
  font-size: 64px;
`

const Subheader = styled.div`
  font-size: 24px;
`

const Line = styled.div`
  height: 1px;
  width: auto;
  background: #fff;
  margin: 18px 0;
`

const Description = styled.div`
  font-size: 14px;
  font-weight: 500;

  ${({theme}) => theme.mediaWidth.minSmall`
    font-size: 16px;
`}}
`

const Highlight = styled.a`
  color: #16c0f5;
`

const HeroButtonWrapper = styled.div`
  width: 250px;
  margin: 20px auto;
`

enum HeroText {
  HEADER = 'O D I S',
  DESCRIPTION = `ODIS is an Advisory as a Service (AaaS) collective for Web3 companies and DAO’s. Through our
  full suite of service offerings, we help founders bootstrap their community and operations
  to scale on their own.`,
}

export const Hero = () => {
  return (
    <Container>
      <Header>{HeroText.HEADER}</Header>
      <Subheader>
        a web<Highlight>3</Highlight> collective
      </Subheader>
      <Line />
      <Description>{HeroText.DESCRIPTION}</Description>
      <HeroButtonWrapper>
        <StyledCTAButton>Connect // Build With Us</StyledCTAButton>
      </HeroButtonWrapper>
    </Container>
  )
}
