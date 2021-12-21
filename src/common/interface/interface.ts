/* eslint-disable @typescript-eslint/ban-types */

// global style type
import { TFontSize, TFontWeight, TAlign } from '../../asset/css/GlobalStyle'
// book interface
import { IBook } from '../../config/data/books'

// Media style interface
export interface IMediaStyled {
  mediaAWidth: string
  mediaAHeight?: string
  mediaATransform: string
  mediaBWidth: string
  mediaBHeight?: string
  mediaBTransform: string
}

// Menu interface
export interface IMenuStyles {
  color?: string
  opacity?: string
  disabled?: boolean
  fontSize?: TFontSize
  fontWeight?: TFontWeight
  bgcolor?: TButtonBgColor
  alignx?: TAlign
  aligny?: TAlign
  width?: string
  flex?: number
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
  flexdirect?: string
  flexflow?: string
  choice?: boolean
}

type TMenu = 'basic' | 'link'

export interface IMenu {
  id: string
  menuType: TMenu
  toLink?: string
  children?: JSX.Element
  childrenFirst?: boolean
  text: string
  styles?: IMenuStyles
  onClick?: (data: string) => void
  underLine?: boolean
  underLineEnabled?: boolean
}

export interface IMenuWrapStyles {
  listAlignX?: string
  listAlignY?: string
  itemAlignX?: string
  itemAlignY?: string
  itemHoveropacity?: string
  itemUnderLine?: boolean
  itemEnabled?: boolean
  flex?: number
}

export interface IMenuWrap {
  datas: IMenu[]
  wrapStyle?: IMenuWrapStyles
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

// Book interface
export interface IBookStyle {
  color?: string
}

export interface IBookComp {
  book: IBook
  bookStyle?: IBookStyle
}

// BookCarousel interface
export type TButtonColor = 'white' | 'black'

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
  bookStyle: IBookStyle
}

// BookLabel interface
export interface IBookLabelStyle {
  rent?: boolean
  sale?: boolean
}

export interface IBookLabel {
  book: IBook
}

// BookRanking interface
type TBookSize = 'large' | 'small'

export interface IBookRankingItemStyle {
  underLine?: boolean
  bookSize?: TBookSize
  compTransform?: number
}

export interface IBookRanking {
  bookData: IBook[]
  header: string
  timer?: boolean
  bookSize?: TBookSize
  LinkHeader?: boolean
}

export interface IBookRankingItem {
  bookNumber: number
  book: IBook
  bookSize?: TBookSize
  underLine?: boolean
}
