type TFontWeight =
  | 'thin'
  | 'light'
  | 'regular'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'black'

export interface ILinkProps {
  toLink: string
  children?: JSX.Element
  text?: string
  opacity?: boolean
  disabled?: boolean
  fontSize?: string
  fontWeight?: TFontWeight
  hoverColor?: string
  hoverOpacity?: string
  hoverBgColor?: string
}
