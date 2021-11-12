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
    <LinkWrapSC.Ul
      listAlignX={wrapStyle && wrapStyle.itemAlignX}
      listAlignY={wrapStyle && wrapStyle.itemAlignY}
    >
      {datas.map((data) => (
        <LinkWrapSC.Li
          key={`${data.text} link`}
          itemUnderLine={data.underLine}
          itemEnabled={data.underLineEnabled}
          {...wrapStyle}
        >
          {data.children ? (
            <LinkTag
              toLink={data.toLink}
              text={data.text}
              childrenFirst={data.childrenFirst}
              styles={data.styles}
              onClick={data.onClick}
              underLine={data.underLine}
              underLineEnabled={data.underLineEnabled}
            >
              {data.children}
            </LinkTag>
          ) : (
            <LinkTag
              toLink={data.toLink}
              text={data.text}
              styles={data.styles}
              onClick={data.onClick}
              underLine={data.underLine}
              underLineEnabled={data.underLineEnabled}
            />
          )}
        </LinkWrapSC.Li>
      ))}
      {/* {datas.map((data) => (
        <LinkWrapSC.Li key={`${data.text} link`} {...wrapStyle}>
          {data.children ? (
            <LinkTag
              toLink={data.toLink}
              text={data.text}
              childrenFirst={data.childrenFirst}
              styles={data.styles}
              onClick={data.onClick}
              underLine={data.underLine}
              underLineEnabled={data.underLineEnabled}
            >
              {data.children}
            </LinkTag>
          ) : (
            <LinkTag
              toLink={data.toLink}
              text={data.text}
              styles={data.styles}
              onClick={data.onClick}
              underLine={data.underLine}
              underLineEnabled={data.underLineEnabled}
            />
          )}
        </LinkWrapSC.Li>
      ))} */}
    </LinkWrapSC.Ul>
  )

  return <>{LinkTags}</>
}

export default LinkWrap
