import styled from 'styled-components'
// global style
import { setStyles } from '../../asset/css/GlobalStyle'

const HomeMenu = styled.nav`
  width: 100%;
  border-bottom: 1px solid #e3e3e3;
  margin-bottom: 20px;
  ${setStyles.setWidthAndHeight('100%', '48px')}
  ${setStyles.setAlignX('center')}
  ${setStyles.setAlignY('center')}
`

const BookTab = styled.div`
  max-width: 1000px;
  width: 100%;

  ul {
    margin: 0px;
    padding: 0px;
    width: 100%;
    @media (min-width: ${setStyles.mediaWidth.mediaA}) {
      ${setStyles.setAlignX('center')}
      ${setStyles.setAlignY('center')}
    }
    @media (min-width: ${setStyles.mediaWidth.mediaB}) {
      ${setStyles.setAlignX('left')}
      ${setStyles.setAlignY('center')}
    }
    li {
      @media (min-width: ${setStyles.mediaWidth.mediaA}) {
        flex-grow: 1;
      }
      @media (min-width: ${setStyles.mediaWidth.mediaB}) {
        flex-grow: 0;
        padding: 0px 22px;
      }
    }
  }
`

const MenuIcon = styled.img`
  ${setStyles.setWidthAndHeight('24px', '24px')}
`

export const HomeSC = {
  HomeMenu,
  BookTab,
  MenuIcon,
}
