import React from 'react'
// interface
import { IHome } from './interface'
import { ITab } from '../../common/interface/interface'
// common component
import LinkWrap from '../../common/Tabs/TabsWrap'
// style
import { HomeSC } from './Home.styles'

const HomeView: React.FC<IHome> = (props) => {
  const {
    bookCategory,
    categoryEnabled,
    basicEnabled,
    romanceEnabled,
    fantasyEnabled,
    webToonEnabled,
    blEnabled,
  } = props

  const categoryLinks: ITab[] = [
    {
      id: 'basic',
      tabType: 'basic',
      text: '이미지',
      styles: {
        fontSize: '16px',
        fontWeight: 'regular',
        height: '48px',
        alignx: 'center',
        aligny: 'center',
        color: '#40474D',
        padding: '0px 22px',
      },
      onClick: categoryEnabled,
    },
    {
      id: 'basic',
      tabType: 'basic',
      text: '일반',
      styles: {
        fontSize: '16px',
        fontWeight: 'regular',
        height: '48px',
        alignx: 'center',
        aligny: 'center',
        color: '#40474D',
        padding: '0px 22px',
        choice: basicEnabled,
      },
      onClick: categoryEnabled,
    },
    {
      id: 'romance',
      tabType: 'basic',
      text: '로맨스',
      styles: {
        fontSize: '16px',
        fontWeight: 'regular',
        height: '48px',
        alignx: 'center',
        aligny: 'center',
        color: '#40474D',
        padding: '0px 22px',
        choice: romanceEnabled,
      },
      onClick: categoryEnabled,
    },
    {
      id: 'fantasy',
      tabType: 'basic',
      text: '판타지',
      styles: {
        fontSize: '16px',
        fontWeight: 'regular',
        height: '48px',
        alignx: 'center',
        aligny: 'center',
        color: '#40474D',
        padding: '0px 22px',
        choice: fantasyEnabled,
      },
      onClick: categoryEnabled,
    },
    {
      id: 'webtoon',
      tabType: 'basic',
      text: '만화',
      styles: {
        fontSize: '16px',
        fontWeight: 'regular',
        height: '48px',
        alignx: 'center',
        aligny: 'center',
        color: '#40474D',
        padding: '0px 22px',
        choice: webToonEnabled,
      },
      onClick: categoryEnabled,
    },
    {
      id: 'bl',
      tabType: 'basic',
      text: 'BL',
      styles: {
        fontSize: '16px',
        fontWeight: 'regular',
        height: '48px',
        alignx: 'center',
        aligny: 'center',
        color: '#40474D',
        padding: '0px 22px',
        choice: blEnabled,
      },
      onClick: categoryEnabled,
    },
  ]

  return (
    <>
      <HomeSC.HomeMenu>
        <HomeSC.BookTab>
          <LinkWrap datas={categoryLinks} wrapStyle={{ listAlignX: 'left' }} />
        </HomeSC.BookTab>
      </HomeSC.HomeMenu>
      {bookCategory}
    </>
  )
}

export default HomeView
