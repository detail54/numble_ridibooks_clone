import React from 'react'
// interface
import { ILink } from '../interface/interface'
// style
import { LinkSC } from './LinkTag.styles'

const LinkTag: React.FC<ILink> = (props) => {
  const {
    id,
    toLink,
    text,
    children,
    childrenFirst,
    styles,
    onClick,
    underLine,
  } = props

  const line = underLine && <LinkSC.UnderLine />

  const content = (children && childrenFirst ? (
    <LinkSC.LinkTag
      id={id}
      to={toLink}
      onClick={() => onClick && onClick(id)}
      {...styles}
    >
      {children}
      {text}
      {line}
    </LinkSC.LinkTag>
  ) : (
    <LinkSC.LinkTag id={id} to={toLink} {...styles}>
      {text}
      {children}
      {line}
    </LinkSC.LinkTag>
  )) || (
    <LinkSC.LinkTag id={id} to={toLink} {...styles}>
      {text}
      {line}
    </LinkSC.LinkTag>
  )

  return <>{content}</>
}

export default LinkTag
