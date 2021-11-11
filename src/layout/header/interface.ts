// global style type
import { TFontWeight } from '../../GlobalStyle'

export interface IHeader {
  searchText: string
  onChangeSearchText: (text: string) => void
  onRemoveSearchText: () => void
  searchCancleButton: boolean
  openSearchResultModal: () => void
  closeSearchResultModal: () => void
}

export interface IHeaderStyles {
  fontWeight?: TFontWeight
  divider?: boolean
  width?: string
  border?: boolean
}
