import React, { useState, useEffect } from 'react'
// interface
import { IBookLabel } from '../interface/interface'
// style
import { BookLabelSC } from './BookLabel.styles'

const BookLabel: React.FC<IBookLabel> = (props) => {
  const { book } = props

  const [label, setLabel] = useState<JSX.Element>(<></>)

  useEffect(() => {
    if (book.canRent) {
      setLabel(
        <BookLabelSC.Label rent>
          <BookLabelSC.TextWrap>
            <BookLabelSC.Text>대여</BookLabelSC.Text>
          </BookLabelSC.TextWrap>
        </BookLabelSC.Label>,
      )
    } else if (book.buySalePercent > 0) {
      setLabel(
        <BookLabelSC.Label sale>
          <BookLabelSC.TextWrap>
            <BookLabelSC.Text>{book.buySalePercent}</BookLabelSC.Text>
            <BookLabelSC.Ratio>%</BookLabelSC.Ratio>
          </BookLabelSC.TextWrap>
        </BookLabelSC.Label>,
      )
    }
  }, [])

  return <>{label}</>
}

export default BookLabel
