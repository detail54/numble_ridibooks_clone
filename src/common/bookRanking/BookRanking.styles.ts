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
  margin: 0 auto 16px;
  padding: 6px 20px 0;
  display: flex;
  font-size: 19px;
  flex-direction: column;
  font-weight: normal;
  color: black;
`

export const BookRankingSC = {
  BookRankingWrap,
  Header,
}
