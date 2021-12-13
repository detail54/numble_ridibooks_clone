import styled, { css } from 'styled-components'
// interface
import { ITabsWrapStyles } from '../interface/interface'
// global style
import { setStyles } from '../../asset/css/GlobalStyle'

const Ul = styled.ul`
  width: 100%;
  ${(props: ITabsWrapStyles) =>
    props.listAlignX
      ? setStyles.setAlignX(props.listAlignX)
      : setStyles.setAlignX('center')}
  ${(props: ITabsWrapStyles) =>
    props.listAlignY
      ? setStyles.setAlignY(props.listAlignY)
      : setStyles.setAlignY('center')}
`

const Li = styled.li`
  transition: 0.2s;
  flex: ${(props: ITabsWrapStyles) => props.flex};

  ${(props: ITabsWrapStyles) =>
    props.itemAlignX
      ? setStyles.setAlignX(props.itemAlignX)
      : setStyles.setAlignX('center')}
  ${(props: ITabsWrapStyles) =>
    props.itemAlignY
      ? setStyles.setAlignY(props.itemAlignY)
      : setStyles.setAlignY('center')}

  ${(props: ITabsWrapStyles) =>
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

  ${(props: ITabsWrapStyles) =>
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

export const TabsWrapSC = {
  Ul,
  Li,
}
