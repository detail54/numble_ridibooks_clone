import React, { useEffect, useState } from 'react'
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

  const [browserWidth, setBrowserWidth] = useState<number>(window.innerWidth)
  const [compTransform, setCompTransform] = useState<number>(0)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setBrowserWidth(window.innerWidth)
    })
  }, [])

  console.log(browserWidth)
  console.log(compTransform)

  const onMoveComp = () => {
    if (compTransform === 0) {
      setCompTransform(-100)
    } else {
      setCompTransform(0)
    }
  }

  const nextButton = browserWidth < 900 && compTransform === 0 && (
    <BookRankingSC.NextButton onClick={onMoveComp} />
  )

  const behindButton = browserWidth < 900 && compTransform === -100 && (
    <BookRankingSC.BehindButton onClick={onMoveComp} />
  )

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
      <BookRankingSC.RankingItemBox>
        {behindButton}
        <BookRankingSC.ItemWrap
          bookSize={bookSize}
          compTransform={compTransform}
        >
          {books}
        </BookRankingSC.ItemWrap>
        {nextButton}
      </BookRankingSC.RankingItemBox>
    </BookRankingSC.BookRankingWrap>
  )
}

export default BookRanking
