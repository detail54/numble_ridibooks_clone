// lib
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
// interface
import { ILinkStyles } from '../interface/interface'

export const LinkTag = styled(Link)`
  background-color: transparent;
  text-decoration: none;
  color: white;
  font-family: 'Pretendard-SemiBold';
  font-size: ${(props: ILinkStyles) => props.fontSize};
  ${(props: ILinkStyles) =>
    props.fontWeight &&
    css`
      font-weight: props.fontWeight;
    `}
  ${(props: ILinkStyles) =>
    props.disabled &&
    css`
      opacity: 0.6;
    `}
`

export const LinkStyles = {
  LinkTag,
}
