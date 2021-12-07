import React from 'react'
import { IBook } from '../../config/data/books'
import { BookSC } from './Book.styles'

const Book: React.FC<IBook> = (props) => {
  const { thumbnail, title, author } = props

  return (
    <BookSC.BookWrap>
      <BookSC.BookLink to='/'>
        <BookSC.BookThumbnail src={thumbnail} alt={`${title} thumbnail`} />
      </BookSC.BookLink>
      <BookSC.BookInfo>
        <BookSC.BookTitle to='/'>{title}</BookSC.BookTitle>
        <BookSC.BookAuthor to='/'>{author.name}</BookSC.BookAuthor>
      </BookSC.BookInfo>
    </BookSC.BookWrap>
  )
}

export default Book
