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
  max-width: 1000px;
  width: 100%;
  padding: 24px 16px;
  max-height: 700px;

  @media (min-width: ${setStyles.mediaWidth.mediaA}) {
    margin-left: 0px;
  }

  @media (min-width: ${setStyles.mediaWidth.mediaB}) {
    margin-left: 40px;
  }
`

const FooterMenus = styled.div`
  @media (min-width: ${setStyles.mediaWidth.mediaA}) {
    ${setStyles.setAlignX('unset')}
    ${setStyles.setAlignY('start')}
    flex-direction: column;
  }

  @media (min-width: ${setStyles.mediaWidth.mediaB}) {
    ${setStyles.setAlignX('unset')}
    ${setStyles.setAlignY('start')}
    width: 100%;
    flex-direction: row;
  }
`

const LinkTag = styled(Link)`
  ${(props: IFooterStyle) =>
    props.fontWeight === 'bold'
      ? css`
          ${setStyles.setFontWeight('bold')}
        `
      : css`
          ${setStyles.setFontWeight('light')}
        `}
  color: ${(props: IFooterStyle) =>
    props.display === 'flex' ? '#7e8992' : 'white'};
  text-decoration: none;
`

const NoticeList = styled.ul`
  min-width: 192px;
  margin: 0;
  margin-right: 42px;
  padding: 0;
  list-style: none;

  @media (min-width: ${setStyles.mediaWidth.mediaA}) {
    ${setStyles.setAlignY('center')}
    margin-bottom: 28px;
  }

  @media (min-width: ${setStyles.mediaWidth.mediaB}) {
    ${setStyles.setAlignY('center')}
  }

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
  list-style-type: none;

  & > li:nth-child(n + 3) {
    margin-left: 13px;
  }

  & > li:nth-child(3) {
    margin-left: 36px;
  }

  @media (min-width: ${setStyles.mediaWidth.mediaA}) {
    margin-bottom: 10px;
    max-height: 230px;
  }

  @media (min-width: ${setStyles.mediaWidth.mediaB}) {
    margin-bottom: 28px;
  }
`

const UlTagListItem = styled.li`
  line-height: initial;
  margin: 0;
  padding: 0;
`

const LinkList = styled.ul`
  margin: 0;
  padding: 0;

  ${(props: IFooterStyle) =>
    props.display === 'flex'
      ? css`
          display: flex;
          list-style-type: none;

          li:not(:nth-last-child(1))::after {
            position: relative;
            font-size: 10px;
            content: '|';
            top: -0.3px;
            margin: 0px 5.5px;
          }
        `
      : css`
          list-style-type: none;
          margin-right: 16px;
          position: relative;
        `}
`

const LinkListItem = styled.li`
  ${(props: IFooterStyle) =>
    props.display === 'flex'
      ? css`
          ${setStyles.setAlignY('center')}
          height: 20px;
          font-size: 11px;
        `
      : css`
          width: 140px;
          line-height: initial;
          margin: 0;
          padding: 0;
          margin-bottom: 16px;
        `}
`

const MoreCompanyInfo = styled.div`
  ${setStyles.setAlignY('center')}
  ${setStyles.setFontWeight('light')}
  color: white;
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }
`

const BusinessInfoWrap = styled.div`
  margin: 0;
  padding: 0;
  margin-bottom: 16px;
`

const BusinessInfoTitle = styled.div`
  ${setStyles.setAlignX('left')}
  ${setStyles.setAlignY('center')}
  ${setStyles.setFontWeight('medium')}
  display: block;
  margin: 0;
  padding: 0;
  height: 20px;
  font-size: 12px;
  line-height: 1.82;
  color: #7e8992;
  transition: opacity 0.3s ease-in-out;
  margin-bottom: 8px;

  &:hover {
    cursor: pointer;
  }
`

const ArrowImg = styled.img`
  margin: 0;
  padding: 0;
  margin-left: 4px;
  width: 8px;
  height: 9px;
  filter: invert(60%);
  line-height: 20px;
`

const BusinessInfos = styled.div`
  ${setStyles.setFontWeight('thin')}
  margin: 0;
  padding: 0;

  @media (min-width: ${setStyles.mediaWidth.mediaA}) {
    display: block;
  }

  @media (min-width: ${setStyles.mediaWidth.mediaB}) {
    display: flex;
  }
`

const ContentWrap = styled.div`
  ${setStyles.setAlignY('center')}
  display: flex;
  height: 19px;
`

const Contents = styled.span`
  ${setStyles.setFontWeight('light')}
  display: block;
  margin: 0;
  padding: 0;
  height: 20px;
  font-size: 10px;
  line-height: 1.82;
  color: #7e8992;

  ${(props: IFooterStyle) =>
    props.bar &&
    css`
      &::after {
        position: relative;
        font-size: 10px;
        content: '|';
        top: -0.3px;
        margin: 0px 5.5px;
      }
    `}
`

const CompanyTermsWrap = styled.div`
  @media (min-width: ${setStyles.mediaWidth.mediaA}) {
    display: block;
  }

  @media (min-width: ${setStyles.mediaWidth.mediaB}) {
    ${setStyles.setAlignY('center')}
  }

  flex-direction: row;
  margin: 0;
  padding: 0;
  color: #7e8992;
`

const Company = styled.p`
  @media (min-width: ${setStyles.mediaWidth.mediaA}) {
    margin-bottom: 16px;
  }

  @media (min-width: ${setStyles.mediaWidth.mediaB}) {
    margin-bottom: 0px;
  }

  ${setStyles.setFontWeight('light')}
  width: 83px;
  height: 17px;
  font-size: 14px;
  margin: 0;
  padding: 0;
  margin-right: 24px;
`

export const FooterSC = {
  Footer,
  FooterWrap,
  FooterMenus,
  LinkTag,
  NoticeList,
  NoticeListItem,
  UlTagList,
  UlTagListItem,
  LinkList,
  LinkListItem,
  MoreCompanyInfo,
  BusinessInfoWrap,
  BusinessInfoTitle,
  BusinessInfos,
  ArrowImg,
  ContentWrap,
  Contents,
  CompanyTermsWrap,
  Company,
}
