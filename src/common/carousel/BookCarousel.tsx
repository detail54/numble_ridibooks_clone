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

  const mediaAWidth =
    booksMoveStyle.mediaAWidth &&
    parseInt(
      booksMoveStyle.mediaAWidth.substr(
        0,
        booksMoveStyle.mediaAWidth.indexOf('px'),
      ),
      10,
    )

  const mediaATransform =
    booksMoveStyle.mediaATransform &&
    parseInt(
      booksMoveStyle.mediaATransform.substr(
        0,
        booksMoveStyle.mediaATransform.indexOf('px'),
      ),
      10,
    )

  const mediaBWidth =
    booksMoveStyle.mediaBWidth &&
    parseInt(
      booksMoveStyle.mediaBWidth.substr(
        0,
        booksMoveStyle.mediaBWidth.indexOf('px'),
      ),
      10,
    )

  const mediaBTransform =
    booksMoveStyle.mediaBTransform &&
    parseInt(
      booksMoveStyle.mediaBTransform.substr(
        0,
        booksMoveStyle.mediaBTransform.indexOf('px'),
      ),
      10,
    )

  console.log(booksPage)

  const nextBooks = () => {
    if (booksPage === totalBooksPage) {
      setBooksPage(1)
      setBooksMoveStyle({
        ...booksMoveStyle,
        mediaATransform: mediaStyled.mediaATransform,
        mediaBTransform: mediaStyled.mediaBTransform,
      })
    } else if (booksPage < totalBooksPage) {
      if (booksPage + 1 === totalBooksPage) {
        if (remainderBookCount > 0) {
          setBooksPage(booksPage + 1)
          setBooksMoveStyle({
            ...booksMoveStyle,
            mediaATransform: `${
              Number(mediaATransform) -
              (Number(mediaAWidth) + 12) * remainderBookCount
            }px`,
            mediaBTransform: `${
              Number(mediaBTransform) -
              (Number(mediaBWidth) + 22) * remainderBookCount
            }px`,
          })
        } else if (remainderBookCount === 0) {
          setBooksPage(booksPage + 1)
          setBooksMoveStyle({
            ...booksMoveStyle,
            mediaATransform: `${
              Number(mediaATransform) - (Number(mediaAWidth) + 12) * 6
            }px`,
            mediaBTransform: `${
              Number(mediaBTransform) - (Number(mediaBWidth) + 22) * 6
            }px`,
          })
        }
      } else {
        setBooksPage(booksPage + 1)
        setBooksMoveStyle({
          ...booksMoveStyle,
          mediaATransform: `${
            Number(mediaATransform) - (Number(mediaAWidth) + 12) * 6
          }px`,
          mediaBTransform: `${
            Number(mediaBTransform) - (Number(mediaBWidth) + 22) * 6
          }px`,
        })
      }
    }
  }

  const behindBooks = () => {
    if (booksPage === 2) {
      if (remainderBookCount > 0) {
        setBooksPage(1)
        setBooksMoveStyle({
          ...booksMoveStyle,
          mediaATransform: `${
            Number(mediaATransform) +
            (Number(mediaAWidth) + 12) * remainderBookCount
          }px`,
          mediaBTransform: `${
            Number(mediaBTransform) +
            (Number(mediaBWidth) + 22) * remainderBookCount
          }px`,
        })
      } else if (remainderBookCount === 0) {
        setBooksPage(booksPage - 1)
        setBooksMoveStyle({
          ...booksMoveStyle,
          mediaATransform: `${
            Number(mediaATransform) + (Number(mediaAWidth) + 12) * 6
          }px`,
          mediaBTransform: `${
            Number(mediaBTransform) + (Number(mediaBWidth) + 22) * 6
          }px`,
        })
      }
    } else if (booksPage === 1) {
      const booksCount =
        remainderBookCount > 0
          ? (totalBooksPage - 1) * 6 + remainderBookCount
          : totalBooksPage * 6
      setBooksPage(1)
      setBooksMoveStyle({
        ...booksMoveStyle,
        mediaATransform: `${
          mediaStyled.mediaATransform &&
          parseInt(
            mediaStyled.mediaATransform.substr(
              0,
              mediaStyled.mediaATransform?.indexOf('px'),
            ),
            10,
          ) * booksCount
        }px`,
        mediaBTransform: `${
          mediaStyled.mediaBTransform &&
          parseInt(
            mediaStyled.mediaBTransform.substr(
              0,
              mediaStyled.mediaBTransform?.indexOf('px'),
            ),
            10,
          ) * booksCount
        }px`,
      })
      // setBooksMoveStyle({
      //   ...booksMoveStyle,
      //   mediaATransform: `${
      //     Number(mediaATransform) + (Number(mediaAWidth) + 12) * booksCount
      //   }px`,
      //   mediaBTransform: `${
      //     Number(mediaBTransform) + (Number(mediaBWidth) + 22) * booksCount
      //   }px`,
      // })
    } else {
      setBooksPage(booksPage - 1)
      setBooksMoveStyle({
        ...booksMoveStyle,
        mediaATransform: `${
          Number(mediaATransform) + (Number(mediaAWidth) + 12) * 6
        }px`,
        mediaBTransform: `${
          Number(mediaBTransform) + (Number(mediaBWidth) + 22) * 6
        }px`,
      })
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

  return (
    <BookCarouselSC.BookCarouselWrap>
      <BookCarouselSC.Header>{header}</BookCarouselSC.Header>
      <BookCarouselSC.Books {...booksMoveStyle}>
        {bookList}
      </BookCarouselSC.Books>
      <BookCarouselSC.ControlContainer>
        <BookCarouselSC.Left>
          <BookCarouselSC.BehindButton onClick={behindBooks} />
        </BookCarouselSC.Left>
        <BookCarouselSC.Center />
        <BookCarouselSC.Right>
          <BookCarouselSC.NextButton onClick={nextBooks} />
        </BookCarouselSC.Right>
      </BookCarouselSC.ControlContainer>
    </BookCarouselSC.BookCarouselWrap>
  )
}

export default BookCarousel
