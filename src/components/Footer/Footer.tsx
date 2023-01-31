import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import {Icon} from '../Icon/Icon'
import {Twitter, GitHub} from 'react-feather'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  margin: 32px;
  justify-content: space-between;

  ${({theme}) => theme.mediaWidth.minSmall`
    margin: 48px
`}}
`

const Copyright = styled.div`
  font-size: 12px;
  margin-right: auto;
  font-family: 'Lexend Deca', sans-serif;
  font-weight: 600;
  line-height: 2;
`

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const ExternalLink = styled.a`
  text-decoration: none;
  color: white;

  &:hover {
    color: grey;
  }
`

enum SocialMediaLinks {
  TWITTER = 'https://twitter.com',
  GITHUB = 'https://github.com/smolquants',
}

function Footer() {
  return (
    <FooterContainer>
      <Copyright>©2022 SmolQuants. All Rights Reserved.</Copyright>
      <SocialMediaContainer>
        <Icon size={24} clickable={true} margin="auto 8px auto auto" color="white">
          <ExternalLink href={SocialMediaLinks.TWITTER} target="_blank" rel="noopener noreferrer">
            <Twitter height={24} width={24} />
          </ExternalLink>
        </Icon>
        <Icon size={24} clickable={true} margin={'auto 0px auto 8px'} color="white">
          <ExternalLink href={SocialMediaLinks.GITHUB} target="_blank" rel="noopener noreferrer">
            <GitHub height={24} width={24} />
          </ExternalLink>
        </Icon>
      </SocialMediaContainer>
    </FooterContainer>
  )
}

export default Footer
