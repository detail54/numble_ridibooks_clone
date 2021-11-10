// lib
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// interface
import { ILinkProps } from '../interface/interface'
// global style
import { setStyles } from '../../GlobalStyle'

export const LinkTag = styled(Link)`
  background-color: transparent;
  text-decoration: none;
  color: white;
  ${(props: ILinkProps) =>
    props.fontSize && setStyles.setFontSize(props.fontSize)}
  ${(props: ILinkProps) =>
    props.fontWeight && setStyles.setFontWeight(props.fontWeight)}
`

export const LinkStyles = {
  LinkTag,
}
