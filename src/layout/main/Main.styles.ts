import styled from 'styled-components'
// global style
import { setStyles } from '../../asset/css/GlobalStyle'

const Main = styled.main`
  ${setStyles.setWidthAndHeight('100%', '100%')}
  overflow: hidden;
`

export const MainSC = {
  Main,
}
