import React from 'react'
import { ILinkStyles } from '../../common/interface/interface'
// common components
import LinkTag from '../../common/link/LinkTag'
// style
import { HeaderStyles } from './Header.styles'

const Header: React.FC = () => {
  const linkStyle: ILinkStyles = {
    fontSize: '1.8em',
  }
  return (
    <>
      <HeaderStyles.Header>
        <HeaderStyles.Contents>
          <LinkTag text='RIDIBOOKS' linkStyles={linkStyle} />
        </HeaderStyles.Contents>
      </HeaderStyles.Header>
    </>
  )
}

export default Header
