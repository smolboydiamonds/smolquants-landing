import React, {useMemo} from 'react'
import styled, {
  css,
  DefaultTheme,
  ThemeProvider as StyledComponentsThemeProvider,
} from 'styled-components'

export const MEDIA_WIDTHS = {
  minExtraSmall: 576,
  minSmall: 768,
  minMedium: 992,
  minLarge: 1400,
}

const mediaWidthTemplates: {[width in keyof typeof MEDIA_WIDTHS]: typeof css} = Object.keys(
  MEDIA_WIDTHS,
).reduce((accumulator, size) => {
  ;(accumulator as any)[size] = (a: any, b: any, c: any) => css`
    @media (min-width: ${(MEDIA_WIDTHS as any)[size]}px) {
      ${css(a, b, c)}
    }
  `
  return accumulator
}, {}) as any

export function theme(): DefaultTheme {
  return {
    mediaWidth: mediaWidthTemplates,
  }
}

export default function ThemeProvider({children}: {children: React.ReactNode}) {
  const themeObject = useMemo(() => theme(), [])

  return (
    <StyledComponentsThemeProvider theme={themeObject}>{children}</StyledComponentsThemeProvider>
  )
}
