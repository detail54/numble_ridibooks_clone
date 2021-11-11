import styled from 'styled-components'
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
  ${(props: ILinkWrapStyles) =>
    props.itemAlignX
      ? setStyles.setAlignX(props.itemAlignX)
      : setStyles.setAlignX('center')}
  ${(props: ILinkWrapStyles) =>
    props.itemAlignY
      ? setStyles.setAlignY(props.itemAlignY)
      : setStyles.setAlignY('center')}
`

export const LinkWrapSC = {
  Ul,
  Li,
}
