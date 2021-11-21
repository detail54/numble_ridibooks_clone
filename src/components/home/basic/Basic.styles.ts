import styled from 'styled-components'
import { setStyles } from '../../../asset/css/GlobalStyle'
import { IQuickMenuStyle } from './interface'

const ImgSlideSection = styled.section`
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
`

export const BasicSC = {
  ImgSlideSection,
  QuickMenuSection,
  QuickMenuIcon,
}
