import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { setStyles } from '../../asset/css/GlobalStyle'

const BookWrap = styled.div`
  width: 100%;
  position: relative;
  margin-top: 8px;
`

const BookLink = styled(Link)`
  display: block;
  ${setStyles.setWidthAndHeight('100%', '100%')}
  text-decoration: none;
`

const BookThumbnail = styled.img`
  ${setStyles.setWidthAndHeight('100%', '100%')}
`

const BookInfo = styled.div`
  ${setStyles.setWidthAndHeight('100%', '100%')}
  margin-top: 6px;
`

const BookTitle = styled(Link)`
  ${setStyles.setWidthAndHeight('100%', '100%')}
  ${setStyles.setFontWeight('bold')}
  display: block;
  color: white;
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
  BookInfo,
  BookTitle,
  BookAuthor,
}
