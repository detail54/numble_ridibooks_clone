export interface ILink {
  text: string
  linkStyles?: ILinkStyles
}

export interface ILinkStyles {
  disabled?: boolean
  fontSize: string
  fontWeight?: string
}
