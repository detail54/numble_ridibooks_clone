// lib
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
// interface
import { ILinkStyles } from '../interface/interface'
// global style
import { setStyles } from '../../GlobalStyle'

const LinkTag = styled(Link)`
  background-color: transparent;
  text-decoration: none;
  color: white;

  ${(props: ILinkStyles) =>
    props.fontSize && setStyles.setFontSize(props.fontSize)};

  ${(props: ILinkStyles) =>
    props.fontWeight && setStyles.setFontWeight(props.fontWeight)};

  ${(props: ILinkStyles) => props.alignX && setStyles.setAlignX(props.alignX)};

  ${(props: ILinkStyles) => props.alignY && setStyles.setAlignY(props.alignY)};

  ${(props: ILinkStyles) =>
    (props.width || props.height) &&
    setStyles.setWidthAndHeight(props.width, props.height)};

  ${(props: ILinkStyles) =>
    props.opacity &&
    css`
      opacity: 0.6;
    `};

  ${(props: ILinkStyles) =>
    (props.hoverColor || props.hoverBgColor || props.hoverOpacity) &&
    setStyles.setHoverEffect(
      props.hoverColor,
      props.hoverBgColor,
      props.hoverOpacity,
    )};
`

export const LinkSC = {
  LinkTag,
}
