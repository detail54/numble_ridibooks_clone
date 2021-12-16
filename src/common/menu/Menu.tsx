import React from 'react'
// interface
import { IMenu } from '../interface/interface'
// style
import { MenuSC } from './Menu.styles'

const Menu: React.FC<IMenu> = (props) => {
  const {
    id,
    menuType,
    toLink = '',
    text,
    children,
    childrenFirst,
    styles,
    onClick,
    underLine,
  } = props

  const line = underLine && <MenuSC.UnderLine />

  const content =
    menuType === 'link'
      ? (children && childrenFirst ? (
          <MenuSC.LinkMenu
            id={id}
            to={toLink}
            onClick={() => onClick && onClick(id)}
            {...styles}
          >
            {children}
            <MenuSC.Text {...styles}>{text}</MenuSC.Text>
            {line}
          </MenuSC.LinkMenu>
        ) : (
          <MenuSC.LinkMenu id={id} to={toLink} {...styles}>
            <MenuSC.Text {...styles}>{text}</MenuSC.Text>
            {children}
            {line}
          </MenuSC.LinkMenu>
        )) || (
          <MenuSC.LinkMenu id={id} to={toLink} {...styles}>
            <MenuSC.Text {...styles}>{text}</MenuSC.Text>
            {line}
          </MenuSC.LinkMenu>
        )
      : (children && childrenFirst ? (
          <MenuSC.BasicMenu
            id={id}
            onClick={() => onClick && onClick(id)}
            {...styles}
          >
            {children}
            <MenuSC.Text {...styles}>{text}</MenuSC.Text>
            {line}
          </MenuSC.BasicMenu>
        ) : (
          <MenuSC.BasicMenu
            id={id}
            {...styles}
            onClick={() => onClick && onClick(id)}
          >
            <MenuSC.Text {...styles}>{text}</MenuSC.Text>
            {children}
            {line}
          </MenuSC.BasicMenu>
        )) || (
          <MenuSC.BasicMenu
            id={id}
            {...styles}
            onClick={() => onClick && onClick(id)}
          >
            <MenuSC.Text {...styles}>{text}</MenuSC.Text>
            {line}
          </MenuSC.BasicMenu>
        )

  return <>{content}</>
}

export default Menu
