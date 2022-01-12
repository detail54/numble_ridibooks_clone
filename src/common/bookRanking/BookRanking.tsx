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
// hooks
import useBrowserWidth from '../../hooks/useBrowserWidth'

const BookRanking: React.FC<IBookRanking> = (props) => {
  const { bookData, header, bookSize, timer, LinkHeader, starRate } = props

  const { browserWidth } = useBrowserWidth()
  const [beforeBrowserWidth, setBeforeBrowserWidth] = useState<number>(
    window.innerWidth,
  )
  const [compTransform, setCompTransform] = useState<number>(0)

  // 브라우저 크기 변경시 리렌더링 횟수 줄이기 위해 setTimeout사용
  let setTimer: ReturnType<typeof setTimeout>
  useEffect(() => {
    clearTimeout(setTimer)

    setTimer = setTimeout(() => {
      if (browserWidth > 900) {
        setCompTransform(0)
        return
      }

      if (compTransform < 0) {
        const moveWidth = browserWidth - beforeBrowserWidth
        setCompTransform(compTransform + moveWidth)
      }
      setBeforeBrowserWidth(browserWidth)
    }, 50)
  }, [browserWidth])

  const onNext = () => {
    if (compTransform + browserWidth * -1 < -1048 + browserWidth) {
      setCompTransform((1000 - browserWidth) * -1)
    } else {
      setCompTransform(compTransform + browserWidth * -1)
    }
  }

  const onBehind = () => {
    if (compTransform + browserWidth > 0) {
      setCompTransform(0)
    } else {
      setCompTransform(compTransform + browserWidth)
    }
  }

  const nextButton = browserWidth < 900 && compTransform === 0 && (
    <BookRankingSC.NextButton onClick={onNext} />
  )

  const behindButton = browserWidth < 900 && compTransform < 0 && (
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
      starRate={starRate}
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
