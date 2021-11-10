// lib
import styled from 'styled-components'
// global style
import { setStyles } from '../../GlobalStyle'

interface IProps {
  fontWeight: string
}

const Header = styled.div`
  background-color: #1f8ce6;
  width: 100%;
  display: flex;
  justify-content: center;
`

const Contents = styled.div`
  max-width: 1000px;
  width: 100%;

  li:nth-child(2)::before {
    content: '|';
    margin: 0px 10px;
    font-size: 15px;
    color: white;
    opacity: 0.3;
  }
`

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Span = styled.span`
  ${(props: IProps) => setStyles.setFontWeight(props.fontWeight)}
  margin-left: 3px;
`

export const HeaderSC = {
  Header,
  Contents,
  Ul,
  Li,
  Span,
}
