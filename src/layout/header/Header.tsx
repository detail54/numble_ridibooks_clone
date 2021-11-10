import React, { useState } from 'react'
import HeaderView from './HeaderView'

const Header: React.FC = () => {
  const [searchText, setSearchText] = useState('')

  const onChangeSearchRext = (text: string) => {
    setSearchText(text)
  }

  const viewProps = {
    onChangeSearchRext,
  }

  return <HeaderView {...viewProps} />
}

export default Header
