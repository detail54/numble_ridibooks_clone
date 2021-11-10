import React from 'react'
// common components
import LinkTag from '../../common/link/LinkTag'
// style
import { HeaderStyles } from './Header.styles'

const Header: React.FC = () => {
  return (
    <>
      <HeaderStyles.Header>
        <HeaderStyles.Contents>
          <LinkTag text='RIDIBOOKS' fontSize='medium' fontWeight='semibold' />
        </HeaderStyles.Contents>
      </HeaderStyles.Header>
    </>
  )
}

export default Header
