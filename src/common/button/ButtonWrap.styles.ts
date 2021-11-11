import styled from 'styled-components'
// global style
import { setStyles } from '../../GlobalStyle'

const Ul = styled.ul`
  ${setStyles.setAlignX('center')}
  ${setStyles.setAlignY('center')}
`

const Li = styled.li`
  ${setStyles.setAlignX('center')}
  ${setStyles.setAlignY('center')}
`

export const ButtonWrapSC = {
  Ul,
  Li,
}
