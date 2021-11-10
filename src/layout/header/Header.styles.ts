// lib
import styled, { css } from 'styled-components'
// global style
import { setStyles } from '../../GlobalStyle'
// interface
import { IHeaderStyles } from './interface'

const Divider = css`
  &::before {
    content: '|';
    margin: 0px 10px;
    font-size: 15px;
    color: white;
    opacity: 0.3;
  }
`

const Header = styled.div`
  background-color: #1f8ce6;
  width: 100%;
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  align-items: center;
`

const Nav = styled.nav`
  display: flex;
  width: 100%;
  padding: 16px 16px 24px 20px;
`

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
`

const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props: IHeaderStyles) => props.divider && Divider}
`

const Span = styled.span`
  ${(props: IHeaderStyles) =>
    props.fontWeight && setStyles.setFontWeight(props.fontWeight)}
  margin-left: 3px;
`

const Form = styled.form`
  width: 340px;
  max-width: 340px;
  margin-left: 16px;
`

export const HeaderSC = {
  Header,
  Content,
  Nav,
  Ul,
  Li,
  Span,
  Form,
}
