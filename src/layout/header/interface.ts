// global style type
import { TFontSize, TFontWeight } from '../../asset/css/GlobalStyle'

export interface IHeader {
  searchText: string
  onChangeSearchText: (text: string) => void
  onRemoveSearchText: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void
  searchCancleButton: boolean
  openSearchResultModal: () => void
  closeSearchResultModal: () => void
  menuEnabled: (menu: string) => void
  homeMenuEnabled: boolean
  noticeMenuEnabled: boolean
  cartMenuEnabled: boolean
  MyMenuEnabled: boolean
}

export interface IHeaderStyles {
  fontWeight?: TFontWeight
  fontSize?: TFontSize
  divider?: boolean
  width?: string
  border?: boolean
}
