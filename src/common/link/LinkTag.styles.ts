// lib
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
// interface
import { ILinkStyles } from '../interface/interface'
// global style
import { colors, setStyles } from '../../GlobalStyle'

const LinkTag = styled(Link)`
  background-color: transparent;
  text-decoration: none;

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

  ${(props: ILinkStyles) =>
    (props.bgColor === 'dodgerBlue' &&
      css`
        color: white;
        background: ${colors.dodgerblue_50};
        border: 1px solid dodger;
      `) ||
    (props.bgColor === 'white' &&
      css`
        color: ${colors.gray_50};
        background: white;
        border: 1px solid ${colors.gray_10};
      `) ||
    (props.bgColor === 'gray' &&
      css`
        color: white;
        background: ${colors.gray_10};
        border: 1px solid ${colors.gray_10};
      `) ||
    (props.bgColor === 'outDodgerBlue' &&
      css`
        color: ${colors.dodgerblue_50};
        background: white;
        border: 1px solid ${colors.dodgerblue_50};
      `) ||
    (props.bgColor === 'none' &&
      css`
        color: white;
        background: none;
        border: 1px solid white;
      `) ||
    css`
      color: white;
      background: none;
      border: none;
    `}
`

export const LinkSC = {
  LinkTag,
}
