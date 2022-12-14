import styled from 'styled-components'

const PageWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
  flex: 1;
`

export const PlaceholderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`

export const PlaceholderText = styled.div`
  margin: 33vh auto auto;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 20px;
  color: white;
`

function Members() {
  return (
    <PageWrapper>
      <PlaceholderContainer>
        <PlaceholderText>coming soon</PlaceholderText>
      </PlaceholderContainer>
    </PageWrapper>
  )
}

export default Members
