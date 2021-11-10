import React from 'react'
// interface
import { ILink } from '../interface/interface'
// style
import { LinkStyles } from './LinkTag.styles'

const LinkTag: React.FC<ILink> = (props) => {
  const {
    text,
    linkStyles = {
      fontSize: '2em',
    },
  } = props

  return (
    <LinkStyles.LinkTag to='/' fontSize={linkStyles.fontSize}>
      {text}
    </LinkStyles.LinkTag>
  )
}

export default LinkTag