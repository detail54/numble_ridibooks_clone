import React from 'react'
// common
import Carousel from '../../../common/carousel/Carousel'
import MenuWrap from '../../../common/menu/MenuWrap'
import BookCarousel from '../../../common/carousel/BookCarousel'
import BookRanking from '../../../common/bookRanking/BookRanking'
// interface
import { ICarousel, IMenu } from '../../../common/interface/interface'
import { books } from '../../../config/data/books'
// style
import { BasicSC } from './Basic.styles'

const BasicView: React.FC = () => {
  const imgData: ICarousel[] = [
    {
      id: 1,
      imgUrl:
        'https://active.ridibooks.com/ridibooks_top_banner/20200414154145_1586846505104.jpg',
      alt: '십오야',
      toLink: '/',
    },
    {
      id: 2,
      imgUrl:
        'https://active.ridibooks.com/ridibooks_top_banner/20211115111729_1636942649580.jpg',
      alt: '리디_우주라이크소설 11월',
      toLink: '/',
    },
    {
      id: 3,
      imgUrl:
        'https://active.ridibooks.com/ridibooks_top_banner/20211105093731_1636072651469.jpg',
      alt: '문학동네_<1차원이 되고 싶어>',
      toLink: '/',
    },
    {
      id: 4,
      imgUrl:
        '	https://active.ridibooks.com/ridibooks_top_banner/20211027171650_1635322610733.jpg',
      alt: 'cp다수_11월 반값습니다',
      toLink: '/',
    },
    {
      id: 5,
      imgUrl:
        'https://active.ridibooks.com/ridibooks_top_banner/20211115125852_1636948732225.jpg',
      alt: '다산북스_<시베리아 황금열차>',
      toLink: '/',
    },
    {
      id: 6,
      imgUrl:
        'https://active.ridibooks.com/ridibooks_top_banner/20211028085702_1635379022246.jpg',
      alt: '[이벤트] 리디셀렉트 11월 업데이트',
      toLink: '/',
    },
    {
      id: 7,
      imgUrl:
        'https://active.ridibooks.com/ridibooks_top_banner/20211109150454_1636437894362.jpg',
      alt: '[출] 현대지성 11월 베스트셀러 특별전]',
      toLink: '/',
    },
    {
      id: 8,
      imgUrl:
        'https://active.ridibooks.com/ridibooks_top_banner/20211109083959_1636414799677.jpg',
      alt: '문학동네_<네 마음에 새겨진 이름>',
      toLink: '/',
    },
    {
      id: 9,
      imgUrl:
        'https://active.ridibooks.com/ridibooks_top_banner/20210915163846_1631691526128.jpg',
      alt: '한빛비즈&논픽션웹튼_김재훈의 <올림푸스 연대기>',
      toLink: '/',
    },
    {
      id: 10,
      imgUrl:
        '	https://active.ridibooks.com/ridibooks_top_banner/20211025120031_1635130831526.jpg',
      alt: '[상시] 책끝툰 원작 기획전',
      toLink: '/',
    },
  ]

  const quickMenuData: IMenu[] = [
    {
      id: '신간',
      menuType: 'link',
      toLink: '/',
      text: 'ㅤ신간ㅤ',
      styles: {
        fontSize: '13px',
        fontWeight: 'light',
        height: '62px',
        alignx: 'center',
        aligny: 'center',
        flexflow: 'row wrap',
      },
      children: (
        <BasicSC.QuickMenuIcon
          src='https://active.ridibooks.com/responsive-quick-menu/+new.png'
          backgroundColor='rgb(232, 203, 153)'
        />
      ),
      childrenFirst: true,
    },
    {
      id: '이벤트',
      menuType: 'link',
      toLink: '/',
      text: '이벤트',
      styles: {
        fontSize: '13px',
        fontWeight: 'light',
        height: '62px',
        alignx: 'center',
        aligny: 'center',
        flexflow: 'row wrap',
      },
      children: (
        <BasicSC.QuickMenuIcon
          src='https://active.ridibooks.com/responsive-quick-menu/+gift.png'
          backgroundColor='rgb(153, 209, 203)'
        />
      ),
      childrenFirst: true,
    },
    {
      id: '베스트셀러 ',
      menuType: 'link',
      toLink: '/',
      text: '베스트셀러',
      styles: {
        fontSize: '13px',
        fontWeight: 'light',
        height: '62px',
        alignx: 'center',
        aligny: 'center',
        flexflow: 'row wrap',
      },
      children: (
        <BasicSC.QuickMenuIcon
          src='https://active.ridibooks.com/responsive-quick-menu/+best.png'
          backgroundColor='rgb(185, 190, 241)'
        />
      ),
      childrenFirst: true,
    },
    {
      id: '대여전',
      menuType: 'link',
      toLink: '/',
      text: '대여전',
      styles: {
        fontSize: '13px',
        fontWeight: 'light',
        height: '62px',
        alignx: 'center',
        aligny: 'center',
        flexflow: 'row wrap',
      },
      children: (
        <BasicSC.QuickMenuIcon
          src='https://active.ridibooks.com/responsive-quick-menu/20200901084102_905649.png'
          backgroundColor='rgb(153, 209, 203)'
        />
      ),
      childrenFirst: true,
    },
    {
      id: '지금 인기세트',
      menuType: 'link',
      toLink: '/',
      text: '지금 인기세트',
      styles: {
        fontSize: '13px',
        fontWeight: 'light',
        height: '62px',
        alignx: 'center',
        aligny: 'center',
        flexflow: 'row wrap',
      },
      children: (
        <BasicSC.QuickMenuIcon
          src='	https://active.ridibooks.com/responsive-quick-menu/20200910213740_235368.png'
          backgroundColor='rgb(241, 192, 167)'
        />
      ),
      childrenFirst: true,
    },
    {
      id: '신간 캘린더',
      menuType: 'link',
      toLink: '/',
      text: '신간 캘린더',
      styles: {
        fontSize: '13px',
        fontWeight: 'light',
        height: '62px',
        alignx: 'center',
        aligny: 'center',
        flexflow: 'row wrap',
      },
      children: (
        <BasicSC.QuickMenuIcon
          src='https://active.ridibooks.com/responsive-quick-menu/20191209103845_655757.png'
          backgroundColor='rgb(171, 220, 186)'
        />
      ),
      childrenFirst: true,
    },
    {
      id: '일반 혜택지도',
      menuType: 'link',
      toLink: '/',
      text: '일반 혜택지도',
      styles: {
        fontSize: '13px',
        fontWeight: 'light',
        height: '62px',
        alignx: 'center',
        aligny: 'center',
        flexflow: 'row wrap',
      },
      children: (
        <BasicSC.QuickMenuIcon
          src='https://active.ridibooks.com/responsive-quick-menu/20191205170708_742550.png'
          backgroundColor='rgb(213, 173, 235)'
        />
      ),
      childrenFirst: true,
    },
    {
      id: '위클리 쿠폰',
      menuType: 'link',
      toLink: '/',
      text: '위클리 쿠폰',
      styles: {
        fontSize: '13px',
        fontWeight: 'light',
        height: '62px',
        alignx: 'center',
        aligny: 'center',
        flexflow: 'row wrap',
      },
      children: (
        <BasicSC.QuickMenuIcon
          src='https://active.ridibooks.com/responsive-quick-menu/20200204135425_493338.png'
          backgroundColor='rgb(240, 185, 185)'
        />
      ),
      childrenFirst: true,
    },
    {
      id: '리디페이퍼',
      menuType: 'link',
      toLink: '/',
      text: '리디페이퍼',
      styles: {
        fontSize: '13px',
        fontWeight: 'light',
        height: '62px',
        alignx: 'center',
        aligny: 'center',
        flexflow: 'row wrap',
      },
      children: (
        <BasicSC.QuickMenuIcon
          src='https://active.ridibooks.com/responsive-quick-menu/+paperpro.png'
          backgroundColor='rgb(186, 219, 161)'
        />
      ),
      childrenFirst: true,
    },
  ]

  const libraryNewBooks = books.slice(0, 36)
  const nowMoreReadingBooks = books.slice(36, 45)
  const discoveryBook = books.slice(45, 62)
  const bestSeller = books.slice(62, 71)
  const weeklyNewBook = books.slice(71, 85)
  const instaRecommendedBook = books.slice(85, 100)

  return (
    <>
      <BasicSC.CarouselSection>
        <Carousel
          datas={imgData}
          mediaStyled={{
            mediaAMinWidth: '375px',
            mediaAWidth: '355px',
            mediaAHeight: '236px',
            mediaATransform: '-182px',
            mediaBMinWidth: '1000px',
            mediaBWidth: '430px',
            mediaBHeight: '286px',
            mediaBTransform: '-220px',
          }}
        >
          home/basic
        </Carousel>
      </BasicSC.CarouselSection>
      <BasicSC.QuickMenuSection
        mediaStyled={{ mediaAMinWidth: '375px', mediaBMinWidth: '700px' }}
      >
        <MenuWrap datas={quickMenuData} wrapStyle={{ flex: 1 }} />
      </BasicSC.QuickMenuSection>
      <BasicSC.LibraryNewBooksSection>
        <BookCarousel
          header='집 앞 서점에 방금 나온 신간!'
          booksData={libraryNewBooks}
          buttonColor='black'
          mediaStyled={{
            mediaAMinWidth: '375px',
            mediaAWidth: '100px',
            mediaATransform: '12px',
            mediaBMinWidth: '1000px',
            mediaBWidth: '140px',
            mediaBTransform: '4px',
          }}
          bookStyle={{
            color: 'white',
          }}
        />
      </BasicSC.LibraryNewBooksSection>
      <BasicSC.NowMoreReadingRank>
        <BookRanking
          bookData={nowMoreReadingBooks}
          header='사람들이 지금 많이 읽고 있는 책'
          bookSize='small'
          timer
        />
      </BasicSC.NowMoreReadingRank>
      <BasicSC.TodayDiscovery>
        <BookCarousel
          header='오늘, 리디의 발견'
          booksData={discoveryBook}
          buttonColor='white'
          mediaStyled={{
            mediaAMinWidth: '375px',
            mediaAWidth: '100px',
            mediaATransform: '12px',
            mediaBMinWidth: '1000px',
            mediaBWidth: '140px',
            mediaBTransform: '4px',
          }}
          bookStyle={{
            color: 'black',
          }}
        />
      </BasicSC.TodayDiscovery>
      <BasicSC.BestSeller>
        <BookRanking
          bookData={bestSeller}
          header='베스트셀러'
          bookSize='large'
          LinkHeader
        />
      </BasicSC.BestSeller>
      <BasicSC.WeeklyNewBookSection>
        <BookCarousel
          header='금주의 신간'
          booksData={weeklyNewBook}
          buttonColor='white'
          mediaStyled={{
            mediaAMinWidth: '375px',
            mediaAWidth: '100px',
            mediaATransform: '12px',
            mediaBMinWidth: '1000px',
            mediaBWidth: '140px',
            mediaBTransform: '4px',
          }}
          bookStyle={{
            color: 'black',
          }}
        />
      </BasicSC.WeeklyNewBookSection>
      <BasicSC.InstaRecommendedBookSection>
        <BookCarousel
          header='리디북스토어 인스타그램 추천도서'
          booksData={instaRecommendedBook}
          buttonColor='white'
          mediaStyled={{
            mediaAMinWidth: '375px',
            mediaAWidth: '100px',
            mediaATransform: '12px',
            mediaBMinWidth: '1000px',
            mediaBWidth: '140px',
            mediaBTransform: '4px',
          }}
          bookStyle={{
            color: 'black',
          }}
        />
      </BasicSC.InstaRecommendedBookSection>
    </>
  )
}

export default BasicView
