import React from 'react'
// common component
import SearchBox from '../../common/input/SearchBox'
import MenuWrap from '../../common/menu/MenuWrap'
// style
import { HeaderSC } from './Header.styles'
// interface
import { IHeader } from './interface'
import { IMenu } from '../../common/interface/interface'
// global style
import { colors } from '../../asset/css/GlobalStyle'
// imges
import home from '../../asset/images/icons/home.png'
import homeBlank from '../../asset/images/icons/home_blank.png'
import bell from '../../asset/images/icons/bell.png'
import bellBlank from '../../asset/images/icons/bell_blank.png'
import cart from '../../asset/images/icons/cart.png'
import cartBlank from '../../asset/images/icons/cart_blank.png'
import profile from '../../asset/images/icons/profile.png'
import profileBlank from '../../asset/images/icons/profile_blank.png'

const HeaderView: React.FC<IHeader> = (props) => {
  const {
    searchText,
    onChangeSearchText,
    onRemoveSearchText,
    searchCancleButton,
    openSearchResultModal,
    closeSearchResultModal,
    menuEnabled,
    homeMenuEnabled,
    noticeMenuEnabled,
    cartMenuEnabled,
    MyMenuEnabled,
  } = props

  const mainLinks: IMenu[] = [
    {
      id: '홈',
      menuType: 'link',
      toLink: '/',
      text: 'RIDIBOOKS',
      styles: {
        fontSize: 'medium',
        mediaAFontSize: '15px',
        mediaBFontSize: 'medium',
        fontWeight: 'bold',
        hoveropacity: '0.8',
        height: '33px',
        aligny: 'center',
        color: 'white',
      },
    },
    {
      id: '홈',
      menuType: 'link',
      toLink: '/',
      text: 'RIDI',
      styles: {
        fontSize: 'medium',
        mediaAFontSize: '15px',
        mediaBFontSize: 'medium',
        fontWeight: 'bold',
        hoveropacity: '0.8',
        height: '33px',
        aligny: 'center',
        opacity: '0.6',
        color: 'white',
      },
      children: <HeaderSC.Span fontWeight='light'>Select</HeaderSC.Span>,
      childrenFirst: false,
    },
  ]

  const signLinks: IMenu[] = [
    {
      id: '홈',
      menuType: 'link',
      toLink: '/',
      text: '회원가입',
      styles: {
        fontSize: '13px',
        fontWeight: 'bold',
        width: '77px',
        height: '28px',
        alignx: 'center',
        aligny: 'center',
        bgcolor: 'none',
        border: '1px solid #99D1FF',
        borderradius: '3px',
        color: 'white',
      },
    },
    {
      id: '홈',
      menuType: 'link',
      toLink: '/',
      text: '로그인',
      styles: {
        fontSize: '13px',
        fontWeight: 'bold',
        width: '66px',
        height: '28px',
        alignx: 'center',
        aligny: 'center',
        bgcolor: 'white',
        borderradius: '3px',
        color: colors.dodgerblue_50,
      },
    },
  ]

  const menuLinks: IMenu[] = [
    {
      id: '홈',
      menuType: 'link',
      toLink: '/',
      text: '홈',
      styles: {
        fontSize: '16px',
        fontWeight: 'regular',
        height: '30px',
        alignx: 'center',
        color: 'white',
        padding: '0px 5px 3px 4px',
        flexflow: 'row wrap',
      },
      onClick: menuEnabled,
      children: homeMenuEnabled ? (
        <HeaderSC.MenuIcon src={home} alt='home' />
      ) : (
        <HeaderSC.MenuIcon src={homeBlank} alt='homeBlank' />
      ),
      childrenFirst: true,
      underLine: true,
      underLineEnabled: homeMenuEnabled,
    },
    {
      id: '알림',
      menuType: 'link',
      toLink: '/notice',
      text: '알림',
      styles: {
        fontSize: '16px',
        fontWeight: 'regular',
        height: '30px',
        alignx: 'center',
        color: 'white',
        padding: '0px 5px 3px 4px',
        flexflow: 'row wrap',
      },
      onClick: menuEnabled,
      children: noticeMenuEnabled ? (
        <HeaderSC.MenuIcon src={bell} alt='bell' />
      ) : (
        <HeaderSC.MenuIcon src={bellBlank} alt='bellBlank' />
      ),
      childrenFirst: true,
      underLine: true,
      underLineEnabled: noticeMenuEnabled,
    },
    {
      id: '카트',
      menuType: 'link',
      toLink: '/cart',
      text: '카트',
      styles: {
        fontSize: '16px',
        fontWeight: 'regular',
        height: '30px',
        alignx: 'center',
        color: 'white',
        padding: '0px 5px 3px 4px',
        flexflow: 'row wrap',
      },
      onClick: menuEnabled,
      children: cartMenuEnabled ? (
        <HeaderSC.MenuIcon src={cart} alt='cart' />
      ) : (
        <HeaderSC.MenuIcon src={cartBlank} alt='cartBlank' />
      ),
      childrenFirst: true,
      underLine: true,
      underLineEnabled: cartMenuEnabled,
    },
    {
      id: '마이리디',
      menuType: 'link',
      toLink: '/mypage',
      text: '마이리디',
      styles: {
        fontSize: '16px',
        fontWeight: 'regular',
        height: '30px',
        alignx: 'center',
        color: 'white',
        padding: '0px 5px 3px 4px',
        flexflow: 'row wrap',
      },
      onClick: menuEnabled,
      children: MyMenuEnabled ? (
        <HeaderSC.MenuIcon src={profile} alt='profile' />
      ) : (
        <HeaderSC.MenuIcon src={profileBlank} alt='profileBlank' />
      ),
      childrenFirst: true,
      underLine: true,
      underLineEnabled: MyMenuEnabled,
    },
  ]

  return (
    <HeaderSC.Header>
      <HeaderSC.Content>
        <HeaderSC.Nav>
          <MenuWrap datas={mainLinks} wrapStyle={{ listAlignX: 'left' }} />
          <SearchBox
            searchText={searchText}
            placeholder='제목, 저자, 출판사 검색'
            onChange={onChangeSearchText}
            onRemove={onRemoveSearchText}
            openCancelButton={searchCancleButton}
            onFocus={openSearchResultModal}
            onBlur={closeSearchResultModal}
            styles={{
              fontSize: '16px',
              fontWeight: 'light',
              width: '306px',
              focusOutLine: false,
              maxWidth: '340px',
            }}
          />
          <MenuWrap datas={signLinks} wrapStyle={{ listAlignX: 'right' }} />
        </HeaderSC.Nav>
        <HeaderSC.Menu>
          <MenuWrap
            datas={menuLinks}
            wrapStyle={{ itemHoveropacity: '0.8', listAlignX: 'left' }}
          />
        </HeaderSC.Menu>
      </HeaderSC.Content>
    </HeaderSC.Header>
  )
}

export default HeaderView
