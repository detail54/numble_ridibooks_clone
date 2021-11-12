import styled, { css } from 'styled-components'
// interface
import { ILinkWrapStyles } from '../interface/interface'
// global style
import { setStyles } from '../../GlobalStyle'

const Ul = styled.ul`
  ${(props: ILinkWrapStyles) =>
    props.listAlignX
      ? setStyles.setAlignX(props.listAlignX)
      : setStyles.setAlignX('center')}
  ${(props: ILinkWrapStyles) =>
    props.listAlignY
      ? setStyles.setAlignY(props.listAlignY)
      : setStyles.setAlignY('center')}
`

const Li = styled.li`
  transition: 0.2s;

  ${(props: ILinkWrapStyles) =>
    props.itemAlignX
      ? setStyles.setAlignX(props.itemAlignX)
      : setStyles.setAlignX('center')}
  ${(props: ILinkWrapStyles) =>
    props.itemAlignY
      ? setStyles.setAlignY(props.itemAlignY)
      : setStyles.setAlignY('center')}

  ${(props: ILinkWrapStyles) =>
    props.itemUnderLine && !props.itemEnabled
      ? css`
          span {
            opacity: 0;
          }
        `
      : css`
          span {
            opacity: 1;
          }
        `};

  ${(props: ILinkWrapStyles) =>
    !props.itemEnabled &&
    props.itemHoveropacity &&
    css`
      &:hover {
        opacity: ${props.itemHoveropacity || ''};
        span {
          opacity: ${props.itemHoveropacity || ''};
        }
      }
    `}
`

export const LinkWrapSC = {
  Ul,
  Li,
}
