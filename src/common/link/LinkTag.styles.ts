// lib
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
// interface
import { ILinkStyles } from '../interface/interface'
// global style
import { colors, setStyles } from '../../GlobalStyle'

const LinkTag = styled(Link)`
  ${(props: ILinkStyles) =>
    props.fontSize && setStyles.setFontSize(props.fontSize)}

  ${(props: ILinkStyles) =>
    props.fontWeight && setStyles.setFontWeight(props.fontWeight)}

  ${(props: ILinkStyles) => props.alignx && setStyles.setAlignX(props.alignx)}

  ${(props: ILinkStyles) => props.aligny && setStyles.setAlignY(props.aligny)}

  ${(props: ILinkStyles) =>
    (props.width || props.height) &&
    setStyles.setWidthAndHeight(props.width, props.height)};

  ${(props: ILinkStyles) =>
    (props.hoverColor ||
      props.hoverBgColor ||
      props.hoveropacity ||
      props.hoverBorder ||
      props.hoverBorderTop ||
      props.hoverBorderBottom ||
      props.hoverBorderLeft ||
      props.hoverBorderRight) &&
    setStyles.setHoverEffect(
      props.hoverColor,
      props.hoverBgColor,
      props.hoveropacity,
      props.hoverBorder,
      props.hoverBorderTop,
      props.hoverBorderBottom,
      props.hoverBorderLeft,
      props.hoverBorderRight,
    )}

  ${(props: ILinkStyles) =>
    (props.bgcolor === 'dodgerBlue' &&
      css`
        color: white;
        background: ${colors.dodgerblue_50};
        border: 1px solid dodger;
      `) ||
    (props.bgcolor === 'white' &&
      css`
        color: ${colors.gray_50};
        background: white;
        border: 1px solid ${colors.gray_10};
      `) ||
    (props.bgcolor === 'gray' &&
      css`
        color: white;
        background: ${colors.gray_10};
        border: 1px solid ${colors.gray_10};
      `) ||
    (props.bgcolor === 'outDodgerBlue' &&
      css`
        color: ${colors.dodgerblue_50};
        background: white;
        border: 1px solid ${colors.dodgerblue_50};
      `) ||
    (props.bgcolor === 'none' &&
      css`
        color: white;
        background: none;
        border: 1px solid white;
      `)}

  text-decoration: none;
  border: ${(props: ILinkStyles) => props.border || 'none'};
  border-radius: ${(props: ILinkStyles) => props.borderradius || 'none'};
  color: ${(props: ILinkStyles) => props.color || 'black'};
  margin: ${(props: ILinkStyles) => props.margin || '0px'};
  padding: ${(props: ILinkStyles) => props.padding || '0px'};
  opacity: ${(props: ILinkStyles) => props.opacity || ''};
  flex-flow: ${(props: ILinkStyles) => props.flexflow || ''};
`

const UnderLine = styled.span`
  display: block;
  height: 3px;
  width: 100%;
  background: #99d1ff;
  position: relative;
  bottom: -8px;
`

export const LinkSC = {
  LinkTag,
  UnderLine,
}
