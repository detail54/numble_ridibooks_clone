import styled from 'styled-components'
// global style
import { setStyles } from '../../asset/css/GlobalStyle'

const HomeMenu = styled.nav`
  border-bottom: 1px solid #e3e3e3;
  margin-bottom: 20px;
  ${setStyles.setWidthAndHeight('100%', '48px')}
  ${setStyles.setAlignX('center')}
  ${setStyles.setAlignY('center')}
`

const BookTab = styled.div`
  width: 100%;
  max-width: 1000px;

  ul {
    margin: 0px;
    padding: 0px;
  }
`

export const HomeSC = {
  HomeMenu,
  BookTab,
}
