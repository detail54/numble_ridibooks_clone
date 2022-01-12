import React from 'react'
// interface
import { IBookComp } from '../interface/interface'
// style
import { BookSC } from './Book.styles'
// common
import BookLabel from '../bookLabel/BookLabel'
import StarRating from '../starRating/StarRating'
// img
import defaultImg from '../../asset/images/icons/defaultImg.png'

const Book: React.FC<IBookComp> = (props) => {
  const { book, bookStyle, starRate } = props

  const imgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = defaultImg
    e.currentTarget.className = 'img-error'
  }

  const starRateComp = starRate && <StarRating starRate={book.starRate} />

  return (
    <BookSC.BookWrap>
      <BookLabel book={book} />
      <BookSC.BookLink to='/'>
        <BookSC.BookThumbnail
          src={book.thumbnail}
          onError={imgError}
          alt={`${book.title} thumbnail`}
        />
        <BookSC.BookBorder />
      </BookSC.BookLink>
      <BookSC.BookInfo>
        <BookSC.BookTitle to='/' {...bookStyle}>
          {book.title.replace('&amp;', '&')}
        </BookSC.BookTitle>
        <BookSC.BookAuthor to='/'>{book.author.name}</BookSC.BookAuthor>
      </BookSC.BookInfo>
      {starRateComp}
    </BookSC.BookWrap>
  )
}

export default Book
