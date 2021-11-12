import React, { useEffect, useState } from 'react'
import HeaderView from './HeaderView'

const Header: React.FC = () => {
  const [searchText, setSearchText] = useState('')
  const [searchCancleButton, setSearchCancleButton] = useState(false)
  const [searchResultModal, setSearchResultModal] = useState(true)
  const [homeMenuEnabled, setHomeMenuEnabled] = useState(true)
  const [noticeMenuEnabled, setNoticeMenuEnabled] = useState(false)
  const [cartMenuEnabled, setcartMenuEnabled] = useState(false)
  const [MyMenuEnabled, setMyMenuEnabled] = useState(false)

  useEffect(() => {
    if (searchText.length > 0) {
      setSearchCancleButton(true)
    } else {
      setSearchCancleButton(false)
    }
  }, [searchText])

  const onChangeSearchText = (text: string) => {
    setSearchText(text)
  }

  const onRemoveSearchText = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault()
    setSearchText('')
  }

  const openSearchResultModal = () => {
    setSearchResultModal(true)
  }

  const closeSearchResultModal = () => {
    setSearchResultModal(false)
  }

  const menuEnabled = (data: string) => {
    switch (data) {
      case '홈':
        setHomeMenuEnabled(true)
        setNoticeMenuEnabled(false)
        setcartMenuEnabled(false)
        setMyMenuEnabled(false)
        break
      case '알림':
        setHomeMenuEnabled(false)
        setNoticeMenuEnabled(true)
        setcartMenuEnabled(false)
        setMyMenuEnabled(false)
        break
      case '카트':
        setHomeMenuEnabled(false)
        setNoticeMenuEnabled(false)
        setcartMenuEnabled(true)
        setMyMenuEnabled(false)
        break
      case '마이리디':
        setHomeMenuEnabled(false)
        setNoticeMenuEnabled(false)
        setcartMenuEnabled(false)
        setMyMenuEnabled(true)
        break
      default:
        break
    }
  }

  const viewProps = {
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
  }

  return <HeaderView {...viewProps} />
}

export default Header
