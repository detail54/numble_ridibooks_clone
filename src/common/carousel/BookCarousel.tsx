import React, { useState, useEffect } from 'react'
// global style
import { setStyles } from '../../asset/css/GlobalStyle'
// hook
import useBrowserWidth from '../../hooks/useBrowserWidth'
// common
import Book from '../book/Book'
// interface
import { IBookCarousel, IMediaStyled } from '../interface/interface'
// style
import { BookCarouselSC } from './BookCarousel.styles'

const pixelChangeNumber = (data: string) => {
  return parseInt(data.substring(0, data.indexOf('px')), 10)
}

const BookCarousel: React.FC<IBookCarousel> = (props) => {
  const { header, booksData, buttonColor, mediaStyled, bookStyle } = props

  const [booksPage, setBooksPage] = useState<number>(1)
  const [hideNextButton, setHideNextButton] = useState<boolean>(false)
  const [hideBehindButton, setHideBehindButton] = useState<boolean>(true)

  const { browserWidth } = useBrowserWidth()
  const [beforeBrowserWidth, setBeforeBrowserWidth] = useState<number>(
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

  // 브라우저 크기 변경시 리렌더링 횟수 줄이기 위해 setTimeout사용
  let setTimer: ReturnType<typeof setTimeout>
  useEffect(() => {
    clearTimeout(setTimer)

    setTimer = setTimeout(() => {
      // 브라우저 너비 1000 미만일때만 브라우저 너비 변경시 실행.
      if (browserWidth < pixelChangeNumber(setStyles.mediaWidth.mediaB)) {
        if (hideNextButton) {
          setBooksMoveA(
            `${numMediaATransform - (beforeBrowserWidth - browserWidth)}px`,
          )
        }
        setBeforeBrowserWidth(browserWidth)
      }
    }, 50)
  }, [browserWidth])

  // useEffect(() => {
  //   // 브라우저 너비 1000 미만일때만 브라우저 너비 변경시 실행.
  //   if (browserWidth < pixelChangeNumber(setStyles.mediaWidth.mediaA)) {
  //     if (
  //       numMediaATransform - beforeBrowserWidth >
  //       (bookListWidth + pixelChangeNumber(mediaStyled.mediaATransform)) * -1
  //     ) {
  //       setHideNextButton(false)
  //     } else if (beforeBrowserWidth < browserWidth) {
  //       setBooksMoveA(
  //         `${numMediaATransform - (beforeBrowserWidth - browserWidth)}px`,
  //       )
  //     }
  //     setBeforeBrowserWidth(browserWidth)
  //   }
  // }, [browserWidth])

  const nextBooks = () => {
    // MediaA 조건
    if (browserWidth < pixelChangeNumber(setStyles.mediaWidth.mediaB)) {
      if (numMediaATransform - browserWidth < bookListWidth - browserWidth) {
        setBooksMoveA(`${numMediaATransform - browserWidth}px`)
        setHideBehindButton(false)
      }
      if (
        numMediaATransform - browserWidth <=
        parseInt(`-${bookListWidth - browserWidth}`, 10)
      ) {
        setBooksMoveA(
          `-${
            bookListWidth -
            browserWidth +
            pixelChangeNumber(mediaStyled.mediaATransform)
          }px`,
        )
        setHideNextButton(true)
      }

      // MediaB 조건
    } else if (browserWidth >= pixelChangeNumber(setStyles.mediaWidth.mediaB)) {
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
    if (browserWidth < pixelChangeNumber(setStyles.mediaWidth.mediaB)) {
      if (
        numMediaATransform + browserWidth >=
        pixelChangeNumber(mediaStyled.mediaATransform)
      ) {
        setBooksMoveA(mediaStyled.mediaATransform)
        setHideBehindButton(true)
      } else {
        setBooksMoveA(`${numMediaATransform + browserWidth}px`)
        setHideNextButton(false)
      }

      // MediaB 조건
    } else if (browserWidth >= pixelChangeNumber(setStyles.mediaWidth.mediaB)) {
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
        <BookCarouselSC.BookItem
          key={book.id}
          {...booksMoveStyle}
          {...buttonColor}
        >
          <Book book={book} bookStyle={bookStyle} />
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
      <BookCarouselSC.Header {...bookStyle}>{header}</BookCarouselSC.Header>
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
