import styled from 'styled-components'

export const SectionContainer = styled.div<{border?: boolean; margin?: string}>`
  max-width: 800px;
  border-top: ${({border}) => (border ? `1px solid #fff` : `none`)};
  margin: ${({margin}) => (margin ? margin : `25px 20px auto`)};

  ${({theme}) => theme.mediaWidth.minSmall`
    margin: 50px auto auto;
  `}}
`

const Title = styled.div`
  font-size: 24px;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  margin: 20px 0;

  ${({theme}) => theme.mediaWidth.minSmall`
    margin: 16px 0;
  `}}
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
