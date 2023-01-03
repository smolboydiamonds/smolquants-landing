import styled from 'styled-components'
import {PlaceholderText, PlaceholderContainer} from './Members'

const PageWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
  flex: 1;
`

function Clients() {
  return (
    <PageWrapper>
      <PlaceholderContainer>
        <PlaceholderText>coming soon</PlaceholderText>
      </PlaceholderContainer>
    </PageWrapper>
  )
}

export default Clients
