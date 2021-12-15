import React from 'react'
// interface
import { IBookRanking } from '../interface/interface'
// style
import { BookRankingSC } from './BookRanking.styles'
// common
import Time from '../time/Time'
import BookRankingItem from './BookRankingItem'

const BookRanking: React.FC<IBookRanking> = (props) => {
  const { bookData, header, bookSize, timer } = props

  const timeComp = timer && <Time />

  const books = bookData.map((book, index) => (
    <BookRankingItem
      key={book.id}
      bookNumber={index + 1}
      book={book}
      bookSize={bookSize}
      underLine={(index + 1) % 3 !== 0 && true}
    />
  ))

  return (
    <BookRankingSC.BookRankingWrap>
      <BookRankingSC.Header>
        {timeComp}
        {header}
      </BookRankingSC.Header>
      <BookRankingSC.ItemWrap bookSize={bookSize}>
        {books}
      </BookRankingSC.ItemWrap>
    </BookRankingSC.BookRankingWrap>
  )
}

export default BookRanking
