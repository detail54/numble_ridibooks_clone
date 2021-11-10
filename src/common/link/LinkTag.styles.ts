// lib
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
// interface
import { ILinkProps } from '../interface/interface'
// global style
import { setStyles } from '../../GlobalStyle'

const LinkTag = styled(Link)`
  background-color: transparent;
  text-decoration: none;
  color: white;
  ${(props: ILinkProps) =>
    props.fontSize && setStyles.setFontSize(props.fontSize)}
  ${(props: ILinkProps) =>
    props.fontWeight && setStyles.setFontWeight(props.fontWeight)}

  ${(props: ILinkProps) =>
    props.opacity &&
    css`
      opacity: 0.6;
    `}
  ${(props: ILinkProps) =>
    (props.hoverColor || props.hoverBgColor || props.hoverOpacity) &&
    setStyles.setHoverEffect(
      props.hoverColor,
      props.hoverBgColor,
      props.hoverOpacity,
    )}
`

export const LinkSC = {
  LinkTag,
}
