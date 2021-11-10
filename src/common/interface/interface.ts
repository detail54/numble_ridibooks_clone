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

export interface IInput {
  placeholder: string
  onChange: (text: string) => void
  styles?: IInputStyles
}

export interface IInputStyles {
  fontSize?: TFontSize
  fontWeight?: TFontWeight
  width?: string
}
