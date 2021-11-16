import React from 'react'
// common component
import SearchBox from '../../common/input/SearchBox'
import TabWrap from '../../common/Tabs/TabsWrap'
// style
import { HeaderSC } from './Header.styles'
// interface
import { IHeader } from './interface'
import { ITab } from '../../common/interface/interface'
// global style
import { colors } from '../../asset/css/GlobalStyle'

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

  const mainLinks: ITab[] = [
    {
      id: '홈',
      tabType: 'link',
      toLink: '/',
      text: 'RIDIBOOKS',
      styles: {
        fontSize: 'medium',
        fontWeight: 'bold',
        hoveropacity: '0.8',
        height: '33px',
        aligny: 'center',
        color: 'white',
      },
    },
    {
      id: '홈',
      tabType: 'link',
      toLink: '/',
      text: 'RIDI',
      styles: {
        fontSize: 'medium',
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

  const signLinks: ITab[] = [
    {
      id: '홈',
      tabType: 'link',
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
      tabType: 'link',
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

  const menuLinks: ITab[] = [
    {
      id: '홈',
      tabType: 'link',
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
      children: (
        <>
          <HeaderSC.MenuIcon viewBox='0 0 24 24'>
            <path d='M11.293 2.293l-9 9a1 1 0 00-.294.707v10.086a.5.5 0 00.5.5h5.997a.5.5 0 00.5-.5v-6.498c0-.554.448-1.002 1.002-1.002h4.004c.553 0 1.002.448 1.002 1.002v6.498a.5.5 0 00.5.5H21.5a.5.5 0 00.5-.5V12a.998.998 0 00-.293-.707l-9-9a1 1 0 00-1.415 0' />
          </HeaderSC.MenuIcon>
        </>
      ),
      childrenFirst: true,
      underLine: true,
      underLineEnabled: homeMenuEnabled,
    },
    {
      id: '알림',
      tabType: 'link',
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
      children: (
        <>
          <HeaderSC.MenuIcon viewBox='0 0 24 24'>
            <path d='M17.451 17.32H4.536c.846-1.413 1.93-3.774 1.93-7.522 0-2.693.963-4.447 2.944-5.36.06-.016.113-.036.16-.056l.27-.105c.067-.034.133-.074.126-.086l.392-.047c1.21-.174 2.01-.266 2.972.01l.198.03c.07.02.135.06.203.093l.211.105H14c.047.02.1.04.162.056 1.98.914 2.943 2.668 2.943 5.36 0 3.798 1.053 6.148 1.896 7.521h-1.549zm-5.762 4.308c-1.418 0-2.668-.922-3.275-2.309h6.551c-.608 1.387-1.858 2.31-3.276 2.31zm9.59-4.51c-.674-.927-2.175-3.048-2.175-7.32 0-4.439-2.303-6.384-4.235-7.235l-.193-.085h-.03a1.9 1.9 0 00-.138-.049 2.226 2.226 0 00-.738-.229c-.758-.2-1.409-.2-1.985-.2-.574 0-1.128.08-1.714.166l-.194.028a2.129 2.129 0 00-.816.236 1.727 1.727 0 00-.135.048l-.224.085c-1.933.85-4.236 2.796-4.236 7.235 0 4.063-1.402 6.16-2.155 7.286l-.038.056a1.292 1.292 0 00.092 1.695c.145.144.484.484 1.09.484h2.852c.737 2.537 2.878 4.31 5.382 4.31 2.504 0 4.646-1.773 5.382-4.31h3.044c.606 0 .945-.34 1.09-.484l.115-.115.072-.145c.36-.718.087-1.218-.114-1.457z' />
          </HeaderSC.MenuIcon>
        </>
      ),
      childrenFirst: true,
      underLine: true,
      underLineEnabled: noticeMenuEnabled,
    },
    {
      id: '카트',
      tabType: 'link',
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
      children: (
        <>
          <HeaderSC.MenuIcon viewBox='0 0 24 24'>
            <path d='M21.45 21.028c0 1.101-.9 2-2 2s-2-.899-2-2c0-1.1.9-2 2-2s2 .9 2 2zm-9.7 0c0 1.101-.9 2-2 2s-2-.899-2-2c0-1.1.9-2 2-2s2 .9 2 2zm8.136-7.129H9.314L7.727 6.2h13.745l-1.586 7.7zM7.304 4.2l-.7-3.2H1a1 1 0 100 2h3.995l.517 2.366L7.685 15.9h13.83l2.412-11.7H7.304z' />
          </HeaderSC.MenuIcon>
        </>
      ),
      childrenFirst: true,
      underLine: true,
      underLineEnabled: cartMenuEnabled,
    },
    {
      id: '마이리디',
      tabType: 'link',
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
      children: (
        <>
          <HeaderSC.MenuIcon viewBox='0 0 24 24'>
            <path d='M15.729 23.033h-.821c-.223 0-.345-.125-.345-.354v-2.546l-.95 1.56a.316.316 0 01-.288.173.33.33 0 01-.295-.171l-.944-1.56v2.544c0 .225-.128.354-.352.354h-.82c-.224 0-.353-.13-.353-.354v-4.912c0-.224.129-.353.354-.353h.795c.168 0 .289.062.37.192l1.245 2.077 1.24-2.075c.069-.126.192-.194.367-.194h.797c.23 0 .36.125.36.353v4.912c0 .225-.131.354-.36.354zm3.717 0h-.864c-.226 0-.355-.13-.355-.354v-1.716l-1.711-3.078a.318.318 0 01-.01-.322.305.305 0 01.27-.15h.903c.243 0 .349.149.415.278l.72 1.443.199.453.196-.448.72-1.447c.07-.131.177-.278.419-.278h.9c.118 0 .218.057.27.149a.319.319 0 01-.01.325L19.8 20.963v1.716c0 .225-.13.354-.354.354zM8.56 21.039l-4.511.002c.875-3.845 3.505-5.794 7.818-5.794.692 0 1.323.068 1.926.167h4.833c-1.67-1.416-3.951-2.167-6.76-2.167-5.352 0-8.74 2.59-9.798 7.489a1.737 1.737 0 00.453 1.72c.39.389.838.577 1.37.577H8.56v-1.994zm3.307-18.04C9.97 3 8.595 4.537 8.595 6.653c0 .692 0 2.797 3.273 2.797 2.815 0 3.176-1.495 3.176-2.797 0-2.15-1.306-3.652-3.176-3.652zm0 8.45c-3.302 0-5.273-1.793-5.273-4.797C6.595 3.429 8.862 1 11.868 1c3 0 5.176 2.377 5.176 5.652 0 3.049-1.886 4.797-5.176 4.797z' />
          </HeaderSC.MenuIcon>
        </>
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
          <TabWrap datas={mainLinks} />
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
          <TabWrap datas={signLinks} wrapStyle={{ listAlignX: 'right' }} />
        </HeaderSC.Nav>
        <HeaderSC.Menu>
          <TabWrap datas={menuLinks} wrapStyle={{ itemHoveropacity: '0.8' }} />
        </HeaderSC.Menu>
      </HeaderSC.Content>
    </HeaderSC.Header>
  )
}

export default HeaderView
