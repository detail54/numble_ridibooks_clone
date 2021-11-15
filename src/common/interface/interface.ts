/* eslint-disable @typescript-eslint/ban-types */

// global style type
import { TFontSize, TFontWeight, TAlign } from '../../GlobalStyle'

export interface ILinkStyles {
  color?: string
  opacity?: string
  disabled?: boolean
  fontSize?: TFontSize
  fontWeight?: TFontWeight
  bgcolor?: TButtonBgColor
  alignx?: TAlign
  aligny?: TAlign
  width?: string
  height?: string
  border?: string
  margin?: string
  padding?: string
  borderradius?: string
  hoverColor?: string
  hoveropacity?: string
  hoverBgColor?: string
  hoverBorder?: string
  hoverBorderTop?: string
  hoverBorderBottom?: string
  hoverBorderLeft?: string
  hoverBorderRight?: string
  flexflow?: string
}

export interface ILink {
  id: string
  toLink: string
  children?: JSX.Element
  childrenFirst?: boolean
  text: string
  styles?: ILinkStyles
  onClick?: (data: string) => void
  underLine?: boolean
  underLineEnabled?: boolean
}

export interface ILinkWrapStyles {
  listAlignX?: string
  listAlignY?: string
  itemAlignX?: string
  itemAlignY?: string
  itemHoveropacity?: string
  itemUnderLine?: boolean
  itemEnabled?: boolean
}

export interface ILinkWrap {
  datas: ILink[]
  wrapStyle?: ILinkWrapStyles
  listItemEnabled?: boolean
}

export interface ISearchInput {
  placeholder?: string
  searchText: string
  onChange: (text: string) => void
  onRemove?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
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
