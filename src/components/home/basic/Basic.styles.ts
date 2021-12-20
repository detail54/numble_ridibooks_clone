import styled from 'styled-components'
// global style
import { setStyles } from '../../../asset/css/GlobalStyle'
// interface
import { IQuickMenuStyle } from './interface'

const CarouselSection = styled.section`
  width: 100%;
`

const QuickMenuSection = styled.section`
  ${setStyles.setAlignX('center')}
  ${setStyles.setAlignY('center')}
  width: 100%;

  ul {
    margin: 0;
    max-width: 1000px;
    width: 100%;

    @media (min-width: ${setStyles.mediaWidth.mediaA}) {
      padding: 16px 3px;
    }
    @media (min-width: ${setStyles.mediaWidth.mediaB}) {
      padding: 24px 13px;
    }
  }

  li {
    text-align: center;
    ${setStyles.setFontWeight('light')}
    @media (min-width: ${setStyles.mediaWidth.mediaA}) {
      padding: 0px;
      height: 83px;
      ${setStyles.setAlignY('start')}
      word-break: keep-all;
    }
    @media (min-width: ${setStyles.mediaWidth.mediaB}) {
      padding: 0 20px;
      height: 62px;
      ${setStyles.setAlignY('center')}
    }
  }
`

const QuickMenuIcon = styled.img`
  ${setStyles.setWidthAndHeight('44px', '44px')}
  ${setStyles.setFontWeight('medium')}
  background-color: ${(props: IQuickMenuStyle) => props.backgroundColor || ''};
  border-radius: 15px;
  margin-bottom: 8px;
`

const LibraryNewBooksSection = styled.section`
  width: 100%;
  background-image: url('https://static.ridicdn.net/_next/static/images/recommended_book_background@desktop-cf4f6e0299ba7bd46fca9c85a9b757de.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-color: #17202e;
  padding-top: 31px;
  padding-bottom: 36px;
  overflow: hidden;
  ${setStyles.setAlignX('center')}
  ${setStyles.setAlignY('center')}
`

const NowMoreReadingRank = styled.section`
  width: 100%;
  padding: 24px 0;
  ${setStyles.setAlignX('center')}
  ${setStyles.setAlignY('center')}
`

const TodayDiscovery = styled.section`
  width: 100%;
  padding: 24px 0;
  ${setStyles.setAlignX('center')}
  ${setStyles.setAlignY('center')}
`

const BestSeller = styled.section`
  width: 100%;
  padding: 24px 0;
  ${setStyles.setAlignX('center')}
  ${setStyles.setAlignY('center')}
`

const WeeklyNewBookSection = styled.section`
  width: 100%;
  padding: 24px 0;
  ${setStyles.setAlignX('center')}
  ${setStyles.setAlignY('center')}
`

const InstaRecommendedBookSection = styled.section`
  width: 100%;
  padding: 24px 0;
  ${setStyles.setAlignX('center')}
  ${setStyles.setAlignY('center')}
`

export const BasicSC = {
  CarouselSection,
  QuickMenuSection,
  QuickMenuIcon,
  LibraryNewBooksSection,
  NowMoreReadingRank,
  TodayDiscovery,
  BestSeller,
  WeeklyNewBookSection,
  InstaRecommendedBookSection,
}
