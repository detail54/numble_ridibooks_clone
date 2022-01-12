import styled from 'styled-components'
// global style
import { setStyles } from '../../asset/css/GlobalStyle'
// interface
import { IStarRatingStyle } from '../interface/interface'

const StarRatingWrap = styled.div`
  width: 100%;
  padding-top: 5px;
  display: flex;
`

const Star = styled.span`
  max-width: 50px;
  display: block;
  position: relative;
`

const BaseStar = styled.span`
  display: block;
  width: 100%;
  color: #d1d5d9;
  font-size: 11px;
  ${setStyles.setAlignY('center')}
`

const FillStar = styled.span`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  color: #fa722e;
  font-size: 11px;
  width: ${(props: IStarRatingStyle) => `${props.width}%`};
  overflow: hidden;
  ${setStyles.setAlignY('center')}
`

const RateNum = styled.span`
  color: #999999;
  display: block;
  margin-left: 8px;
  font-size: 11px;
`

export const StarRatingSC = {
  StarRatingWrap,
  Star,
  BaseStar,
  FillStar,
  RateNum,
}
