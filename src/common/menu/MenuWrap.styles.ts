import styled, { css } from 'styled-components'
// interface
import { IMenuWrapStyles } from '../interface/interface'
// global style
import { setStyles } from '../../asset/css/GlobalStyle'

const Ul = styled.ul`
  width: 100%;
  ${(props: IMenuWrapStyles) =>
    props.listAlignX
      ? setStyles.setAlignX(props.listAlignX)
      : setStyles.setAlignX('center')}
  ${(props: IMenuWrapStyles) =>
    props.listAlignY
      ? setStyles.setAlignY(props.listAlignY)
      : setStyles.setAlignY('center')}
`

const Li = styled.li`
  transition: 0.2s;
  flex: ${(props: IMenuWrapStyles) => props.flex};

  ${(props: IMenuWrapStyles) =>
    props.itemAlignX
      ? setStyles.setAlignX(props.itemAlignX)
      : setStyles.setAlignX('center')}
  ${(props: IMenuWrapStyles) =>
    props.itemAlignY
      ? setStyles.setAlignY(props.itemAlignY)
      : setStyles.setAlignY('center')}

  ${(props: IMenuWrapStyles) =>
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

  ${(props: IMenuWrapStyles) =>
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

export const MenuWrapSC = {
  Ul,
  Li,
}
