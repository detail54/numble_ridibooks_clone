import React from 'react'
// interface
import { ILinkProps } from '../interface/interface'
// style
import { LinkStyles } from './LinkTag.styles'

const LinkTag: React.FC<ILinkProps> = (props) => {
  const { text } = props

  return (
    <LinkStyles.LinkTag to='/' {...props}>
      {text}
    </LinkStyles.LinkTag>
  )
}

export default LinkTag
