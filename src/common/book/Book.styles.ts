import styled from 'styled-components'
// lib
import { Link } from 'react-router-dom'
// style
import { setStyles } from '../../asset/css/GlobalStyle'
// interface
import { IBookStyle } from '../interface/interface'

const BookWrap = styled.div`
  width: 100%;
  position: relative;
  margin-top: 8px;
`

const BookLink = styled(Link)`
  display: block;
  ${setStyles.setWidthAndHeight('100%', '100%')}
  position: relative;
  text-decoration: none;
  overflow: hidden;
`

const BookThumbnail = styled.img`
  ${setStyles.setWidthAndHeight('100%', '100%')}

  .img-error {
    height: 219px;
  }
`

const BookBorder = styled.div`
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - 2px);
  height: calc(100% - 4px);
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.2) 0,
    rgba(0, 0, 0, 0) 5%,
    rgba(0, 0, 0, 0) 95%,
    rgba(0, 0, 0, 0.2) 100%
  );
  border: 1px solid rgba(0, 0, 0, 0.1);
`

const BookInfo = styled.div`
  ${setStyles.setWidthAndHeight('100%', '100%')}
  margin-top: 6px;
`

const BookTitle = styled(Link)`
  ${setStyles.setWidthAndHeight('100%', '100%')}
  ${setStyles.setFontWeight('bold')}
  display: block;
  color: ${(props: IBookStyle) => props.color || 'black'};
  text-decoration: none;
`

const BookAuthor = styled(Link)`
  display: block;
  color: #9ea7ad;
  margin-top: 5px;
  text-decoration: none;
`

export const BookSC = {
  BookWrap,
  BookLink,
  BookThumbnail,
  BookBorder,
  BookInfo,
  BookTitle,
  BookAuthor,
}
