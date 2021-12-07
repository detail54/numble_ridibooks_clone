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

  console.log(mediaATransform)
  console.log(mediaAWidth)
  console.log(mediaBTransform)
  console.log(mediaBWidth)

  const nextBooks = () => {
    setBooksMoveStyle({
      ...booksMoveStyle,
      // mediaATransform: `${mediaATransform - mediaAWidth}px`,
      // mediaBTransform: `${mediaBTransform - mediaBWidth}px`,
    })
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
    </BookCarouselSC.BookCarouselWrap>
  )
}

export default BookCarousel
