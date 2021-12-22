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

  const [beforeBrowserWidth, setBeforeBrowserWidth] = useState<number>(
    window.innerWidth,
  )
  const [afterBrowserWidth, setAfterBrowserWidth] = useState<number>(
    window.innerWidth,
  )
  const [compTransform, setCompTransform] = useState<number>(0)

  const elementWidth = 1048

  useEffect(() => {
    window.addEventListener('resize', () => {
      setAfterBrowserWidth(window.innerWidth)
    })
  }, [])

  const onNext = () => {
    if (compTransform === 0) {
      setCompTransform(parseInt(`-${compTransform + afterBrowserWidth}`, 10))
    }
  }

  const onBehind = () => {
    setCompTransform(compTransform + afterBrowserWidth)
    // if (compTransform === parseInt(`-${elementWidth - browserWidth}`, 10)) {
    // }
  }

  const nextButton = afterBrowserWidth < 900 && compTransform > -1048 && (
    <BookRankingSC.NextButton onClick={onNext} />
  )

  const behindButton = afterBrowserWidth < 900 && compTransform < 0 && (
    <BookRankingSC.BehindButton onClick={onBehind} />
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
