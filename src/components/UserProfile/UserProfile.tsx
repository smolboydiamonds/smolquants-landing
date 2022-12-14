import styled from 'styled-components'

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  border-radius: 64px;
  padding: 20px;
  margin: 24px 0;
  font-family: 'Noto San JP', sans-serif;
  font-size: 14px;
  border: 2px solid #16c0f5;
  
  ${({theme}) => theme.mediaWidth.minSmall`
    font-size: 16px;  
    padding: 16px 48px;
  `}}
`

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const ProfileIcon = styled.div`
  min-height: 100px;
  max-height: 100px;
  min-width: 100px;
  max-height: 100px;
  border-radius: 50%;
  border: 3px solid #16c0f5;
  margin-right: 16px;
`

const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4px;
  margin-bottom: 5px;

  ${({theme}) => theme.mediaWidth.minSmall`
    margin-top: 8px;
    margin-bottom: 10px;
  `}}
`

const Name = styled.div`
  color: black;
`

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: black;
`

const Expertise = styled.div`
  color: black;
  margin-top: auto;
  font-size: 12px;

  ${({theme}) => theme.mediaWidth.minSmall`
    font-size: 14px;
  `}}
`

const SpecificSocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 8px;
`

const SocialMediaName = styled.div`
  font-weight: bold;
`

const ClickableUserHandle = styled.a`
  text-decoration: none;
  font-weight: normal;
  color: black;
`

interface UserSocialMediaProps {
  twitter_handle?: string
  github_handle?: string
  medium_handle?: string
}

enum SocialMediaPrefixes {
  TWITTER = 'https://www.twitter.com/',
  GITHUB = 'https://www.github.com/',
  MEDIUM = 'https://www.medium.com/',
}

const UserSocialMedia = ({twitter_handle, github_handle, medium_handle}: UserSocialMediaProps) => {
  const TwitterProfileLink = twitter_handle
    ? SocialMediaPrefixes.TWITTER + twitter_handle
    : undefined
  const GithubProfileLink = github_handle ? SocialMediaPrefixes.GITHUB + github_handle : undefined
  const MediumProfileLink = medium_handle ? SocialMediaPrefixes.MEDIUM + medium_handle : undefined

  return (
    <SocialMediaContainer>
      {TwitterProfileLink && (
        <SpecificSocialMedia>
          <SocialMediaName>twitter:&nbsp;</SocialMediaName>
          <ClickableUserHandle href={TwitterProfileLink} target="_blank" rel="noopener noreferrer">
            @{twitter_handle}
          </ClickableUserHandle>
        </SpecificSocialMedia>
      )}
      {GithubProfileLink && (
        <SpecificSocialMedia>
          <SocialMediaName>github:&nbsp;</SocialMediaName>
          <ClickableUserHandle href={GithubProfileLink} target="_blank" rel="noopener noreferrer">
            @{github_handle}
          </ClickableUserHandle>
        </SpecificSocialMedia>
      )}
      {MediumProfileLink && (
        <SpecificSocialMedia>
          <SocialMediaName>medium:&nbsp;</SocialMediaName>
          <ClickableUserHandle href={MediumProfileLink} target="_blank" rel="noopener noreferrer">
            @{medium_handle}
          </ClickableUserHandle>
        </SpecificSocialMedia>
      )}
    </SocialMediaContainer>
  )
}

export interface UserProfileProps extends UserSocialMediaProps {
  name: string
  expertise: string
  twitter_handle?: string
  github_handle?: string
  medium_handle?: string
}

export const UserProfile = ({
  name,
  expertise,
  twitter_handle,
  github_handle,
  medium_handle,
}: UserProfileProps) => {
  return (
    <ProfileWrapper>
      <InnerWrapper>
        <ProfileIcon></ProfileIcon>
        <ProfileDescription>
          <Name>{name}</Name>
          <UserSocialMedia
            twitter_handle={twitter_handle}
            github_handle={github_handle}
            medium_handle={medium_handle}
          />
          <Expertise>Expertise: {expertise} </Expertise>
        </ProfileDescription>
      </InnerWrapper>
    </ProfileWrapper>
  )
}
