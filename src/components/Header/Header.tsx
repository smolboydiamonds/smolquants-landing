import styled from 'styled-components'
import {NavLink, useNavigate} from 'react-router-dom'
import {slide as SlideMenu} from 'react-burger-menu'
import './SlideMenu.css'

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Lexend Deca', sans-serif;
  justify-content: space-between;
  margin: 48px 48px 0;
`

const CornerContainer = styled.div`
  display: flex;
  width: 200px;
`

const RightCorner = styled(CornerContainer)`
  margin-left: auto;
`

const LeftCorner = styled(CornerContainer)`
  margin-right: auto;
`

const BrandLogo = styled.div`
  font-size: 30px;
  font-weight: 700;
  font-family: 'Noto Sans JP', sans-serif;
  letter-spacing: 3px;
  cursor: pointer;
`

const NavigationPanel = styled.div`
  display: flex;
  flex-direction: row;
`

export const CTAButton = styled.button`
  background: #16c0f5;
  border-radius: 16px;
  color: #fff;
  border-style: none;
  font-weight: bold;
  font-family: 'Lexend Deca', sans-serif;
  padding: 8px 16px;
`

enum NavigationRoutes {
  ABOUT = '/about',
  SERVICES = '/services',
  MEMBERS = '/members',
  CLIENTS = '/clients',
}

enum NavigationText {
  ABOUT = 'About',
  SERVICES = 'Services',
  MEMBERS = 'Members',
  CLIENTS = 'Clients',
}

const activeStyle = {
  textDecoration: 'none',
  color: '#16C0F5',
  margin: 'auto 9px',
}

const inactiveStyle = {
  textDecoration: 'none',
  color: '#ffffff',
  margin: 'auto 9px',
}

const StyledSlideMenu = styled(SlideMenu)`
  @media (min-width: 415px) {
    display: none;
  }
`

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '36px',
  },
  bmBurgerBars: {
    background: '#373a47',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    top: '0px',
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmItem: {
    display: 'inline-block',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
}

export default function Header() {
  const navigate = useNavigate()
  const redirectToHome: () => void = () => navigate('/')

  return (
    <HeaderContainer>
      <StyledSlideMenu styles={styles} right>
        <NavLink
          to={NavigationRoutes.ABOUT}
          style={({isActive}) => (isActive ? activeStyle : inactiveStyle)}
        >
          {NavigationText.ABOUT}
        </NavLink>
      </StyledSlideMenu>
      <LeftCorner>
        <BrandLogo onClick={redirectToHome}>ODIS</BrandLogo>
      </LeftCorner>
      <NavigationPanel>
        <NavLink
          to={NavigationRoutes.ABOUT}
          style={({isActive}) => (isActive ? activeStyle : inactiveStyle)}
        >
          {NavigationText.ABOUT}
        </NavLink>
        <NavLink
          to={NavigationRoutes.SERVICES}
          style={({isActive}) => (isActive ? activeStyle : inactiveStyle)}
        >
          {NavigationText.SERVICES}
        </NavLink>
        <NavLink
          to={NavigationRoutes.MEMBERS}
          style={({isActive}) => (isActive ? activeStyle : inactiveStyle)}
        >
          {NavigationText.MEMBERS}
        </NavLink>
        <NavLink
          to={NavigationRoutes.CLIENTS}
          style={({isActive}) => (isActive ? activeStyle : inactiveStyle)}
        >
          {NavigationText.CLIENTS}
        </NavLink>
      </NavigationPanel>
      <RightCorner>
        <CTAButton>Connect // Build with us</CTAButton>
      </RightCorner>
    </HeaderContainer>
  )
}
