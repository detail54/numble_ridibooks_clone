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

  const resizeCompMove = (browserWidth: number) => {
    console.log(compTransform)
    if (compTransform !== 0) {
      const moveWidth = browserWidth - beforeBrowserWidth
      setAfterBrowserWidth(compTransform + moveWidth)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      setBeforeBrowserWidth(afterBrowserWidth)
      setAfterBrowserWidth(window.innerWidth)
      resizeCompMove(window.innerWidth)
    })

    return () => {
      window.removeEventListener('resize', () => {
        setBeforeBrowserWidth(afterBrowserWidth)
        setAfterBrowserWidth(window.innerWidth)
        resizeCompMove(window.innerWidth)
      })
    }
  }, [])

  const onNext = () => {
    if (compTransform + afterBrowserWidth * -1 < -1048 + afterBrowserWidth) {
      setCompTransform((1000 - afterBrowserWidth) * -1)
    } else {
      setCompTransform(compTransform + afterBrowserWidth * -1)
    }
  }

  const onBehind = () => {
    if (compTransform + afterBrowserWidth > 0) {
      setCompTransform(0)
    } else {
      setCompTransform(compTransform + afterBrowserWidth)
    }
  }

  const nextButton = afterBrowserWidth < 900 && compTransform === 0 && (
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
