// global style type
import { TFontSize, TFontWeight, TAlign } from '../../GlobalStyle'

export interface ILink {
  toLink: string
  children?: JSX.Element
  text?: string
  styles?: ILinkStyles
}

export interface ILinkStyles {
  opacity?: boolean
  disabled?: boolean
  fontSize?: TFontSize
  fontWeight?: TFontWeight
  alignX?: TAlign
  alignY?: TAlign
  width?: string
  height?: string
  hoverColor?: string
  hoverOpacity?: string
  hoverBgColor?: string
}

export interface ISearchInput {
  placeholder?: string
  searchText: string
  onChange: (text: string) => void
  onRemove: () => void
  openCancelButton: boolean
  onFocus: () => void
  onBlur: () => void
  styles?: ISearchInputStyles
}

export interface ISearchInputStyles {
  maxWidth?: string
  fontSize?: TFontSize
  fontWeight?: TFontWeight
  width?: string
  border?: string
  flex?: string
  focusOutLine?: boolean
}
