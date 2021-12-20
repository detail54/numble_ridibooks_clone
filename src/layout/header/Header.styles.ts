// lib
import styled, { css } from 'styled-components'
// global style
import { setStyles } from '../../asset/css/GlobalStyle'
// interface
import { IHeaderStyles } from './interface'

const Divider = css`
  &::before {
    content: '|';
    font-size: 15px;
    color: white;
    opacity: 0.3;
    @media (min-width: ${setStyles.mediaWidth.mediaA}) {
      margin: 0px 4px;
    }
    @media (min-width: ${setStyles.mediaWidth.mediaB}) {
      margin: 0px 10px;
    }
  }
`

const Header = styled.header`
  background-color: #1f8ce6;
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
`

const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Nav = styled.nav`
  display: flex;
  max-width: 1000px;

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

  // RIDIBOOKS | RIDISelect
  ul:nth-child(1) {
    margin-right: 16px;
    flex: none;
    @media (min-width: ${setStyles.mediaWidth.mediaA}) {
      ${setStyles.setFontSize('16px')}
    }
    @media (min-width: ${setStyles.mediaWidth.mediaB}) {
      ${setStyles.setFontSize('medium')}
    }
  }

  // 회원가입 | 로그인 버튼
  ul:nth-child(2) {
    flex: 1;
    @media (min-width: ${setStyles.mediaWidth.mediaB}) {
      order: 2;
    }
  }

  form {
    @media (min-width: ${setStyles.mediaWidth.mediaA}) {
      width: 100%;
      flex: none;
      margin-top: 9px;
    }
    @media (min-width: ${setStyles.mediaWidth.mediaB}) {
      width: 340px;
      flex: 1;
      margin-top: 0px;
    }
  }

  ul:nth-child(1) li:nth-last-child(1) {
    ${Divider}
  }

  ul:nth-child(2) li:nth-child(1) a {
    @media (min-width: ${setStyles.mediaWidth.mediaA}) {
      width: 61px;
    }
    @media (min-width: ${setStyles.mediaWidth.mediaB}) {
      width: 77px;
    }
  }

  ul:nth-child(2) li:nth-child(2) {
    margin-left: 6px;
    & a {
      @media (min-width: ${setStyles.mediaWidth.mediaA}) {
        width: 50px;
      }
      @media (min-width: ${setStyles.mediaWidth.mediaB}) {
        width: 66px;
      }
    }
  }

  @media (min-width: ${setStyles.mediaWidth.mediaA}) {
    flex-flow: row wrap;
    width: 95%;
    padding: 9px 10px;
  }
  @media (min-width: ${setStyles.mediaWidth.mediaB}) {
    width: 964px;
    padding: 16px 16px 24px 20px;
  }
`

const Span = styled.span`
  ${(props: IHeaderStyles) =>
    props.fontWeight && setStyles.setFontWeight(props.fontWeight)}
  ${(props: IHeaderStyles) =>
    props.fontSize && setStyles.setFontSize(props.fontSize)}
  margin-left: 3px;
`

const Menu = styled.div`
  height: 37px;
  ${setStyles.setAlignX('center')}
  ${setStyles.setAlignY('center')}

  @media (min-width: ${setStyles.mediaWidth.mediaA}) {
    width: 100%;
    ul {
      ${setStyles.setAlignX('center')}
      width: 100%;
      margin: 0;
      padding: 0;
      li {
        flex: 1;
      }
    }
  }
  @media (min-width: ${setStyles.mediaWidth.mediaB}) {
    width: 964px;
    ul {
      ${setStyles.setAlignX('left')}
      width: 100%;
      margin: 0;
      padding: 0;
      li {
        flex: none;
        margin-right: 50px;
      }
    }
  }
`

const MenuIcon = styled.img`
  margin-right: 15px;
  width: 20px;
  height: 20px;
  filter: invert();
`

export const HeaderSC = {
  Header,
  Content,
  Nav,
  Span,
  Menu,
  MenuIcon,
}
