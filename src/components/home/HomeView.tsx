import React from 'react'
// interface
import { IHome } from './interface'
import { IMenu } from '../../common/interface/interface'
// common component
import MenuWrap from '../../common/menu/MenuWrap'
// style
import { HomeSC } from './Home.styles'
// image
import menu from '../../asset/images/icons/menu.png'

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
      text: '',
      styles: {
        fontSize: '16px',
        fontWeight: 'medium',
        height: '48px',
        alignx: 'center',
        aligny: 'center',
        color: '#40474D',
      },
      onClick: categoryEnabled,
      children: <HomeSC.MenuIcon src={menu} alt='menu' />,
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
        choice: blEnabled,
      },
      onClick: categoryEnabled,
    },
  ]

  return (
    <>
      <HomeSC.HomeMenu>
        <HomeSC.BookTab>
          <MenuWrap datas={categoryLinks} />
        </HomeSC.BookTab>
      </HomeSC.HomeMenu>
      {bookCategory}
    </>
  )
}

export default HomeView
