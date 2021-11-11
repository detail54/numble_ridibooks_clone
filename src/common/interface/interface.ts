/* eslint-disable @typescript-eslint/ban-types */

// global style type
import { TFontSize, TFontWeight, TAlign } from '../../GlobalStyle'

export interface ILinkStyles {
  opacity?: boolean
  disabled?: boolean
  fontSize?: TFontSize
  fontWeight?: TFontWeight
  bgColor?: TButtonBgColor
  alignX?: TAlign
  alignY?: TAlign
  width?: string
  height?: string
  hoverColor?: string
  hoverOpacity?: string
  hoverBgColor?: string
}

export interface ILink {
  toLink: string
  children?: JSX.Element
  text?: string
  styles?: ILinkStyles
}

export interface ILinkWrapStyles {
  listAlignX?: string
  listAlignY?: string
  itemAlignX?: string
  itemAlignY?: string
}

export interface ILinkWrap {
  datas: ILink[]
  wrapStyle?: ILinkWrapStyles
}

export interface ISearchInput {
  placeholder?: string
  searchText: string
  onChange: (text: string) => void
  onRemove?: () => void
  openCancelButton?: boolean
  onFocus?: () => void
  onBlur?: () => void
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

type TButtonSize = '50px' | '40px' | '30px' | '25px' | '21px'
type TButtonBgColor = 'dodgerBlue' | 'white' | 'gray' | 'outDodgerBlue' | 'none'

export interface IButtonStyles {
  buttonSize: TButtonSize
  buttonColor: TButtonBgColor
  cursor?: string
}

export interface IButton {
  text: string
  imgUrl?: string
  onClick?: () => void
  styles: IButtonStyles
}

export interface IBUttonWrapStyles {
  listAlignX?: string
  listAlignY?: string
  itemAlignX?: string
  itemAlignY?: string
}

export interface IButtonWrap {
  datas: IButton[]
  wrapStyle: IBUttonWrapStyles
}
