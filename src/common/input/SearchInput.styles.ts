import styled, { css } from 'styled-components'
// interface
import { ISearchInputStyles } from '../interface/interface'
// global style
import { setStyles } from '../../GlobalStyle'

const Input = styled.input`
  width: ${(props: ISearchInputStyles) => props.width && props.width};
  border: ${(props: ISearchInputStyles) => props.border || 'none'};

  ${(props: ISearchInputStyles) =>
    props.fontSize && setStyles.setFontSize(props.fontSize)};

  ${(props: ISearchInputStyles) =>
    props.fontWeight && setStyles.setFontWeight(props.fontWeight)};

  ${(props: ISearchInputStyles) =>
    props.flex &&
    css`
      flex: ${props.flex};
    `}
  ${(props: ISearchInputStyles) =>
    !props.focusOutLine &&
    css`
      &:focus {
        outline: none;
      }
    `}
`

const Form = styled.form`
  max-width: ${(props: ISearchInputStyles) => props.maxWidth && props.maxWidth};
  display: flex;
  justify-content: center;
  align-items: center;
`

const FormDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  height: 36px;
  border-radius: 3px;
`

const SearchIcon = styled.svg`
  font-size: 24px;
  opacity: 0.6;
  color: #808991;
  margin: 0px 4px 0px 6px;
  min-width: 24px;
  min-height: 24px;
`

const CancleButton = styled.button`
  margin: 4px 6px 4px 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0px;

  ${setStyles.setWidthAndHeight('24px', '24px')}
  ${setStyles.setAlignX('center')}
  ${setStyles.setAlignY('center')}
`

const CancleIcon = styled.svg`
  font-size: 14px;
  color: #9ea7ad;
  display: block;
`

export const InputSC = {
  Input,
  Form,
  FormDiv,
  SearchIcon,
  CancleButton,
  CancleIcon,
}
