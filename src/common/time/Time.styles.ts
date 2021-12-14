import styled from 'styled-components'
// global style
import { setStyles } from '../../asset/css/GlobalStyle'

const TimeWrap = styled.div`
  ${setStyles.setFontWeight('bold')}
  ${setStyles.setAlignY('center')}
  justify-content: space-between;
  width: 74px;
  height: 12px;
  padding: 9px;
  padding-right: 13px;
  background-image: linear-gradient(255deg, #0077d9 4%, #72d2e0);
  border-radius: 14px;
  font-size: 13px;
  color: white;
  margin-bottom: 16px;
`

const ClockImg = styled.img`
  width: 12px;
  height: 12px;
  filter: invert();
`

const Time = styled.span`
  ${setStyles.setFontWeight('bold')}
  font-size: 13px;
  color: white;
`

export const TimeSC = {
  TimeWrap,
  ClockImg,
  Time,
}
