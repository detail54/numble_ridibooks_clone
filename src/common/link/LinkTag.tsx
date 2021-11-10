import React from 'react'
// interface
import { ILink } from '../interface/interface'
// style
import { LinkSC } from './LinkTag.styles'

const LinkTag: React.FC<ILink> = (props) => {
  const { toLink, text, children, styles } = props

  return (
    <LinkSC.LinkTag to={toLink} {...styles}>
      <>
        {text}
        {children && children}
      </>
    </LinkSC.LinkTag>
  )
}

export default LinkTag
