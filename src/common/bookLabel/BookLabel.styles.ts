import styled from 'styled-components'
// global style
import { setStyles } from '../../asset/css/GlobalStyle'
// interface
import { IBookLabelStyle } from '../interface/interface'

const Label = styled.div`
  color: white;
  background-color: ${(props: IBookLabelStyle) =>
    props.rent ? '#3ea590' : '#59667a'};
  border-radius: 34px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  position: absolute;
  top: -7px;
  left: -7px;
  ${setStyles.setAlignX('center')}
  ${setStyles.setWidthAndHeight('34px', '34px')}
`

const TextWrap = styled.span`
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

const Text = styled.span`
  font-size: 16px;
  padding-right: 1px;
`

const Ratio = styled.span`
  font-size: 10px;
`

export const BookLabelSC = {
  Label,
  TextWrap,
  Text,
  Ratio,
}
