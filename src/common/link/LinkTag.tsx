import React from 'react'
// interface
import { ILinkProps } from '../interface/interface'
// style
import { LinkSC } from './LinkTag.styles'

const LinkTag: React.FC<ILinkProps> = (props) => {
  const { toLink, text, children } = props

  return (
    <LinkSC.LinkTag to={toLink} {...props}>
      <>
        {text}
        {children && children}
      </>
    </LinkSC.LinkTag>
  )
}

export default LinkTag
