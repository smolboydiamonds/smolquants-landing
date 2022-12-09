import styled from 'styled-components'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  margin: 48px;
  justify-content: space-between;
`

const Copyright = styled.div`
  font-size: 12px;
  margin-right: auto;
  font-family: 'Lexend Deca', sans-serif;
  font-weight: 600;
`

const SocialMediaContainer = styled.div``

function Footer() {
  return (
    <FooterContainer>
      <Copyright>©2022 Odis. All Rights Reserved.</Copyright>
      <SocialMediaContainer></SocialMediaContainer>
    </FooterContainer>
  )
}

export default Footer
