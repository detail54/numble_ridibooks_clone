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

const Header = styled.header`
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
  flex-direction: column;
`

const Nav = styled.nav`
  display: flex;
  width: 964px;
  padding: 16px 16px 24px 20px;

  ${setStyles.setAlignY('center')}

  button {
    font-size: 13px;
    padding: 0px 16px;
    height: 30px;
  }

  ul {
    margin: 0px;
    padding: 0px;
  }

  form {
    margin-left: 16px;
  }

  ul:nth-child(1) li:nth-last-child(1) {
    ${Divider}
  }

  ul:nth-last-child(1) {
    width: 100%;
  }

  ul:nth-last-child(1) li:nth-last-child(1) {
    margin-left: 6px;
  }
`

const Span = styled.span`
  ${(props: IHeaderStyles) =>
    props.fontWeight && setStyles.setFontWeight(props.fontWeight)}
  margin-left: 3px;
`

const Menu = styled.div`
  width: 964px;
  height: 37px;
  ${setStyles.setAlignX('left')}
  ${setStyles.setAlignY('center')}
  ul {
    padding: 0px;
    li {
      margin-right: 50px;
    }
  }
`

const MenuIcon = styled.svg`
  margin-right: 15px;
  fill: white;
  width: 20px;
  height: 20px;
`

export const HeaderSC = {
  Header,
  Content,
  Nav,
  Span,
  Menu,
  MenuIcon,
}
