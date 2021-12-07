import React, { useState, useEffect } from 'react'
import { ICarousel, ICarouselWrap } from '../interface/interface'
import { CarouselSC } from './Carousel.styles'

const Carousel: React.FC<ICarouselWrap> = (props) => {
  const { datas, mediaStyled } = props
  const [imgNumber, setImgNumber] = useState<number>(1)

  const totalImg = datas.length

  const moveNextImgs = () => {
    if (imgNumber === datas.length) {
      setImgNumber(1)
    } else {
      setImgNumber(imgNumber + 1)
    }
  }

  const moveBehindImgs = () => {
    if (imgNumber === 1) {
      setImgNumber(10)
    } else {
      setImgNumber(imgNumber - 1)
    }
  }

  const nextImg = () => {
    moveNextImgs()
  }

  const behindImg = () => {
    moveBehindImgs()
  }

  useEffect(() => {
    const autoImgMove = setTimeout(moveNextImgs, 5000)
    return () => clearTimeout(autoImgMove)
  }, [imgNumber])

  const createCarouselItem = (data: ICarousel) => (
    <CarouselSC.ImgLink to={data.toLink}>
      <CarouselSC.Img src={data.imgUrl} alt={data.alt} />
    </CarouselSC.ImgLink>
  )

  const Imgs = datas.map((img, index) => {
    if (img.id === imgNumber) {
      return (
        <CarouselSC.ImgList className='view' key={img.id} {...mediaStyled}>
          {createCarouselItem(img)}
        </CarouselSC.ImgList>
      )
    }
    if (
      img.id === imgNumber - 1 ||
      (imgNumber === 1 && index === datas.length - 1)
    ) {
      return (
        <CarouselSC.ImgList className='left-view' key={img.id} {...mediaStyled}>
          {createCarouselItem(img)}
        </CarouselSC.ImgList>
      )
    }
    if (
      img.id === imgNumber + 1 ||
      (imgNumber === datas.length && index === 0)
    ) {
      return (
        <CarouselSC.ImgList
          className='right-view'
          key={img.id}
          {...mediaStyled}
        >
          {createCarouselItem(img)}
        </CarouselSC.ImgList>
      )
    }
    if (
      img.id === imgNumber - 2 ||
      (imgNumber === 1 && index === datas.length - 2) ||
      (imgNumber === 2 && index === datas.length - 1)
    ) {
      return (
        <CarouselSC.ImgList className='left-hide' key={img.id} {...mediaStyled}>
          {createCarouselItem(img)}
        </CarouselSC.ImgList>
      )
    }
    if (
      img.id === imgNumber + 2 ||
      (imgNumber === datas.length && index === 1) ||
      (imgNumber === datas.length - 1 && index === 0)
    ) {
      return (
        <CarouselSC.ImgList
          className='right-hide'
          key={img.id}
          {...mediaStyled}
        >
          {createCarouselItem(img)}
        </CarouselSC.ImgList>
      )
    }
    return (
      <CarouselSC.ImgList className='hide' key={img.id} {...mediaStyled}>
        {createCarouselItem(img)}
      </CarouselSC.ImgList>
    )
  })

  return (
    <>
      <CarouselSC.CarouselWrap>
        <CarouselSC.ViewContainer>
          <CarouselSC.Imgs {...mediaStyled}>{Imgs}</CarouselSC.Imgs>
        </CarouselSC.ViewContainer>
        <CarouselSC.ControlContainer>
          <CarouselSC.Left>
            <CarouselSC.BehindButton onClick={behindImg} />
          </CarouselSC.Left>
          <CarouselSC.Center {...mediaStyled}>
            <CarouselSC.ImgNumber>{`${imgNumber} / ${totalImg}`}</CarouselSC.ImgNumber>
          </CarouselSC.Center>
          <CarouselSC.Right>
            <CarouselSC.NextButton onClick={nextImg} />
          </CarouselSC.Right>
        </CarouselSC.ControlContainer>
      </CarouselSC.CarouselWrap>
    </>
  )
}

export default Carousel
