import { theme } from 'themes'
import type { ResponsiveProps, Responsive } from 'types'

export type AppTheme = typeof theme
type SpaceThemeKeys = keyof typeof theme.space
type ColorThemeKeys = keyof typeof theme.colors
type FontSizeThemeKeys = keyof typeof theme.fontSizes
type LetterSpacing = keyof typeof theme.letterSpacings
type LineHeightThemeKeys = keyof typeof theme.lineHeights
