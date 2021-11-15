import React from 'react'
// interface
import { ITabWrap } from '../interface/interface'
// component
import Tab from './Tab'
// style
import { TabsWrapSC } from './TabsWrap.styles'

const TabsWrap: React.FC<ITabWrap> = (props) => {
  const { datas, wrapStyle } = props

  const tabs = (
    <TabsWrapSC.Ul
      listAlignX={wrapStyle && wrapStyle.itemAlignX}
      listAlignY={wrapStyle && wrapStyle.itemAlignY}
    >
      {datas.map((data) => (
        <TabsWrapSC.Li
          key={`${data.text} link`}
          itemUnderLine={data.underLine}
          itemEnabled={data.underLineEnabled}
          {...wrapStyle}
        >
          {data.children ? (
            <Tab
              id={data.id}
              tabType={data.tabType}
              toLink={data.toLink}
              text={data.text}
              childrenFirst={data.childrenFirst}
              styles={data.styles}
              onClick={data.onClick}
              underLine={data.underLine}
              underLineEnabled={data.underLineEnabled}
            >
              {data.children}
            </Tab>
          ) : (
            <Tab
              id={data.id}
              tabType={data.tabType}
              toLink={data.toLink}
              text={data.text}
              styles={data.styles}
              onClick={data.onClick}
              underLine={data.underLine}
              underLineEnabled={data.underLineEnabled}
            />
          )}
        </TabsWrapSC.Li>
      ))}
    </TabsWrapSC.Ul>
  )

  return <>{tabs}</>
}

export default TabsWrap
