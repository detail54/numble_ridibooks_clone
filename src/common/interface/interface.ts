export interface ILink {
  text: string
  styles?: ILinkStyle
}

export interface ILinkStyle {
  disabled?: boolean
  fontSize: string
  fontWeight?: string
}
