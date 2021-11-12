import React from 'react'
// interface
import { ILink } from '../interface/interface'
// style
import { LinkSC } from './LinkTag.styles'

const LinkTag: React.FC<ILink> = (props) => {
  const { toLink, text, children, childrenFirst, styles, onClick, underLine } =
    props

  const line = underLine && <LinkSC.UnderLine />

  const content = (children && childrenFirst ? (
    <LinkSC.LinkTag
      to={toLink}
      onClick={() => onClick && onClick(text)}
      {...styles}
    >
      {children}
      {text}
      {line}
    </LinkSC.LinkTag>
  ) : (
    <LinkSC.LinkTag to={toLink} {...styles}>
      {text}
      {children}
      {line}
    </LinkSC.LinkTag>
  )) || (
    <LinkSC.LinkTag to={toLink} {...styles}>
      {text}
      {line}
    </LinkSC.LinkTag>
  )

  return <>{content}</>
}

export default LinkTag
