import React from 'react'
// interface
import { IBookRanking } from '../interface/interface'
// style
import { BookRankingSC } from './BookRanking.styles'

const BookRanking: React.FC<IBookRanking> = (props) => {
  const { bookData, header } = props

  return (
    <BookRankingSC.BookRankingWrap>
      <BookRankingSC.Header>{header}</BookRankingSC.Header>
      {bookData.map((book) => (
        <div key={book.id}>{book.title}</div>
      ))}
    </BookRankingSC.BookRankingWrap>
  )
}

export default BookRanking
