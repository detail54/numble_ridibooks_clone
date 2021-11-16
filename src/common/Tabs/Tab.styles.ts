// lib
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
// interface
import { ITabStyles } from '../interface/interface'
// global style
import { colors, setStyles } from '../../asset/css/GlobalStyle'

const LinkTab = styled(Link)`
  ${(props: ITabStyles) =>
    props.fontSize && setStyles.setFontSize(props.fontSize)}

  ${(props: ITabStyles) =>
    props.fontWeight && setStyles.setFontWeight(props.fontWeight)}

  ${(props: ITabStyles) => props.alignx && setStyles.setAlignX(props.alignx)}

  ${(props: ITabStyles) => props.aligny && setStyles.setAlignY(props.aligny)}

  ${(props: ITabStyles) =>
    (props.width || props.height) &&
    setStyles.setWidthAndHeight(props.width, props.height)};

  ${(props: ITabStyles) =>
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

  ${(props: ITabStyles) =>
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
  border: ${(props: ITabStyles) => props.border || 'none'};
  border-radius: ${(props: ITabStyles) => props.borderradius || 'none'};
  color: ${(props: ITabStyles) => props.color || 'black'};
  margin: ${(props: ITabStyles) => props.margin || '0px'};
  padding: ${(props: ITabStyles) => props.padding || '0px'};
  opacity: ${(props: ITabStyles) => props.opacity || ''};
  flex-flow: ${(props: ITabStyles) => props.flexflow || ''};
`

const BasicTab = styled.div`
  ${(props: ITabStyles) =>
    props.fontSize && setStyles.setFontSize(props.fontSize)}

  ${(props: ITabStyles) =>
    props.fontWeight && setStyles.setFontWeight(props.fontWeight)}

  ${(props: ITabStyles) => props.alignx && setStyles.setAlignX(props.alignx)}

  ${(props: ITabStyles) => props.aligny && setStyles.setAlignY(props.aligny)}

  ${(props: ITabStyles) =>
    (props.width || props.height) &&
    setStyles.setWidthAndHeight(props.width, props.height)};

  ${(props: ITabStyles) =>
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

  ${(props: ITabStyles) =>
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
  border: ${(props: ITabStyles) => props.border || 'none'};
  border-radius: ${(props: ITabStyles) => props.borderradius || 'none'};
  color: ${(props: ITabStyles) => props.color || 'black'};
  margin: ${(props: ITabStyles) => props.margin || '0px'};
  padding: ${(props: ITabStyles) => props.padding || '0px'};
  opacity: ${(props: ITabStyles) => props.opacity || ''};
  flex-flow: ${(props: ITabStyles) => props.flexflow || ''};
  cursor: pointer;
  ${(props: ITabStyles) =>
    props.choice
      ? css`
          color: ${colors.dodgerblue_60};
          font-weight: bold;
        `
      : css``}
`

const UnderLine = styled.span`
  display: block;
  height: 3px;
  width: 100%;
  background: #99d1ff;
  position: relative;
  bottom: -8px;
`

export const TabSC = {
  LinkTab,
  BasicTab,
  UnderLine,
}
