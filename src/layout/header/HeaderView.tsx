import React from 'react'
// common component
import SearchInput from '../../common/input/SearchInput'
import LinkWrap from '../../common/link/LinkWrap'
// style
import { HeaderSC } from './Header.styles'
// interface
import { IHeader } from './interface'
import { ILink } from '../../common/interface/interface'

const HeaderView: React.FC<IHeader> = (props) => {
  const {
    searchText,
    onChangeSearchText,
    onRemoveSearchText,
    searchCancleButton,
    openSearchResultModal,
    closeSearchResultModal,
  } = props

  const mainLinks: ILink[] = [
    {
      toLink: '/',
      text: 'RIDIBOOKS',
      styles: {
        fontSize: 'medium',
        fontWeight: 'bold',
        hoverOpacity: '0.8',
        height: '33px',
        alignY: 'center',
      },
    },
    {
      toLink: '/',
      text: 'RIDI',
      styles: {
        fontSize: 'medium',
        fontWeight: 'bold',
        hoverOpacity: '0.8',
        height: '33px',
        alignY: 'center',
        opacity: true,
      },
      children: <HeaderSC.Span fontWeight='light'>Select</HeaderSC.Span>,
    },
  ]

  const signLinks: ILink[] = [
    {
      toLink: '/',
      text: '회원가입',
      styles: {
        fontSize: '13px',
        fontWeight: 'bold',
        height: '30px',
        alignX: 'center',
        alignY: 'center',
        bgColor: 'none',
      },
    },
    {
      toLink: '/',
      text: '로그인',
      styles: {
        fontSize: '13px',
        fontWeight: 'bold',
        height: '30px',
        alignX: 'center',
        alignY: 'center',
        bgColor: 'white',
      },
    },
  ]

  return (
    <HeaderSC.Header>
      <HeaderSC.Content>
        <HeaderSC.Nav>
          <LinkWrap datas={mainLinks} />
          <SearchInput
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
          <LinkWrap datas={signLinks} />
        </HeaderSC.Nav>
      </HeaderSC.Content>
    </HeaderSC.Header>
  )
}

export default HeaderView
