import React from 'react'
// interface
import { ITab } from '../interface/interface'
// style
import { TabSC } from './Tab.styles'

const Tab: React.FC<ITab> = (props) => {
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

  const line = underLine && <TabSC.UnderLine />

  const content = (children && childrenFirst ? (
    <TabSC.LinkTab
      id={id}
      to={toLink}
      onClick={() => onClick && onClick(id)}
      {...styles}
    >
      {children}
      {text}
      {line}
    </TabSC.LinkTab>
  ) : (
    <TabSC.LinkTab id={id} to={toLink} {...styles}>
      {text}
      {children}
      {line}
    </TabSC.LinkTab>
  )) || (
    <TabSC.LinkTab id={id} to={toLink} {...styles}>
      {text}
      {line}
    </TabSC.LinkTab>
  )

  return <>{content}</>
}

export default Tab
