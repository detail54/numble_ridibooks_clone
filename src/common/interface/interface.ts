/* eslint-disable @typescript-eslint/ban-types */

// global style type
import { TFontSize, TFontWeight, TAlign } from '../../GlobalStyle'

export interface ITabStyles {
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

type TabType = 'basic' | 'link'

export interface ITab {
  id: string
  tabType: TabType
  toLink?: string
  children?: JSX.Element
  childrenFirst?: boolean
  text: string
  styles?: ITabStyles
  onClick?: (data: string) => void
  underLine?: boolean
  underLineEnabled?: boolean
}

export interface ITabsWrapStyles {
  listAlignX?: string
  listAlignY?: string
  itemAlignX?: string
  itemAlignY?: string
  itemHoveropacity?: string
  itemUnderLine?: boolean
  itemEnabled?: boolean
}

export interface ITabWrap {
  datas: ITab[]
  wrapStyle?: ITabsWrapStyles
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
