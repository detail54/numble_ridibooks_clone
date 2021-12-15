import styled, { css } from 'styled-components'
// lib
import { Link } from 'react-router-dom'
// global style
import { setStyles } from '../../asset/css/GlobalStyle'
// interface
import { IFooterStyle } from './interface'

const Footer = styled.footer`
  margin-top: 24px;
  background: #303538;
  color: #ffffff;
  ${setStyles.setAlignX('center')}
`

const FooterWrap = styled.div`
  ${setStyles.setAlignX('unset')}
  ${setStyles.setAlignY('start')}
  width: 100%;
  max-width: 1000px;
  padding: 24px 16px;
  max-height: 700px;
`

const LinkTag = styled(Link)`
  ${(props: IFooterStyle) =>
    props.boldFont
      ? css`
          ${setStyles.setFontWeight('bold')}
        `
      : css`
          ${setStyles.setFontWeight('thin')}
        `}
  color: ${(props: IFooterStyle) => props.color || 'white'};
  text-decoration: none;
`

const NoticeList = styled.ul`
  ${setStyles.setAlignX('center')}
  ${setStyles.setAlignY('center')}
  min-width: 192px;
  margin: 0;
  margin-right: 62px;
  padding: 0;
  list-style: none;

  li:not(:nth-last-child(1))::after {
    position: relative;
    font-size: 11px;
    content: ' ';
    white-space: pre;
    margin: 0 10px;
    border-left: 1px solid #525a61;
  }
`

const NoticeListItem = styled.li`
  ${setStyles.setAlignX('center')}
  ${setStyles.setAlignY('center')}
  ${setStyles.setFontWeight('bold')}
  color: white;
  font-size: 20px;
`

const UlTagList = styled.ul`
  display: flex;
  padding: 0;
  padding-top: 6px;
  margin: 0;
  margin-bottom: 48px;
  list-style-type: none;

  & > li:nth-child(n + 3) {
    margin-left: 13px;
  }

  & > li:nth-child(3) {
    margin-left: 36px;
  }
`

const UlTagListItem = styled.li`
  line-height: initial;
  margin: 0;
  padding: 0;
`

const LinkList = styled.ul`
  list-style-type: none;
  margin-right: 16px;
  position: relative;
  margin: 0;
  padding: 0;
`

const LinkListItem = styled.li`
  width: 140px;
  line-height: initial;
  margin: 0;
  padding: 0;
  margin-bottom: 16px;
`

export const FooterSC = {
  Footer,
  FooterWrap,
  LinkTag,
  NoticeList,
  NoticeListItem,
  UlTagList,
  UlTagListItem,
  LinkList,
  LinkListItem,
}
