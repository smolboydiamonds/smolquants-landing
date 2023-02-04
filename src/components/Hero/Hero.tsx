import styled from 'styled-components'
import {StyledCTAButton} from '../Button/Button'
import {SMOLQUANTS_LINKS} from '../../constants/links'
import eightbit_bg from '../../assets/images/laptop-sunset-background.gif'
import {Cube} from '../Cube/Cube'

const Container = styled.div<{src?: string}>`
  display: flex;
  flex-direction: column;
  max-width: 850px;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  text-align: center;
  margin: auto;
  background: url(${({src}) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  ${({theme}) => theme.mediaWidth.minSmall`
    margin: 13vh auto auto;
`}}
`

const Header = styled.div`
  font-size: 64px;
  letter-spacing: 5px;
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

const HeroButtonWrapper = styled.div`
  width: 250px;
  border-radius: 64px;
  margin: 20px auto;
`

enum HeroText {
  HEADER = 'SmolQuants',
  DESCRIPTION = `Pre-Launch Economic Audits for DeFi Protocols, specializing in DEXs`,
}

export const Hero = () => {
  return (
    <Container>
      <Header>{HeroText.HEADER}</Header>
      <Subheader>web3 security audits</Subheader>
      <Line />
      <Description>{HeroText.DESCRIPTION}</Description>
      <HeroButtonWrapper>
        <StyledCTAButton href={SMOLQUANTS_LINKS.AIRTABLE}>Request Audit</StyledCTAButton>
      </HeroButtonWrapper>
      {/* <EightBitImage src={eightbit_bg} /> */}
      <Cube />
    </Container>
  )
}
