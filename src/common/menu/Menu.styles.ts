// lib
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
// interface
import { IMenuStyles } from '../interface/interface'
// global style
import { colors, setStyles } from '../../asset/css/GlobalStyle'

const LinkMenu = styled(Link)`
  ${(props: IMenuStyles) => props.alignx && setStyles.setAlignX(props.alignx)}

  ${(props: IMenuStyles) => props.aligny && setStyles.setAlignY(props.aligny)}

  ${(props: IMenuStyles) =>
    (props.width || props.height) &&
    setStyles.setWidthAndHeight(props.width, props.height)};

  ${(props: IMenuStyles) =>
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

  ${(props: IMenuStyles) =>
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
  color: ${(props: IMenuStyles) => props.color || 'black'};
  border: ${(props: IMenuStyles) => props.border || 'none'};
  border-radius: ${(props: IMenuStyles) => props.borderradius || 'none'};
  margin: ${(props: IMenuStyles) => props.margin || '0px'};
  padding: ${(props: IMenuStyles) => props.padding || '0px'};
  opacity: ${(props: IMenuStyles) => props.opacity || ''};
  flex-flow: ${(props: IMenuStyles) => props.flexflow || ''};
  flex-direction: ${(props: IMenuStyles) => props.flexDirection || ''};
`

const BasicMenu = styled.div`
  ${(props: IMenuStyles) => props.alignx && setStyles.setAlignX(props.alignx)}

  ${(props: IMenuStyles) => props.aligny && setStyles.setAlignY(props.aligny)}

  ${(props: IMenuStyles) =>
    (props.width || props.height) &&
    setStyles.setWidthAndHeight(props.width, props.height)};

  ${(props: IMenuStyles) =>
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

  ${(props: IMenuStyles) =>
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
  border: ${(props: IMenuStyles) => props.border || 'none'};
  border-radius: ${(props: IMenuStyles) => props.borderradius || 'none'};
  color: ${(props: IMenuStyles) => props.color || 'black'};
  margin: ${(props: IMenuStyles) => props.margin || '0px'};
  padding: ${(props: IMenuStyles) => props.padding || '0px'};
  opacity: ${(props: IMenuStyles) => props.opacity || ''};
  flex-flow: ${(props: IMenuStyles) => props.flexflow || ''};
  flex-direction: ${(props: IMenuStyles) => props.flexDirection || ''};
  cursor: pointer;
`

const Text = styled.div`
  ${(props: IMenuStyles) =>
    props.fontSize && setStyles.setFontSize(props.fontSize)}

  ${(props: IMenuStyles) =>
    props.fontWeight && setStyles.setFontWeight(props.fontWeight)}

  color: ${(props: IMenuStyles) => props.color || 'black'};

  ${(props: IMenuStyles) =>
    props.choice &&
    css`
      color: ${colors.dodgerblue_60};
      font-weight: bold;
    `}
`

const UnderLine = styled.span`
  display: block;
  height: 3px;
  width: 100%;
  background: #99d1ff;
  position: relative;
  bottom: -8px;
`

export const MenuSC = {
  LinkMenu,
  BasicMenu,
  Text,
  UnderLine,
}
