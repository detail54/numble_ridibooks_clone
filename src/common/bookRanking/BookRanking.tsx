import React from 'react'
// interface
import { IBookRanking } from '../interface/interface'
// style
import { BookRankingSC } from './BookRanking.styles'
// common
import Time from '../time/Time'
import BookRankingItem from './BookRankingItem'
// image
import next from '../../asset/images/icons/next.png'

const BookRanking: React.FC<IBookRanking> = (props) => {
  const { bookData, header, bookSize, timer, LinkHeader } = props

  const timeComp = timer && <Time />

  const headerComp = LinkHeader ? (
    <BookRankingSC.LinkHeader to='/'>
      {header}
      <BookRankingSC.LinkHeaderImg src={next} />
    </BookRankingSC.LinkHeader>
  ) : (
    <BookRankingSC.TextHeader>{header}</BookRankingSC.TextHeader>
  )

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
        {headerComp}
      </BookRankingSC.Header>
      <BookRankingSC.ItemWrap bookSize={bookSize}>
        {books}
      </BookRankingSC.ItemWrap>
    </BookRankingSC.BookRankingWrap>
  )
}

export default BookRanking
