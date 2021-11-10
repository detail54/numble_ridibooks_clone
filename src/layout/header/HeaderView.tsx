import React from 'react'
import LinkTag from '../../common/link/LinkTag'
// style
import { HeaderSC } from './Header.styles'
// interface
import { IHeaderView } from './interface'

const HeaderView: React.FC<IHeaderView> = (props) => {
  const { onChangeSearchRext } = props

  return (
    <HeaderSC.Header>
      <HeaderSC.Contents>
        <HeaderSC.Ul>
          <HeaderSC.Li>
            <LinkTag
              toLink='/'
              text='RIDIBOOKS'
              fontSize='medium'
              fontWeight='bold'
              hoverOpacity='0.8'
            />
          </HeaderSC.Li>
          <HeaderSC.Li>
            <LinkTag
              toLink='/'
              text='RIDI'
              fontSize='medium'
              fontWeight='bold'
              hoverOpacity='0.8'
              opacity
            >
              <HeaderSC.Span fontWeight='light'>Select</HeaderSC.Span>
            </LinkTag>
          </HeaderSC.Li>
        </HeaderSC.Ul>
      </HeaderSC.Contents>
    </HeaderSC.Header>
  )
}

export default HeaderView
