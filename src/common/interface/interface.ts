/* eslint-disable @typescript-eslint/ban-types */

// global style type
import { TFontSize, TFontWeight, TAlign } from '../../asset/css/GlobalStyle'
import { IBook } from '../../config/data/books'

// Media style interface
export interface IMediaStyled {
  mediaAMinWidth: string
  mediaAWidth: string
  mediaAHeight?: string
  mediaATransform: string
  mediaBMinWidth: string
  mediaBWidth: string
  mediaBHeight?: string
  mediaBTransform: string
}

// Tab interface
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
  choice?: boolean
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

// searchBox interface
export interface ISearchBox {
  placeholder?: string
  searchText: string
  onChange: (text: string) => void
  onRemove?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  openCancelButton?: boolean
  onFocus?: () => void
  onBlur?: () => void
  styles?: ISearchBoxStyles
}

export interface ISearchBoxStyles {
  maxWidth?: string
  fontSize?: TFontSize
  fontWeight?: TFontWeight
  width?: string
  border?: string
  flex?: string
  focusOutLine?: boolean
}

// Button interface
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

// Carousel interface
export interface ICarousel {
  id: number
  imgUrl: string
  alt: string
  toLink: string
}

export interface ICarouselWrap {
  datas: ICarousel[]
  mediaStyled: IMediaStyled
}

// BookCarousel interface
type TButtonColor = 'white' | 'black'

export interface IButtonStyle {
  buttonColor: TButtonColor
  mediaStyled: IMediaStyled
  hide: boolean
}

export interface IBookCarousel {
  header: string
  booksData: IBook[]
  buttonColor: TButtonColor
  mediaStyled: IMediaStyled
}
