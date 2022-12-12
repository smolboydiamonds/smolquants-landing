import React from 'react'
import styled from 'styled-components'
import {SectionContainer, SectionTitle, SectionParagraph} from '../components/Section/Section'

const PageWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
  flex: 1;
`

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
`

const ProfileIcon = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 3px solid #16c0f5;
`

const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
`

const Name = styled.div``

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Expertise = styled.div``

interface UserProfileProps {
  name: string
  twitter_handle?: string
  github_handle?: string
  medium_handle?: string
}

const SpecificSocialMedia = styled.div`
  display: flex;
  flex-direction: row;
`

const SocialMediaName = styled.div`
  font-weight: bold;
`

const ClickableUserHandle = styled.a``

const UserSocialMedia = () => {
  return (
    <SocialMediaContainer>
      <SpecificSocialMedia>
        <SocialMediaName>twitter: </SocialMediaName>
        <ClickableUserHandle href=""></ClickableUserHandle>
      </SpecificSocialMedia>
      <SpecificSocialMedia>
        <SocialMediaName>github: </SocialMediaName>
        <ClickableUserHandle href=""></ClickableUserHandle>
      </SpecificSocialMedia>
      <SpecificSocialMedia>
        <SocialMediaName>medium: </SocialMediaName>
        <ClickableUserHandle href=""></ClickableUserHandle>
      </SpecificSocialMedia>
    </SocialMediaContainer>
  )
}

const UserProfile = ({name, twitter_handle, github_handle, medium_handle}: UserProfileProps) => {
  return (
    <ProfileWrapper>
      <ProfileIcon></ProfileIcon>
      <ProfileDescription>
        <Name>{name}</Name>
        <UserSocialMedia />
        <Expertise></Expertise>
      </ProfileDescription>
    </ProfileWrapper>
  )
}

function About() {
  return (
    <PageWrapper>
      <SectionContainer>
        <SectionTitle text="About"></SectionTitle>
        <SectionParagraph>
          Odis is a collective of crypto-native developers, product managers, investors, and
          community experts with past experiences working in both the large scale web2 software
          industry as well as the web3 space. We are a founder-first firm that specializes in
          helping you scale up your protocol to the next level by providing you engineering,
          product, and community resources to help you gain wider mainstream adoption.
        </SectionParagraph>
        <SectionParagraph>
          The amount of equity and/or tokens taken by other accelerators is disproportionately high
          compared to the value they provide, negatively impacting the cap table and impairing
          possible follow-on funding due to skewed tokenomics. After going through the long
          onboarding process, accelerators throw companies into cohorts with a holistic approach,
          which is an inefficient use of time and resources for founders.
        </SectionParagraph>
        <SectionParagraph>
          We offer more founder-friendly terms than traditional accelerators and advisory services
          while still aligning incentives for both parties. The onboarding process is less than two
          weeks and a bespoke advisory program is developed for each client. Our core team has been
          on both sides of the table and has the expertise to steer any Web3 startup in the right
          direction.
        </SectionParagraph>
      </SectionContainer>
    </PageWrapper>
  )
}

export default About
