import {useState} from 'react'
import styled from 'styled-components'
import {ChevronRight} from 'react-feather'
import {Icon} from '../Icon/Icon'

const AccordionWrapper = styled.div<{borderColor?: string}>``

const AccordionText = styled.div<{color?: string}>`
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 700;
  font-size: 18px;
  margin: 12px 6px 12px 0px;
  color: ${({color}) => color};
`

const ClickableDropdown = styled.div<{width?: string; clickableMargin?: string}>`
  width: ${({width}) => (width ? width : '100%')};
  margin: ${({clickableMargin}) => (clickableMargin ? clickableMargin : 'auto')};
  display: flex;
  cursor: pointer;
`

const Content = styled.div<{isOpen: boolean}>`
  max-height: ${({isOpen}) => (isOpen ? '100vh' : '0vh')};
  overflow: hidden;
  display: block;
  padding-left: ${({isOpen}) => (isOpen ? '16px' : 'auto')};
  border-left: 1px solid white;
`

export const AccordionSelection = styled.div`
  display: flex;
  font-size: 12px;
  padding: 0;
`

type AccordionProps = {
  accordionText: string | React.ReactNode
  children?: React.ReactNode
  activeColor?: string
  inactiveColor?: string
  width?: string
  clickableMargin?: string
}

export const Accordion = ({
  accordionText,
  children,
  activeColor,
  inactiveColor,
  width,
  clickableMargin,
}: AccordionProps) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <AccordionWrapper>
      <ClickableDropdown
        onClick={() => setOpen(!isOpen)}
        clickableMargin={clickableMargin}
        width={width}
      >
        <Icon
          size={16}
          clickable={true}
          margin={'auto 0'}
          color={isOpen ? activeColor : inactiveColor}
          transform={isOpen ? 'rotate(90deg)' : ''}
        >
          <ChevronRight height={18} width={16} />
        </Icon>
        <AccordionText color={activeColor}>{accordionText}</AccordionText>
      </ClickableDropdown>
      <Content isOpen={isOpen}>{children}</Content>
    </AccordionWrapper>
  )
}
