import styled from 'styled-components'
import eightbit_bg from '../assets/images/laptop-sunset-background.gif'

const PageWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
  flex: 1;
`

export const PlaceholderContainer = styled.div`
  height: 300px;
  width: 300px;
  display: flex;
  margin: 100px auto auto;
`

export const PlaceholderText = styled.div`
  font-family: 'Lexend Deca', sans-serif;
  font-size: 20px;
  color: white;
  text-align: center;
`

const EightBitImage = styled.div<{src?: string}>`
  background: url(${({src}) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 300px;
  width: 300px;
`

function Clients() {
  return (
    <PageWrapper>
      <PlaceholderContainer>
        <EightBitImage src={eightbit_bg}>
          <PlaceholderText>coming soon</PlaceholderText>
        </EightBitImage>
      </PlaceholderContainer>
    </PageWrapper>
  )
}

export default Clients
