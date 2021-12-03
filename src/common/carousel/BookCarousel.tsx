import React from 'react'
// interface
import { IBookCarousel } from '../interface/interface'
// style
import { BookCarouselSC } from './BookCarousel.styles'

const BookCarousel: React.FC<IBookCarousel> = (props) => {
  const { header, books } = props

  return (
    <BookCarouselSC.BookCarouselWrap>
      <BookCarouselSC.Header>{header}</BookCarouselSC.Header>
      {books}
    </BookCarouselSC.BookCarouselWrap>
  )
}

export default BookCarousel
