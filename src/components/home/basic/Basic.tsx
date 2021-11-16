import React from 'react'
import { ICarousel } from '../../../common/interface/interface'
import ImgSlide from '../../../common/carousel/Carousel'
import { BasicSC } from './Basic.styles'

const Basic: React.FC = () => {
  const imgData: ICarousel[] = [
    {
      id: 1,
      imgUrl:
        'https://active.ridibooks.com/ridibooks_top_banner/20200414154145_1586846505104.jpg',
      alt: '십오야',
      href: '',
      styles: {
        width: '430px',
        height: '286px',
      },
    },
    {
      id: 2,
      imgUrl:
        'https://active.ridibooks.com/ridibooks_top_banner/20211115111729_1636942649580.jpg',
      alt: '리디_우주라이크소설 11월',
      href: '',
      styles: {
        width: '430px',
        height: '286px',
      },
    },
    {
      id: 3,
      imgUrl:
        'https://active.ridibooks.com/ridibooks_top_banner/20211105093731_1636072651469.jpg',
      alt: '문학동네_<1차원이 되고 싶어>',
      href: '',
      styles: {
        width: '430px',
        height: '286px',
      },
    },
    {
      id: 4,
      imgUrl:
        '	https://active.ridibooks.com/ridibooks_top_banner/20211027171650_1635322610733.jpg',
      alt: 'cp다수_11월 반값습니다',
      href: '',
      styles: {
        width: '430px',
        height: '286px',
      },
    },
    {
      id: 5,
      imgUrl:
        'https://active.ridibooks.com/ridibooks_top_banner/20211115125852_1636948732225.jpg',
      alt: '다산북스_<시베리아 황금열차>',
      href: '',
      styles: {
        width: '430px',
        height: '286px',
      },
    },
    {
      id: 6,
      imgUrl:
        'https://active.ridibooks.com/ridibooks_top_banner/20211028085702_1635379022246.jpg',
      alt: '[이벤트] 리디셀렉트 11월 업데이트',
      href: '',
      styles: {
        width: '430px',
        height: '286px',
      },
    },
    {
      id: 7,
      imgUrl:
        'https://active.ridibooks.com/ridibooks_top_banner/20211109150454_1636437894362.jpg',
      alt: '[출] 현대지성 11월 베스트셀러 특별전]',
      href: '',
      styles: {
        width: '430px',
        height: '286px',
      },
    },
    {
      id: 8,
      imgUrl:
        'https://active.ridibooks.com/ridibooks_top_banner/20211109083959_1636414799677.jpg',
      alt: '문학동네_<네 마음에 새겨진 이름>',
      href: '',
      styles: {
        width: '430px',
        height: '286px',
      },
    },
    {
      id: 9,
      imgUrl:
        'https://active.ridibooks.com/ridibooks_top_banner/20210915163846_1631691526128.jpg',
      alt: '한빛비즈&논픽션웹튼_김재훈의 <올림푸스 연대기>',
      href: '',
      styles: {
        width: '430px',
        height: '286px',
      },
    },
    {
      id: 10,
      imgUrl:
        '	https://active.ridibooks.com/ridibooks_top_banner/20211025120031_1635130831526.jpg',
      alt: '[상시] 책끝툰 원작 기획전',
      href: '',
      styles: {
        width: '430px',
        height: '286px',
      },
    },
  ]

  return (
    <BasicSC.ImgSlideSection>
      <ImgSlide datas={imgData}>home/basic</ImgSlide>
    </BasicSC.ImgSlideSection>
  )
}

export default Basic
