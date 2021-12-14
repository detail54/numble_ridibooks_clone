import styled from 'styled-components'
// global style
import { setStyles } from '../../asset/css/GlobalStyle'

const BookRankingWrap = styled.div`
  flex-direction: column;
  max-width: 1000px;
  width: 100%;
  ${setStyles.setAlignX('left')}
`

const Header = styled.h1`
  max-width: 990px;
  margin: 0;
  margin-bottom: 16px;
  padding: 6px 20px 0;
  display: flex;
  font-size: 19px;
  flex-direction: column;
  font-weight: normal;
  color: black;
`

const ItemWrap = styled.ul`
  display: grid;
  grid: repeat(3, 94px);
  grid-template-rows: repeat(3, 94px);
  grid-template-columns: initial;
  grid-template-areas: initial;
  grid-auto-flow: column;
  grid-auto-rows: initial;
  grid-auto-columns: 308px;
  grid-column-gap: 13px;
  padding: 0 24px;
  list-style-type: disc;
`

export const BookRankingSC = {
  BookRankingWrap,
  Header,
  ItemWrap,
}
