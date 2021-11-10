import styled from 'styled-components'
// interface
import { IInputStyles } from '../interface/interface'
// global style
import { setStyles } from '../../GlobalStyle'

const Input = styled.input`
  width: ${(props: IInputStyles) => props.width && props.width};
  ${(props: IInputStyles) =>
    props.fontSize && setStyles.setFontSize(props.fontSize)};
  ${(props: IInputStyles) =>
    props.fontWeight && setStyles.setFontWeight(props.fontWeight)};
`

export const InputSC = {
  Input,
}
