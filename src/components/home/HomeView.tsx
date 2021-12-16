import React from 'react'
// interface
import { IHome } from './interface'
import { IMenu } from '../../common/interface/interface'
// common component
import LinkWrap from '../../common/menu/MenuWrap'
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

  const categoryLinks: IMenu[] = [
    {
      id: 'basic',
      menuType: 'basic',
      text: '이미지',
      styles: {
        fontSize: '16px',
        fontWeight: 'medium',
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
      menuType: 'basic',
      text: '일반',
      styles: {
        fontSize: '16px',
        fontWeight: 'medium',
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
      menuType: 'basic',
      text: '로맨스',
      styles: {
        fontSize: '16px',
        fontWeight: 'medium',
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
      menuType: 'basic',
      text: '판타지',
      styles: {
        fontSize: '16px',
        fontWeight: 'medium',
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
      menuType: 'basic',
      text: '만화',
      styles: {
        fontSize: '16px',
        fontWeight: 'medium',
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
      menuType: 'basic',
      text: 'BL',
      styles: {
        fontSize: '16px',
        fontWeight: 'medium',
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
