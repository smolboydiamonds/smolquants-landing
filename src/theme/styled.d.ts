import {ThemedCssFunction} from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    // media queries
    mediaWidth: {
      minExtraSmall: ThemedCssFunction<DefaultTheme>
      minSmall: ThemedCssFunction<DefaultTheme>
      minMedium: ThemedCssFunction<DefaultTheme>
      minLarge: ThemedCssFunction<DefaultTheme>
    }
  }
}
