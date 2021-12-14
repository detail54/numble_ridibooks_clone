import React from 'react'
// interface
import { IBookRanking } from '../interface/interface'
// style
import { BookRankingSC } from './BookRanking.styles'
// common
import Time from '../time/Time'
import BookRankingItem from './BookRankingItem'

const BookRanking: React.FC<IBookRanking> = (props) => {
  const { bookData, header, bookStyle, timer } = props

  const timeComp = timer && <Time />

  const books = bookData.map((book, index) => (
    <BookRankingItem
      key={book.id}
      bookNumber={index + 1}
      book={book}
      bookStyle={bookStyle}
    />
  ))

  return (
    <BookRankingSC.BookRankingWrap>
      <BookRankingSC.Header>
        {timeComp}
        {header}
      </BookRankingSC.Header>
      <BookRankingSC.ItemWrap>{books}</BookRankingSC.ItemWrap>
    </BookRankingSC.BookRankingWrap>
  )
}

export default BookRanking
