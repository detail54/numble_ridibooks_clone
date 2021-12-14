import styled from 'styled-components'
// lib
import { Link } from 'react-router-dom'
// global style
import { setStyles } from '../../asset/css/GlobalStyle'
// interface
import { IBookRankingItemStyle } from '../interface/interface'

const ItemWrap = styled.li`
  ${setStyles.setAlignY('center')}
  list-style: none;
  display: flex;
`

const BookThunbnail = styled.div`
  height: 100%;
  margin-right: 18px;
  position: relative;
  height: ${(props: IBookRankingItemStyle) => props.height || '117px'};
  width: ${(props: IBookRankingItemStyle) => props.width || '80px'};
`

const BookImg = styled.img`
  width: 100%;
  height: 100%;
`

const BookBorder = styled.div`
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.2) 0,
    rgba(0, 0, 0, 0) 5%,
    rgba(0, 0, 0, 0) 95%,
    rgba(0, 0, 0, 0.2) 100%
  );
  border: 1px solid rgba(0, 0, 0, 0.1);
`

const BookInfoWrap = styled.div`
  ${setStyles.setAlignY('center')}
  height: 100%;
  flex: 1 1 auto;
  border-bottom: 1px solid #eeeeee;
`

const BookNumber = styled.h3`
  height: 22px;
  margin-right: 21px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  flex: 0 0 auto;
`

const BookInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

const BookTitle = styled(Link)`
  ${setStyles.setFontWeight('bold')}
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  max-height: calc(1.4em * 2);
  line-height: 1.4em;
  text-decoration: none;
  color: black;
`

const BookAuth = styled(Link)`
  ${setStyles.setFontWeight('regular')}
  line-height: 1.2em;
  overflow-wrap: break-word;
  color: #636c73;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  padding: 1px 0 1px;
  margin-top: 4px;
  text-decoration: none;
`

export const BookRankingItemSC = {
  ItemWrap,
  BookThunbnail,
  BookImg,
  BookBorder,
  BookNumber,
  BookInfoWrap,
  BookInfo,
  BookTitle,
  BookAuth,
}
