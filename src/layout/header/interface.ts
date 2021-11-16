// global style type
import { TFontWeight } from '../../asset/css/GlobalStyle'

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
  divider?: boolean
  width?: string
  border?: boolean
}
