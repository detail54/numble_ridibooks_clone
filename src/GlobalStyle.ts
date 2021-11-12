/* eslint @typescript-eslint/explicit-module-boundary-types: "off" */

import { createGlobalStyle, css } from 'styled-components'

export type TFontWeight =
  | 'thin'
  | 'light'
  | 'regular'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'black'

export type TFontSize = 'small' | 'medium' | 'large' | string

export type TAlign = 'left' | 'center' | 'right'

const setFontSize = (fontSize: string) => css`
  font-size: ${(fontSize === 'small' && '1em') ||
  (fontSize === 'medium' && '1.7em') ||
  (fontSize === 'large' && '2em') ||
  fontSize};
`

const setFontWeight = (fontWeight: TFontWeight) => css`
  font-family: ${(fontWeight === 'thin' && 'Pretendard-Thin') ||
  (fontWeight === 'light' && 'Pretendard-Light') ||
  (fontWeight === 'regular' && 'Pretendard-Regular') ||
  (fontWeight === 'medium' && 'Pretendard-Medium') ||
  (fontWeight === 'semibold' && 'Pretendard-SemiBold') ||
  (fontWeight === 'bold' && 'Pretendard-Bold') ||
  (fontWeight === 'black' && 'Pretendard-Black')};
`

const setWidthAndHeight = (
  width?: string | undefined,
  height?: string | undefined,
) => css`
  width: ${width || ''};
  height: ${height || ''};
`

const setAlignX = (align: string) => css`
  & {
    display: flex;
    justify-content: ${align};
  }
`

const setAlignY = (align: string) => css`
  & {
    display: flex;
    align-items: ${align};
  }
`

const setHoverEffect = (
  color: string | undefined,
  background: string | undefined,
  opacity: string | undefined,
  border: string | undefined,
  borderTop: string | undefined,
  borderBottom: string | undefined,
  borderLeft: string | undefined,
  borderRight: string | undefined,
) => css`
  &:hover {
    color: ${color || ''};
    background: ${background || ''};
    opacity: ${opacity || ''};
    border: ${border || ''};
    border-top: ${borderTop || ''};
    border-bottom: ${borderBottom || ''};
    border-left: ${borderLeft || ''};
    border-right: ${borderRight || ''};
  }
`

export const setStyles = {
  setFontSize,
  setFontWeight,
  setWidthAndHeight,
  setAlignX,
  setAlignY,
  setHoverEffect,
}

export const colors = {
  dodgerblue_5: '#ebf6ff',
  dodgerblue_10: '#cce8ff',
  dodgerblue_20: '#99d1ff',
  dodgerblue_30: '#66baff',
  dodgerblue_40: '#339cf2',
  dodgerblue_50: '#1f8ce6',
  dodgerblue_60: '#0077d9',
  dodgerblue_70: '#0062b3',
  dodgerblue_80: '#005499',
  dodgerblue_90: '#004680',
  dodgerblue_100: '#003866',
  slategray_5: '#f2f4f5',
  slategray_10: '#e6e8eb',
  slategray_20: '#d1d5d9',
  slategray_30: '#b8bfc4',
  slategray_40: '#9ea7ad',
  slategray_50: '#808991',
  slategray_60: '#646c73',
  slategray_70: '#525a61',
  slategray_80: '#40474d',
  slategray_90: '#313538',
  slategray_100: '#212529',
  bluegray_5: '#f2f6fc',
  bluegray_10: '#d6deeb',
  bluegray_20: '#94a2b8',
  bluegray_30: '#738097',
  bluegray_40: '#59667a',
  bluegray_50: '#475161',
  bluegray_60: '#384252',
  bluegray_70: '#2e3847',
  bluegray_80: '#212b3b',
  bluegray_90: '#17202e',
  bluegray_100: '#0f1724',
  lightsteelblue_5: '#f7fafc',
  lightsteelblue_10: '#f0f5fa',
  lightsteelblue_20: '#e3edf7',
  lightsteelblue_30: '#d6e3f0',
  lightsteelblue_40: '#ccd9e6',
  lightsteelblue_50: '#c4d1de',
  lightsteelblue_60: '#b3c2d1',
  lightsteelblue_70: '#9eafbf',
  lightsteelblue_80: '#8c9dad',
  lightsteelblue_90: '#7d8e9e',
  lightsteelblue_100: '#70808f',
  gray_5: 'gray(95%)',
  gray_10: 'gray(90%)',
  gray_20: 'gray(80%)',
  gray_30: 'gray(70%)',
  gray_40: 'gray(60%)',
  gray_50: 'gray(50%)',
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
