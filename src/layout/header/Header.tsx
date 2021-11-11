import React, { useEffect, useState } from 'react'
import HeaderView from './HeaderView'

const Header: React.FC = () => {
  const [searchText, setSearchText] = useState('')
  const [searchCancleButton, setSearchCancleButton] = useState(false)
  const [searchResultModal, setSearchResultModal] = useState(true)

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

  const onRemoveSearchText = () => {
    setSearchText('')
    setSearchCancleButton(false)
  }

  const openSearchResultModal = () => {
    setSearchResultModal(true)
  }

  const closeSearchResultModal = () => {
    setSearchResultModal(false)
  }

  const viewProps = {
    searchText,
    onChangeSearchText,
    onRemoveSearchText,
    searchCancleButton,
    openSearchResultModal,
    closeSearchResultModal,
  }

  return <HeaderView {...viewProps} />
}

export default Header
