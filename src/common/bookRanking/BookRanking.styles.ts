import styled from 'styled-components'
// lib
import { Link } from 'react-router-dom'
// global style
import { setStyles } from '../../asset/css/GlobalStyle'
// interface
import { IBookRankingItemStyle } from '../interface/interface'

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
  flex-direction: column;
  font-weight: normal;
  color: black;
`

const TextHeader = styled.span`
  font-size: 19px;
  ${setStyles.setFontWeight('regular')}
`

const LinkHeader = styled(Link)`
  ${setStyles.setFontWeight('regular')}
  font-size: 19px;
  text-decoration: none;
  color: black;
`

const LinkHeaderImg = styled.img`
  width: 15px;
  height: 14px;
  margin-left: 9px;
`

const ItemWrap = styled.ul`
  display: grid;
  grid: ${(props: IBookRankingItemStyle) =>
    props.bookSize === 'large' ? 'repeat(3, 138px)' : 'repeat(3, 94px)'};
  grid-template-rows: ${(props: IBookRankingItemStyle) =>
    props.bookSize === 'large' ? 'repeat(3, 138px)' : 'repeat(3, 94px)'};
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
  TextHeader,
  LinkHeader,
  LinkHeaderImg,
  ItemWrap,
}
