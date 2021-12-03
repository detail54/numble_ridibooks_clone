import styled from 'styled-components'
import { setStyles } from '../../../asset/css/GlobalStyle'
import { IQuickMenuStyle } from './interface'

const CarouselSection = styled.section`
  width: 100%;
`

const QuickMenuSection = styled.section`
  ${setStyles.setAlignX('center')}
  ${setStyles.setAlignY('center')}

  ul {
    margin: 0;
    padding: 24px 13px;
    max-width: 1000px;
  }

  li {
    ${setStyles.setWidthAndHeight('86px', '67px')}
    padding: 0px 0px 0px 10px;
    margin: 0px 9px 0px 0px;
  }
`

const QuickMenuIcon = styled.img`
  ${setStyles.setWidthAndHeight('44px', '44px')}
  background-color: ${(props: IQuickMenuStyle) => props.backgroundColor};
  font-weight: 300px;
  border-radius: 15px;
  margin-bottom: 8px;
`

const NewBooksSection = styled.section`
  width: 100%;
  background: url('https://static.ridicdn.net/_next/static/images/rec…ound@desktop-cf4f6e0299ba7bd46fca9c85a9b757de.png')
    center center no-repeat #17202e;
  background-size: contain;
  padding-top: 31px;
  padding-bottom: 36px;
`

export const BasicSC = {
  CarouselSection,
  QuickMenuSection,
  QuickMenuIcon,
  NewBooksSection,
}
