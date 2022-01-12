import React from 'react'
// interface
import { IStarRating } from '../interface/interface'
// style
import { StarRatingSC } from './StarRating.styles'

const StarRating: React.FC<IStarRating> = (props) => {
  const { starRate } = props

  const rate: number = starRate.rate * 20

  return (
    <StarRatingSC.StarRatingWrap>
      <StarRatingSC.Star>
        <StarRatingSC.BaseStar>★★★★★</StarRatingSC.BaseStar>
        <StarRatingSC.FillStar width={rate}>★★★★★</StarRatingSC.FillStar>
      </StarRatingSC.Star>
      <StarRatingSC.RateNum>{starRate.rateNum}</StarRatingSC.RateNum>
    </StarRatingSC.StarRatingWrap>
  )
}

export default StarRating
