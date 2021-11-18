import React from 'react'
import { ICarouselWrap } from '../interface/interface'
import { CarouselSC } from './Carousel.styles'

const Carousel: React.FC<ICarouselWrap> = (props) => {
  const { datas } = props

  const totalImg = datas.length
  const imgCount = 1

  const imgs = datas.map((img) => (
    <CarouselSC.Img
      key={img.id}
      src={img.imgUrl}
      alt={img.alt}
      {...img.styles}
    />
  ))

  return (
    <>
      <CarouselSC.CarouselWrap>
        <CarouselSC.ViewContainer>
          <CarouselSC.Imgs>{imgs}</CarouselSC.Imgs>
        </CarouselSC.ViewContainer>
        <CarouselSC.ControlContainer>
          <CarouselSC.Left>
            <CarouselSC.BehindButton />
          </CarouselSC.Left>
          <CarouselSC.Center>
            <CarouselSC.ImgCount>{`${imgCount} / ${totalImg}`}</CarouselSC.ImgCount>
          </CarouselSC.Center>
          <CarouselSC.Right>
            <CarouselSC.NextButton />
          </CarouselSC.Right>
        </CarouselSC.ControlContainer>
      </CarouselSC.CarouselWrap>
    </>
  )
}

export default Carousel
