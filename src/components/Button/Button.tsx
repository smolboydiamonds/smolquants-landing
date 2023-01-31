import styled from 'styled-components'
import './Button.css'

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`
interface StyledCTAButtonProps {
  children: React.ReactNode | string
  href: string
}

export const StyledCTAButton = ({children, href}: StyledCTAButtonProps) => {
  return (
    <StyledLink href={href} target="_blank" rel="noopener noreferrer">
      <button className="cta-button glow-on-hover">{children}</button>
    </StyledLink>
  )
}
