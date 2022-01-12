import React from 'react'
// interface
import { IBookRankingItem } from '../interface/interface'
// common
import StarRating from '../starRating/StarRating'
// style
import { BookRankingItemSC } from './BookRankingItem.styles'

const BookRankingItem: React.FC<IBookRankingItem> = (props) => {
  const { bookNumber, book, bookSize, underLine, starRate } = props

  const starRateComp = starRate && <StarRating starRate={book.starRate} />

  return (
    <BookRankingItemSC.ItemWrap>
      <BookRankingItemSC.BookThunbnail bookSize={bookSize}>
        <BookRankingItemSC.BookImg src={book.thumbnail} alt={book.title} />
        <BookRankingItemSC.BookBorder />
      </BookRankingItemSC.BookThunbnail>
      <BookRankingItemSC.BookInfoWrap underLine={underLine}>
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
          {starRateComp}
        </BookRankingItemSC.BookInfo>
      </BookRankingItemSC.BookInfoWrap>
    </BookRankingItemSC.ItemWrap>
  )
}

export default BookRankingItem
