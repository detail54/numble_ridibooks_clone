import React from 'react'
import { ICarouselWrap } from '../interface/interface'
import { CarouselSC } from './Carousel.styles'

const Carousel: React.FC<ICarouselWrap> = (props) => {
  const { datas } = props

  const totalImg = datas.length

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
      </CarouselSC.CarouselWrap>
      <CarouselSC.ControlContainer>
        <CarouselSC.RightButton />
      </CarouselSC.ControlContainer>
    </>
  )
}

export default Carousel
