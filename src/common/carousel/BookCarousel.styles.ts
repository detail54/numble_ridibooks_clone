import styled from 'styled-components'
import { setStyles } from '../../asset/css/GlobalStyle'

const BookCarouselWrap = styled.div`
  max-width: 1000px;
  ${setStyles.setAlignY('center')}
  ${setStyles.setAlignX('center')}
  flex-direction: column;
  flex-wrap: nowrap;
`

const Header = styled.h1`
  padding: 6px 25px 0px;
  font-size: 19px;
  font-weight: normal;
  color: white;
  max-width: 1000px;
`

const Books = styled.ul`
  width: 100%;
`

export const BookCarouselSC = {
  BookCarouselWrap,
  Header,
  Books,
}
