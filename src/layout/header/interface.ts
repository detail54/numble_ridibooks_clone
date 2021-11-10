// global style type
import { TFontWeight } from '../../GlobalStyle'

export interface IHeader {
  onChangeSearchRext: (text: string) => void
}

export interface IHeaderStyles {
  fontWeight?: TFontWeight
  divider?: boolean
  width?: string
  border?: boolean
}
