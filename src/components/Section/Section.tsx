import styled from 'styled-components'

export const SectionContainer = styled.div`
  max-width: 850px;
  border-top: 1px solid #fff;
  margin: 50px 20px auto;

  ${({theme}) => theme.mediaWidth.minSmall`
  margin: 70px auto auto;
`}}
`

const Title = styled.div`
  font-size: 24px;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  margin: 16px 0;
`

interface SectionTitleProps {
  text: string
}

export const SectionTitle = ({text}: SectionTitleProps) => {
  return <Title>{text}</Title>
}

export const SectionParagraph = styled.div`
  font-size: 16px;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: regular;
  margin-bottom: 16px;
`
