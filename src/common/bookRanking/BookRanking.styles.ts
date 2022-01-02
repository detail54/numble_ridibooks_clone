import styled from 'styled-components'
// lib
import { Link } from 'react-router-dom'
// global style
import { setStyles } from '../../asset/css/GlobalStyle'
// interface
import { IBookRankingItemStyle } from '../interface/interface'
// image
import next from '../../asset/images/icons/next.png'
import behind from '../../asset/images/icons/behind.png'

const BookRankingWrap = styled.div`
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
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

const RankingItemBox = styled.div`
  position: relative;
  width: 100%;
`

const ItemWrap = styled.ul`
  width: 100%;
  position: relative;
  display: grid;
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
  transform: ${(props: IBookRankingItemStyle) =>
    props.compTransform && `translate(${props.compTransform}px)`};
  transition: 0.4s;

  &::before {
    width: 100%;
  }
`

const BehindButton = styled.button`
  background-image: url(${behind});
  background-size: 13px 13px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
  border-radius: 30px;
  border: none;
  width: 40px;
  height: 40px;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 2%;
  transform: translateY(-50%);
  cursor: pointer;
  opacity: 0.95;
  box-shadow: 0 0.8px 3px rgb(0 0 0 / 33%);

  &:hover {
    opacity: 0.7;
  }
`

const NextButton = styled.button`
  background-image: url(${next});
  background-size: 13px 13px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
  border-radius: 30px;
  border: none;
  opacity: 0.8;
  width: 40px;
  height: 40px;
  z-index: 2;
  position: absolute;
  top: 50%;
  right: 2%;
  transform: translateY(-50%);
  cursor: pointer;
  opacity: 0.95;
  box-shadow: 0 0.8px 3px rgb(0 0 0 / 33%);

  &:hover {
    opacity: 0.7;
  }
`

export const BookRankingSC = {
  BookRankingWrap,
  Header,
  TextHeader,
  LinkHeader,
  LinkHeaderImg,
  RankingItemBox,
  ItemWrap,
  BehindButton,
  NextButton,
}
