import styled from 'styled-components'
// global style
import { setStyles } from '../../asset/css/GlobalStyle'
// interface
import { IBUttonWrapStyles } from '../interface/interface'

const Ul = styled.ul`
  ${(props: IBUttonWrapStyles) =>
    props.listAlignX
      ? setStyles.setAlignX(props.listAlignX)
      : setStyles.setAlignX('center')}
  ${(props: IBUttonWrapStyles) =>
    props.listAlignY
      ? setStyles.setAlignY(props.listAlignY)
      : setStyles.setAlignY('center')}
`

const Li = styled.li`
  ${(props: IBUttonWrapStyles) =>
    props.itemAlignX
      ? setStyles.setAlignX(props.itemAlignX)
      : setStyles.setAlignX('center')}
  ${(props: IBUttonWrapStyles) =>
    props.itemAlignY
      ? setStyles.setAlignY(props.itemAlignY)
      : setStyles.setAlignY('center')}
`

export const ButtonWrapSC = {
  Ul,
  Li,
}
