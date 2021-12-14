import React from 'react'
// interface
import { IBookRankingItem } from '../interface/interface'
// style
import { BookRankingItemSC } from './BookRankingItem.styles'

const BookRankingItem: React.FC<IBookRankingItem> = (props) => {
  const { bookNumber, book, bookStyle } = props

  return (
    <BookRankingItemSC.ItemWrap>
      <BookRankingItemSC.BookThunbnail {...bookStyle}>
        <BookRankingItemSC.BookImg src={book.thumbnail} alt={book.title} />
        <BookRankingItemSC.BookBorder />
      </BookRankingItemSC.BookThunbnail>
      <BookRankingItemSC.BookInfoWrap>
        <BookRankingItemSC.BookNumber>
          {bookNumber}
        </BookRankingItemSC.BookNumber>
        <BookRankingItemSC.BookInfo>
          <BookRankingItemSC.BookTitle to='/'>
            {book.title}
          </BookRankingItemSC.BookTitle>
          <BookRankingItemSC.BookAuth to='/'>
            {book.author.name}
          </BookRankingItemSC.BookAuth>
        </BookRankingItemSC.BookInfo>
      </BookRankingItemSC.BookInfoWrap>
    </BookRankingItemSC.ItemWrap>
  )
}

export default BookRankingItem
