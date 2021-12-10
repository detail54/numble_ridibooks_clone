import React, { useState, useEffect, useRef } from 'react'
// common
import Book from '../book/Book'
// interface
import { IBookCarousel, IMediaStyled } from '../interface/interface'
// style
import { BookCarouselSC } from './BookCarousel.styles'

const BookCarousel: React.FC<IBookCarousel> = (props) => {
  const { header, booksData, buttonColor, mediaStyled } = props
  const [booksMoveStyle, setBooksMoveStyle] = useState<IMediaStyled>({
    ...mediaStyled,
  })
  const [booksPage, setBooksPage] = useState<number>(1)
  const [hideNextButton, setHideNextButton] = useState<boolean>(false)
  const [hideBehindButton, setHideBehindButton] = useState<boolean>(true)
  const [bookListWidth, setBookListWidht] = useState<number>()
  const bookListRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    setBookListWidht(bookListRef.current?.offsetWidth)
  }, [])

  const totalBooksPage = Math.ceil(booksData.length / 6)
  const remainderBookCount = booksData.length % 6

  const pixelChangeNumber = (data: string) => {
    return parseInt(data.substr(0, data.indexOf('px')), 10)
  }

  const numMediaAWidth = pixelChangeNumber(booksMoveStyle.mediaAWidth)

  const numMediaATransform =
    booksMoveStyle.mediaATransform &&
    pixelChangeNumber(booksMoveStyle.mediaATransform)

  const numMediaBWidth = pixelChangeNumber(booksMoveStyle.mediaBWidth)

  const numMediaBTransform =
    booksMoveStyle.mediaBTransform &&
    pixelChangeNumber(booksMoveStyle.mediaBTransform)

  const maxMediaBTransform =
    pixelChangeNumber(mediaStyled.mediaBTransform || '') -
    (Number(numMediaBWidth) + 22) * (booksData.length - 6)

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

  const nextBooks = () => {
    // MediaA 조건
    console.log('ggggg')
    console.log('window.innerWidth:::', window.innerWidth)
    console.log('numMediaATransform:::', numMediaATransform)
    console.log(
      'Number(bookListWidth) - window.innerWidth:::',
      Number(bookListWidth) - window.innerWidth,
    )
    if (window.innerWidth < pixelChangeNumber(mediaStyled.mediaBMinWidth)) {
      if (
        Number(numMediaATransform) - window.innerWidth <
        Number(bookListWidth) - window.innerWidth
      ) {
        setBooksMoveA(`3085px`)
      }
      if (
        `-${numMediaATransform}` ===
        `${Number(bookListWidth) - window.innerWidth}`
      ) {
        setHideNextButton(true)
      }
      setBooksMoveA(`${Number(numMediaATransform) - window.innerWidth}px`)

      // MediaB 조건
    } else if (
      window.innerWidth >= pixelChangeNumber(mediaStyled.mediaBMinWidth)
    ) {
      if (booksPage === totalBooksPage) {
        setBooksMoveB(1, `${mediaStyled.mediaBTransform}`)
      } else if (booksPage < totalBooksPage) {
        if (booksPage + 1 === totalBooksPage) {
          if (remainderBookCount > 0) {
            setBooksMoveB(
              booksPage + 1,
              `${
                Number(numMediaBTransform) -
                (Number(numMediaBWidth) + 22) * remainderBookCount
              }px`,
            )
          } else if (remainderBookCount === 0) {
            setBooksMoveB(
              booksPage + 1,
              `${
                Number(numMediaBTransform) - (Number(numMediaBWidth) + 22) * 6
              }px`,
            )
          }
        } else {
          setBooksMoveB(
            booksPage + 1,
            `${
              Number(numMediaBTransform) - (Number(numMediaBWidth) + 22) * 6
            }px`,
          )
        }
      }
    }
  }

  const behindBooks = () => {
    if (booksPage === 2) {
      if (remainderBookCount > 0) {
        setBooksMoveB(1, `${mediaStyled.mediaBTransform}`)
      } else if (remainderBookCount === 0) {
        setBooksMoveB(
          booksPage + 1,
          `${Number(numMediaBTransform) + (Number(numMediaBWidth) + 22) * 6}px`,
        )
      }
    } else if (booksMoveStyle.mediaBTransform === mediaStyled.mediaBTransform) {
      setBooksMoveB(totalBooksPage, `${maxMediaBTransform}px`)
    } else {
      setBooksMoveB(
        booksPage - 1,
        `${Number(numMediaBTransform) + (Number(numMediaBWidth) + 22) * 6}px`,
      )
    }
  }

  // const setBooksMove = (
  //   booksPageNumber: number,
  //   mediaATransform: string,
  //   mediaBTransform: string,
  // ) => {
  //   setBooksPage(booksPageNumber)
  //   setBooksMoveStyle({
  //     ...booksMoveStyle,
  //     mediaATransform,
  //     mediaBTransform,
  //   })
  // }

  // const nextBooks = () => {
  //   if (booksPage === totalBooksPage) {
  //     setHideBehindButton(true)
  //     setBooksMove(
  //       1,
  //       `${mediaStyled.mediaATransform}`,
  //       `${mediaStyled.mediaBTransform}`,
  //     )
  //   } else if (booksPage < totalBooksPage) {
  //     if (booksPage + 1 === totalBooksPage) {
  //       setHideNextButton(true)
  //       setHideBehindButton(false)
  //       if (remainderBookCount > 0) {
  //         setBooksMove(
  //           booksPage + 1,
  //           `${
  //             Number(numMediaATransform) -
  //             (Number(numMediaAWidth) + 12) * remainderBookCount
  //           }px`,
  //           `${
  //             Number(numMediaBTransform) -
  //             (Number(numMediaBWidth) + 22) * remainderBookCount
  //           }px`,
  //         )
  //       } else if (remainderBookCount === 0) {
  //         setBooksMove(
  //           booksPage + 1,
  //           `${
  //             Number(numMediaATransform) - (Number(numMediaAWidth) + 12) * 6
  //           }px`,
  //           `${
  //             Number(numMediaBTransform) - (Number(numMediaBWidth) + 22) * 6
  //           }px`,
  //         )
  //       }
  //     } else {
  //       setHideNextButton(false)
  //       setHideBehindButton(false)
  //       setBooksMove(
  //         booksPage + 1,
  //         `${Number(numMediaATransform) - (Number(numMediaAWidth) + 12) * 6}px`,
  //         `${Number(numMediaBTransform) - (Number(numMediaBWidth) + 22) * 6}px`,
  //       )
  //     }
  //   }
  // }

  // console.log(booksMoveStyle.mediaBTransform)
  // console.log(mediaStyled.mediaBTransform)

  // const behindBooks = () => {
  //   if (booksPage === 2) {
  //     setHideNextButton(false)
  //     setHideBehindButton(true)
  //     if (remainderBookCount > 0) {
  //       setBooksMove(
  //         1,
  //         `${mediaStyled.mediaATransform}`,
  //         `${mediaStyled.mediaBTransform}`,
  //       )
  //     } else if (remainderBookCount === 0) {
  //       setBooksMove(
  //         booksPage + 1,
  //         `${Number(numMediaATransform) + (Number(numMediaAWidth) + 12) * 6}px`,
  //         `${Number(numMediaBTransform) + (Number(numMediaBWidth) + 22) * 6}px`,
  //       )
  //     }
  //   } else if (
  //     booksMoveStyle.mediaATransform === mediaStyled.mediaATransform ||
  //     booksMoveStyle.mediaBTransform === mediaStyled.mediaBTransform
  //   ) {
  //     setHideBehindButton(false)
  //     setHideNextButton(true)
  //     setBooksMove(
  //       totalBooksPage,
  //       `-${
  //         Number(numMediaATransform) +
  //         (Number(numMediaAWidth) + 12) * (booksData.length - 6) -
  //         24
  //       }px`,
  //       `-${
  //         Number(numMediaBTransform) +
  //         (Number(numMediaBWidth) + 22) * (booksData.length - 6) -
  //         16
  //       }px`,
  //     )
  //   } else {
  //     setHideBehindButton(false)
  //     setHideNextButton(false)
  //     setBooksMove(
  //       booksPage - 1,
  //       `${Number(numMediaATransform) + (Number(numMediaAWidth) + 12) * 6}px`,
  //       `${Number(numMediaBTransform) + (Number(numMediaBWidth) + 22) * 6}px`,
  //     )
  //   }
  // }

  const bookList = (
    <BookCarouselSC.BookList ref={bookListRef} {...booksMoveStyle}>
      {booksData.map((book) => (
        <BookCarouselSC.BookItem key={book.id} {...booksMoveStyle}>
          <Book {...book} />
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
