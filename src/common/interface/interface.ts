/* eslint-disable @typescript-eslint/ban-types */

// global style type
import { TFontSize, TFontWeight, TAlign } from '../../asset/css/GlobalStyle'

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
export interface ICarouselMediaStyled {
  mediaAMinWidth: string
  mediaAWidth: string
  mediaAHeight: string
  mediaATransform: string
  mediaBMinWidth: string
  mediaBWidth: string
  mediaBHeight: string
  mediaBTransform: string
}

export interface ICarousel {
  id: number
  imgUrl: string
  alt: string
  toLink: string
}

export interface ICarouselWrap {
  datas: ICarousel[]
  mediaStyled: ICarouselMediaStyled
}

// BookCarousel interface
export interface IBooks {
  id: number
  thumbnail: string
  type: string // novel, ebook, webNovel
  category: string[] // romance, fantasy, humanities, thriller, detective, society, history, sf
  title: string
  author: {
    name: string
    awards: string[]
    representatives: {
      name: string
      thumbnail: string
    }
    introduction: string
  }
  translator: {
    name: string
    nationality: string
    career: string[]
    representatives: string[]
    introduction: string
  }
  publisher: string
  starRate: {
    rate: number
    rateNum: number // 별점 참여자 수
    rateBuyerNum: number // 별점 참여자 중 구매자 수
  }
  rentalPrice: number
  rentalSalePercent: number
  buyPrice: number
  buySalePercent: number
  count: number // 총 권 수
  freeCount: number // 무료 권 수. count보다 큰 경우는 전권 무료입니다.
  isFinished: boolean
  canRent: boolean // canRent 항목의 우선 순위가 rentalPrice, rentalSalePrice보다 높습니다.
  waitFree: boolean
  xRated: boolean
  description: string[]
  index: string[]
  lastlyRead: string // yyyy-mm-dd
}

export interface IBookCarousel {
  header: string
  books: string
}
