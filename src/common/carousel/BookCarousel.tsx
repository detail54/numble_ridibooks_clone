import React, { useState, useEffect } from 'react'
// common
import Book from '../book/Book'
// interface
import { IBookCarousel, IMediaStyled } from '../interface/interface'
// style
import { BookCarouselSC } from './BookCarousel.styles'

const pixelChangeNumber = (data: string) => {
  return parseInt(data.substr(0, data.indexOf('px')), 10)
}

const BookCarousel: React.FC<IBookCarousel> = (props) => {
  const { header, booksData, buttonColor, mediaStyled } = props

  const [booksPage, setBooksPage] = useState<number>(1)
  const [hideNextButton, setHideNextButton] = useState<boolean>(false)
  const [hideBehindButton, setHideBehindButton] = useState<boolean>(true)

  // 처음 랜더링시 브라우저 너비저장 후,
  // 브라우저 너비 변경시 changeBrowserWidth를 통해 실행할 작업들 진행 후 변경된 너비 값으로 저장
  // ** 브라우저 크기 변경 이전 너비 확인 용도 **
  const [browserWidth, setBrowserWidth] = useState<number>(window.innerWidth)
  // 브라우저 너비 변경될때마다 저장.
  const [changeBrowserWidth, setChangeBrowserWidth] = useState<number>(
    window.innerWidth,
  )

  const [booksMoveStyle, setBooksMoveStyle] = useState<IMediaStyled>({
    ...mediaStyled,
  })

  const bookListWidth =
    booksData.length * (pixelChangeNumber(mediaStyled.mediaAWidth) + 12)

  const totalBooksPage = Math.ceil(booksData.length / 6)
  const remainderBookCount = booksData.length % 6

  const numMediaATransform = pixelChangeNumber(booksMoveStyle.mediaATransform)
  const numMediaBWidth = pixelChangeNumber(booksMoveStyle.mediaBWidth)
  const numMediaBTransform = pixelChangeNumber(booksMoveStyle.mediaBTransform)

  const maxMediaBTransform =
    pixelChangeNumber(mediaStyled.mediaBTransform || '') -
    (numMediaBWidth + 22) * (booksData.length - 6)

  const setBooksMoveA = (mediaATransform: string) => {
    setBooksMoveStyle({
      ...booksMoveStyle,
      mediaATransform,
    })
  }

  const setBooksMoveB = (booksPageNumber: number, mediaBTransform: string) => {
    setBooksPage(booksPageNumber)
    setBooksMoveStyle({
      ...booksMoveStyle,
      mediaBTransform,
    })
  }

  useEffect(() => {
    // 브라우저 너비 1000 미만일때만 브라우저 너비 변경 감지.
    if (changeBrowserWidth < pixelChangeNumber(mediaStyled.mediaBMinWidth)) {
      window.addEventListener('resize', () =>
        setChangeBrowserWidth(window.innerWidth),
      )
    }
  }, [])

  useEffect(() => {
    // 브라우저 너비 1000 미만일때만 브라우저 너비 변경시 실행.
    if (changeBrowserWidth < pixelChangeNumber(mediaStyled.mediaBMinWidth)) {
      if (
        numMediaATransform - browserWidth >
        parseInt(
          `-${bookListWidth + pixelChangeNumber(mediaStyled.mediaATransform)}`,
          10,
        )
      ) {
        setHideNextButton(false)
      } else if (browserWidth < changeBrowserWidth) {
        setBooksMoveA(
          `${numMediaATransform - (browserWidth - changeBrowserWidth)}px`,
        )
      }
      setBrowserWidth(changeBrowserWidth)
    }
  }, [changeBrowserWidth])

  const nextBooks = () => {
    // MediaA 조건
    if (changeBrowserWidth < pixelChangeNumber(mediaStyled.mediaBMinWidth)) {
      if (
        numMediaATransform - changeBrowserWidth <
        bookListWidth - changeBrowserWidth
      ) {
        setBooksMoveA(`${numMediaATransform - changeBrowserWidth}px`)
        setHideBehindButton(false)
      }
      if (
        numMediaATransform - changeBrowserWidth <=
        parseInt(`-${bookListWidth - changeBrowserWidth}`, 10)
      ) {
        setBooksMoveA(
          `-${
            bookListWidth -
            changeBrowserWidth +
            pixelChangeNumber(mediaStyled.mediaATransform)
          }px`,
        )
        setHideNextButton(true)
      }

      // MediaB 조건
    } else if (
      changeBrowserWidth >= pixelChangeNumber(mediaStyled.mediaBMinWidth)
    ) {
      if (booksPage === totalBooksPage) {
        setBooksMoveB(1, `${mediaStyled.mediaBTransform}`)
      } else if (booksPage < totalBooksPage) {
        if (booksPage + 1 === totalBooksPage) {
          if (remainderBookCount > 0) {
            setBooksMoveB(
              booksPage + 1,
              `${
                numMediaBTransform - (numMediaBWidth + 22) * remainderBookCount
              }px`,
            )
          } else if (remainderBookCount === 0) {
            setBooksMoveB(
              booksPage + 1,
              `${numMediaBTransform - (numMediaBWidth + 22) * 6}px`,
            )
          }
        } else {
          setBooksMoveB(
            booksPage + 1,
            `${numMediaBTransform - (numMediaBWidth + 22) * 6}px`,
          )
        }
      }
    }
  }

  const behindBooks = () => {
    // MediaA 조건
    if (changeBrowserWidth < pixelChangeNumber(mediaStyled.mediaBMinWidth)) {
      if (
        numMediaATransform + changeBrowserWidth >=
        pixelChangeNumber(mediaStyled.mediaATransform)
      ) {
        setBooksMoveA(mediaStyled.mediaATransform)
        setHideBehindButton(true)
      } else {
        setBooksMoveA(`${numMediaATransform + changeBrowserWidth}px`)
        setHideNextButton(false)
      }

      // MediaB 조건
    } else if (
      changeBrowserWidth >= pixelChangeNumber(mediaStyled.mediaBMinWidth)
    ) {
      if (booksPage === 2) {
        if (remainderBookCount > 0) {
          setBooksMoveB(1, `${mediaStyled.mediaBTransform}`)
        } else if (remainderBookCount === 0) {
          setBooksMoveB(
            booksPage + 1,
            `${numMediaBTransform + (numMediaBWidth + 22) * 6}px`,
          )
        }
      } else if (
        booksMoveStyle.mediaBTransform === mediaStyled.mediaBTransform
      ) {
        setBooksMoveB(totalBooksPage, `${maxMediaBTransform}px`)
      } else {
        setBooksMoveB(
          booksPage - 1,
          `${numMediaBTransform + (numMediaBWidth + 22) * 6}px`,
        )
      }
    }
  }

  const bookList = (
    <BookCarouselSC.BookList {...booksMoveStyle}>
      {booksData.map((book) => (
        <BookCarouselSC.BookItem key={book.id} {...booksMoveStyle}>
          <Book book={book} />
        </BookCarouselSC.BookItem>
      ))}
    </BookCarouselSC.BookList>
  )

  const leftButton = totalBooksPage > 1 && (
    <BookCarouselSC.BehindButton
      onClick={behindBooks}
      buttonColor={buttonColor}
      mediaStyled={booksMoveStyle}
      hide={hideBehindButton}
    />
  )

  const rightButton = totalBooksPage > 1 && (
    <BookCarouselSC.NextButton
      onClick={nextBooks}
      buttonColor={buttonColor}
      mediaStyled={booksMoveStyle}
      hide={hideNextButton}
    />
  )

  return (
    <BookCarouselSC.BookCarouselWrap {...booksMoveStyle}>
      <BookCarouselSC.Header>{header}</BookCarouselSC.Header>
      <BookCarouselSC.BooksWrap>
        <BookCarouselSC.Books {...booksMoveStyle}>
          {bookList}
        </BookCarouselSC.Books>
      </BookCarouselSC.BooksWrap>
      <BookCarouselSC.ControlContainer>
        <BookCarouselSC.Left>{leftButton}</BookCarouselSC.Left>
        <BookCarouselSC.Right>{rightButton}</BookCarouselSC.Right>
      </BookCarouselSC.ControlContainer>
    </BookCarouselSC.BookCarouselWrap>
  )
}

export default BookCarousel
