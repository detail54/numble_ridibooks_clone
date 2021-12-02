import React, { useState, useEffect } from 'react'
import { ICarousel, ICarouselWrap } from '../interface/interface'
import { CarouselSC } from './Carousel.styles'

const Carousel: React.FC<ICarouselWrap> = (props) => {
  const { datas, mediaStyled } = props
  const [imgNumber, setImgNumber] = useState<number>(1)
  // const [imgs, setImgs] = useState<JSX.Element>(<></>)

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

  // const autoImgMove = () => {
  //   setTimeout(() => {
  //     moveNextImgs()
  //   }, 5000)
  // }

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

  const createCarouselItem = (data: ICarousel, className: string) => (
    <CarouselSC.ImgList className={className} key={data.id} {...mediaStyled}>
      <CarouselSC.ImgLink to={data.toLink}>
        <CarouselSC.Img src={data.imgUrl} alt={data.alt} {...data.styles} />
      </CarouselSC.ImgLink>
    </CarouselSC.ImgList>
  )

  const basicImgs = datas.map((img, index) =>
    // eslint-disable-next-line no-nested-ternary
    index + 1 === imgNumber
      ? createCarouselItem(img, 'view')
      : // eslint-disable-next-line no-nested-ternary
      index + 1 === imgNumber - 1
      ? createCarouselItem(img, 'left-view')
      : // eslint-disable-next-line no-nested-ternary
      index + 1 === imgNumber + 1
      ? createCarouselItem(img, 'right-view')
      : // eslint-disable-next-line no-nested-ternary
      index + 1 === imgNumber - 2
      ? createCarouselItem(img, 'left-hide')
      : index + 1 === imgNumber + 2
      ? createCarouselItem(img, 'right-hide')
      : createCarouselItem(img, 'hide'),
  )

  console.log(basicImgs)

  return (
    <>
      <CarouselSC.CarouselWrap>
        <CarouselSC.Imgs {...mediaStyled}>{basicImgs}</CarouselSC.Imgs>
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
