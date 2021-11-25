import React, { useState, useEffect } from 'react'
import { ICarouselWrap, IImgsMediaProps } from '../interface/interface'
import { CarouselSC } from './Carousel.styles'

const Carousel: React.FC<ICarouselWrap> = (props) => {
  const { datas, mediaStyled } = props
  const [imgMediaProps, setImgMediaProps] = useState<IImgsMediaProps>({
    imgCount: 1,
    mediaAMinWidth: mediaStyled.mediaAMinWidth,
    mediaBMinWidth: mediaStyled.mediaBMinWidth,
    mediaATransform: mediaStyled.mediaATransform,
    mediaBTransform: mediaStyled.mediaBTransform,
  })

  const totalImg = datas.length

  const mediaAWidth = parseInt(
    mediaStyled.mediaAWidth.substr(0, mediaStyled.mediaAWidth.indexOf('px')),
    10,
  )

  const mediaATransform = parseInt(
    imgMediaProps.mediaATransform.substr(
      0,
      imgMediaProps.mediaATransform.indexOf('px'),
    ),
    10,
  )

  const mediaBWidth = parseInt(
    mediaStyled.mediaBWidth.substr(0, mediaStyled.mediaBWidth.indexOf('px')),
    10,
  )

  const mediaBTransform = parseInt(
    imgMediaProps.mediaBTransform.substr(
      0,
      imgMediaProps.mediaBTransform.indexOf('px'),
    ),
    10,
  )

  console.log(imgMediaProps)

  const moveNextImgs = () => {
    if (imgMediaProps.imgCount === datas.length) {
      setImgMediaProps({
        ...imgMediaProps,
        imgCount: 1,
        mediaATransform: mediaStyled.mediaATransform,
        mediaBTransform: mediaStyled.mediaBTransform,
      })
    } else {
      setImgMediaProps({
        ...imgMediaProps,
        imgCount: imgMediaProps.imgCount + 1,
        mediaATransform: `${mediaATransform - mediaAWidth}px`,
        mediaBTransform: `${mediaBTransform - mediaBWidth}px`,
      })
    }
  }

  const moveBehindImgs = () => {
    if (imgMediaProps.imgCount === 1) {
      setImgMediaProps({
        ...imgMediaProps,
        imgCount: 10,
        mediaATransform: `-${mediaStyled.mediaATransform}`,
        mediaBTransform: `-${mediaStyled.mediaBTransform}`,
      })
    } else {
      setImgMediaProps({
        ...imgMediaProps,
        imgCount: imgMediaProps.imgCount - 1,
        mediaATransform: `${mediaATransform + mediaAWidth}px`,
        mediaBTransform: `${mediaBTransform + mediaBWidth}px`,
      })
    }
  }

  const autoImgMove = () => {
    setTimeout(moveNextImgs, 5000)
  }

  const nextImg = () => {
    window.clearTimeout()
    moveNextImgs()
  }

  const behindImg = () => {
    window.clearTimeout()
    moveBehindImgs()
  }

  useEffect(() => {
    autoImgMove()
  }, [imgMediaProps])

  const imgs = datas.map((img) => (
    <CarouselSC.Img
      key={img.id}
      src={img.imgUrl}
      alt={img.alt}
      {...img.styles}
      {...mediaStyled}
    />
  ))

  return (
    <>
      <CarouselSC.CarouselWrap>
        <CarouselSC.ViewContainer {...mediaStyled}>
          <CarouselSC.Imgs {...imgMediaProps}>{imgs}</CarouselSC.Imgs>
        </CarouselSC.ViewContainer>
        <CarouselSC.ControlContainer>
          <CarouselSC.Left>
            <CarouselSC.BehindButton onClick={behindImg} />
          </CarouselSC.Left>
          <CarouselSC.Center {...mediaStyled}>
            <CarouselSC.ImgCount>{`${imgMediaProps.imgCount} / ${totalImg}`}</CarouselSC.ImgCount>
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
