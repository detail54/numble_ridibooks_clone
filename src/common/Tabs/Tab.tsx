import React from 'react'
// interface
import { ITab } from '../interface/interface'
// style
import { TabSC } from './Tab.styles'

const Tab: React.FC<ITab> = (props) => {
  const {
    id,
    tabType,
    toLink = '',
    text,
    children,
    childrenFirst,
    styles,
    onClick,
    underLine,
  } = props

  const line = underLine && <TabSC.UnderLine />

  const content =
    tabType === 'link'
      ? (children && childrenFirst ? (
          <TabSC.LinkTab
            id={id}
            to={toLink}
            onClick={() => onClick && onClick(id)}
            {...styles}
          >
            {children}
            <TabSC.Text {...styles}>{text}</TabSC.Text>
            {line}
          </TabSC.LinkTab>
        ) : (
          <TabSC.LinkTab id={id} to={toLink} {...styles}>
            <TabSC.Text {...styles}>{text}</TabSC.Text>
            {children}
            {line}
          </TabSC.LinkTab>
        )) || (
          <TabSC.LinkTab id={id} to={toLink} {...styles}>
            <TabSC.Text {...styles}>{text}</TabSC.Text>
            {line}
          </TabSC.LinkTab>
        )
      : (children && childrenFirst ? (
          <TabSC.BasicTab
            id={id}
            onClick={() => onClick && onClick(id)}
            {...styles}
          >
            {children}
            <TabSC.Text {...styles}>{text}</TabSC.Text>
            {line}
          </TabSC.BasicTab>
        ) : (
          <TabSC.BasicTab
            id={id}
            {...styles}
            onClick={() => onClick && onClick(id)}
          >
            <TabSC.Text {...styles}>{text}</TabSC.Text>
            {children}
            {line}
          </TabSC.BasicTab>
        )) || (
          <TabSC.BasicTab
            id={id}
            {...styles}
            onClick={() => onClick && onClick(id)}
          >
            <TabSC.Text {...styles}>{text}</TabSC.Text>
            {line}
          </TabSC.BasicTab>
        )

  return <>{content}</>
}

export default Tab
