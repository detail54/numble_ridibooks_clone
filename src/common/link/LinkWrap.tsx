import React from 'react'
// interface
import { ILinkWrap } from '../interface/interface'
// component
import LinkTag from './LinkTag'
// style
import { LinkWrapSC } from './LinkWrap.styles'

const LinkWrap: React.FC<ILinkWrap> = (props) => {
  const { datas, wrapStyle } = props

  const LinkTags = (
    <LinkWrapSC.Ul {...wrapStyle}>
      {datas.map((data) => (
        <LinkWrapSC.Li key={`${data.text} link`} {...wrapStyle}>
          {data.children ? (
            <LinkTag toLink={data.toLink} text={data.text} styles={data.styles}>
              {data.children}
            </LinkTag>
          ) : (
            <LinkTag
              toLink={data.toLink}
              text={data.text}
              styles={data.styles}
            />
          )}
        </LinkWrapSC.Li>
      ))}
    </LinkWrapSC.Ul>
  )

  return <>{LinkTags}</>
}

export default LinkWrap
