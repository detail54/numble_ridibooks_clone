import React from 'react'
import SearchInput from '../../common/input/SearchInput'
import LinkTag from '../../common/link/LinkTag'
// style
import { HeaderSC } from './Header.styles'
// interface
import { IHeader } from './interface'

const HeaderView: React.FC<IHeader> = (props) => {
  const {
    searchText,
    onChangeSearchText,
    onRemoveSearchText,
    searchCancleButton,
    openSearchResultModal,
    closeSearchResultModal,
  } = props

  return (
    <HeaderSC.Header>
      <HeaderSC.Content>
        <HeaderSC.Nav>
          <HeaderSC.Ul>
            <HeaderSC.Li>
              <LinkTag
                toLink='/'
                text='RIDIBOOKS'
                styles={{
                  fontSize: 'medium',
                  fontWeight: 'bold',
                  hoverOpacity: '0.8',
                  height: '33px',
                  alignY: 'center',
                }}
              />
            </HeaderSC.Li>
            <HeaderSC.Li divider>
              <LinkTag
                toLink='/'
                text='RIDI'
                styles={{
                  fontSize: 'medium',
                  fontWeight: 'bold',
                  hoverOpacity: '0.8',
                  height: '33px',
                  alignY: 'center',
                  opacity: true,
                }}
              >
                <HeaderSC.Span fontWeight='light'>Select</HeaderSC.Span>
              </LinkTag>
            </HeaderSC.Li>
          </HeaderSC.Ul>
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
        </HeaderSC.Nav>
      </HeaderSC.Content>
    </HeaderSC.Header>
  )
}

export default HeaderView
