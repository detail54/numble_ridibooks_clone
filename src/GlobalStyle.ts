/* eslint @typescript-eslint/explicit-module-boundary-types: "off" */

import { createGlobalStyle, css } from 'styled-components'

const setFontSize = (fontSize: string) => css`
  font-size: ${(fontSize === 'small' && '1em') ||
  (fontSize === 'medium' && '1.7em') ||
  (fontSize === 'large' && '2em') ||
  fontSize};
`

const setFontWeight = (fontWeight: string) => css`
  font-family: ${(fontWeight === 'thin' && 'Pretendard-Thin') ||
  (fontWeight === 'light' && 'Pretendard-Light') ||
  (fontWeight === 'regular' && 'Pretendard-Regular') ||
  (fontWeight === 'medium' && 'Pretendard-Medium') ||
  (fontWeight === 'semibold' && 'Pretendard-SemiBold') ||
  (fontWeight === 'bold' && 'Pretendard-Bold') ||
  (fontWeight === 'black' && 'Pretendard-Black')};
`

const setHoverEffect = (
  color: string | undefined,
  background: string | undefined,
  opacity: string | undefined,
) => css`
  &:hover {
    color: ${color || ''};
    background: ${background || ''};
    opacity: ${opacity || ''};
  }
`

export const setStyles = {
  setFontSize,
  setFontWeight,
  setHoverEffect,
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard-Thin';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Thin.woff')
      format('woff');
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-Light';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff')
      format('woff');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-Medium';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff')
      format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-SemiBold';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff')
      format('woff');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-Bold';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff')
      format('woff');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-Black';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Black.woff')
      format('woff');
    font-weight: 900;
    font-style: normal;
  }

  html {
    font-size: 14px;
    font-family: 'Pretendard-Regular';
  }

  body {
    margin: 0px;
  }
`

export default GlobalStyle
