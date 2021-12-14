import React from 'react'
// interface
import { IBookComp } from '../interface/interface'
// style
import { BookSC } from './Book.styles'
// common
import BookLabel from '../bookLabel/BookLabel'

const Book: React.FC<IBookComp> = (props) => {
  const { book, bookStyle } = props

  return (
    <BookSC.BookWrap>
      <BookLabel book={book} />
      <BookSC.BookLink to='/'>
        <BookSC.BookThumbnail
          src={book.thumbnail}
          alt={`${book.title} thumbnail`}
        />
        <BookSC.BookBorder />
      </BookSC.BookLink>
      <BookSC.BookInfo>
        <BookSC.BookTitle to='/' {...bookStyle}>
          {book.title}
        </BookSC.BookTitle>
        <BookSC.BookAuthor to='/'>{book.author.name}</BookSC.BookAuthor>
      </BookSC.BookInfo>
    </BookSC.BookWrap>
  )
}

export default Book
