import React from 'react'
// interface
import { IMenuWrap } from '../interface/interface'
// component
import Menu from './Menu'
// style
import { MenuWrapSC } from './MenuWrap.styles'

const MenuWrap: React.FC<IMenuWrap> = (props) => {
  const { datas, wrapStyle } = props

  const menu = (
    <MenuWrapSC.Ul
      listAlignX={wrapStyle && wrapStyle.listAlignX}
      listAlignY={wrapStyle && wrapStyle.listAlignY}
    >
      {datas.map((data) => (
        <MenuWrapSC.Li
          key={`${data.text} link`}
          itemUnderLine={data.underLine}
          itemEnabled={data.underLineEnabled}
          {...wrapStyle}
        >
          {data.children ? (
            <Menu
              id={data.id}
              menuType={data.menuType}
              toLink={data.toLink}
              text={data.text}
              childrenFirst={data.childrenFirst}
              styles={data.styles}
              onClick={data.onClick}
              underLine={data.underLine}
              underLineEnabled={data.underLineEnabled}
            >
              {data.children}
            </Menu>
          ) : (
            <Menu
              id={data.id}
              menuType={data.menuType}
              toLink={data.toLink}
              text={data.text}
              styles={data.styles}
              onClick={data.onClick}
              underLine={data.underLine}
              underLineEnabled={data.underLineEnabled}
            />
          )}
        </MenuWrapSC.Li>
      ))}
    </MenuWrapSC.Ul>
  )

  return <>{menu}</>
}

export default MenuWrap
