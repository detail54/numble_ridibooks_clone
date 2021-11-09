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
          <LinkTag
            text='RIDIBOOKS'
            styles={{ fontSize: '2em', fontWeight: 'bold' }}
          />
        </HeaderStyles.Contents>
      </HeaderStyles.Header>
    </>
  )
}

export default Header
