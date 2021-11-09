// lib
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
// interface
import { ILinkStyle } from '../interface/interface'

export const LinkTag = styled(Link)`
  background-color: transparent;
  text-decoration: none;
  color: white;
  font-size: ${(props: ILinkStyle) => props.fontSize};
  font-weight: ${(props: ILinkStyle) =>
    props.fontWeight ? props.fontWeight : 'normal'};
  ${(props: ILinkStyle) =>
    props.disabled &&
    css`
      opacity: 0.6;
    `}
`

export const LinkStyles = {
  LinkTag,
}
