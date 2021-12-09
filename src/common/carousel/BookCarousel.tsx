import React, { useState } from 'react'
// common
import Book from '../book/Book'
// interface
import { IBookCarousel, IMediaStyled } from '../interface/interface'
// style
import { BookCarouselSC } from './BookCarousel.styles'

const BookCarousel: React.FC<IBookCarousel> = (props) => {
  const { header, booksData, mediaStyled } = props
  const [booksMoveStyle, setBooksMoveStyle] = useState<IMediaStyled>({
    ...mediaStyled,
  })
  const [booksPage, setBooksPage] = useState<number>(1)

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

  console.log('numMediaAWidth::', numMediaAWidth)
  console.log('numMediaATransform::', numMediaATransform)
  console.log('numMediaBWidth::', numMediaBWidth)
  console.log('numMediaBTransform::', numMediaBTransform)

  const setBooksMove = (
    booksPageNumber: number,
    mediaATransform: string,
    mediaBTransform: string,
  ) => {
    setBooksPage(booksPageNumber)
    setBooksMoveStyle({
      ...booksMoveStyle,
      mediaATransform,
      mediaBTransform,
    })
  }

  const nextBooks = () => {
    if (booksPage === totalBooksPage) {
      setBooksMove(
        1,
        `${mediaStyled.mediaATransform}`,
        `${mediaStyled.mediaBTransform}`,
      )
    } else if (booksPage < totalBooksPage) {
      if (booksPage + 1 === totalBooksPage) {
        if (remainderBookCount > 0) {
          setBooksMove(
            booksPage + 1,
            `${
              Number(numMediaATransform) -
              (Number(numMediaAWidth) + 12) * remainderBookCount
            }px`,
            `${
              Number(numMediaBTransform) -
              (Number(numMediaBWidth) + 22) * remainderBookCount
            }px`,
          )
        } else if (remainderBookCount === 0) {
          setBooksMove(
            booksPage + 1,
            `${
              Number(numMediaATransform) - (Number(numMediaAWidth) + 12) * 6
            }px`,
            `${
              Number(numMediaBTransform) - (Number(numMediaBWidth) + 22) * 6
            }px`,
          )
        }
      } else {
        setBooksMove(
          booksPage + 1,
          `${Number(numMediaATransform) - (Number(numMediaAWidth) + 12) * 6}px`,
          `${Number(numMediaBTransform) - (Number(numMediaBWidth) + 22) * 6}px`,
        )
      }
    }
  }

  const behindBooks = () => {
    if (booksPage === 2) {
      if (remainderBookCount > 0) {
        setBooksMove(
          1,
          `${mediaStyled.mediaATransform}`,
          `${mediaStyled.mediaBTransform}`,
        )
      } else if (remainderBookCount === 0) {
        setBooksMove(
          booksPage + 1,
          `${Number(numMediaATransform) + (Number(numMediaAWidth) + 12) * 6}px`,
          `${Number(numMediaBTransform) + (Number(numMediaBWidth) + 22) * 6}px`,
        )
      }
    } else if (
      booksMoveStyle.mediaATransform === mediaStyled.mediaATransform ||
      booksMoveStyle.mediaBTransform === mediaStyled.mediaBTransform
    ) {
      setBooksMove(
        totalBooksPage,
        `-${
          Number(numMediaATransform) +
          (Number(numMediaAWidth) + 12) * (booksData.length - 6) -
          24
        }px`,
        `-${
          Number(numMediaBTransform) +
          (Number(numMediaBWidth) + 22) * (booksData.length - 6) -
          44
        }px`,
      )
    } else {
      console.log('하이하이')
      setBooksMove(
        booksPage - 1,
        `${Number(numMediaATransform) + (Number(numMediaAWidth) + 12) * 6}px`,
        `${Number(numMediaBTransform) + (Number(numMediaBWidth) + 22) * 6}px`,
      )
    }
  }

  const bookList = (
    <BookCarouselSC.BookList {...booksMoveStyle}>
      {booksData.map((book) => (
        <BookCarouselSC.BookItem key={book.id} {...booksMoveStyle}>
          <Book {...book} />
        </BookCarouselSC.BookItem>
      ))}
    </BookCarouselSC.BookList>
  )

  const leftButton = totalBooksPage > 1 && (
    <BookCarouselSC.BehindButton onClick={behindBooks} />
  )

  const rightButton = totalBooksPage > 1 && (
    <BookCarouselSC.NextButton onClick={nextBooks} />
  )

  return (
    <BookCarouselSC.BookCarouselWrap {...booksMoveStyle}>
      <BookCarouselSC.Header>{header}</BookCarouselSC.Header>
      <BookCarouselSC.Books {...booksMoveStyle}>
        {bookList}
      </BookCarouselSC.Books>
      <BookCarouselSC.ControlContainer>
        <BookCarouselSC.Left>{leftButton}</BookCarouselSC.Left>
        <BookCarouselSC.Center />
        <BookCarouselSC.Right>{rightButton}</BookCarouselSC.Right>
      </BookCarouselSC.ControlContainer>
    </BookCarouselSC.BookCarouselWrap>
  )
}

export default BookCarousel
