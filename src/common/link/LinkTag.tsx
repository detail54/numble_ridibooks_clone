import React from 'react'
// interface
import { ILink } from '../interface/interface'
// style
import { LinkSC } from './LinkTag.styles'

const LinkTag: React.FC<ILink> = (props) => {
  const { toLink, text, children, childrenFirst, styles } = props

  const content = (children && childrenFirst ? (
    <LinkSC.LinkTag to={toLink} {...styles}>
      {children}
      {text}
    </LinkSC.LinkTag>
  ) : (
    <LinkSC.LinkTag to={toLink} {...styles}>
      {text}
      {children}
    </LinkSC.LinkTag>
  )) || (
    <LinkSC.LinkTag to={toLink} {...styles}>
      {text}
    </LinkSC.LinkTag>
  )

  return <>{content}</>
}

export default LinkTag
