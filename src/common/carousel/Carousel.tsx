import React, { useState, useEffect } from 'react'
import {
  ICarouselWrap,
  IImgsMediaProps,
  initImgMediaProps,
} from '../interface/interface'
import { CarouselSC } from './Carousel.styles'

const Carousel: React.FC<ICarouselWrap> = (props) => {
  const { datas, mediaStyled } = props
  const [imgsMediaProps, setImgsMediaProps] =
    useState<IImgsMediaProps>(initImgMediaProps)

  useEffect(() => {
    setImgsMediaProps({
      mediaAMinWidth: mediaStyled.mediaAMinWidth,
      mediaBMinWidth: mediaStyled.mediaBMinWidth,
      mediaATransform: mediaStyled.mediaATransform,
      mediaBTransform: mediaStyled.mediaBTransform,
    })
  }, [])

  const totalImg = datas.length
  const imgCount = 1

  const mediaATransformIndex = imgsMediaProps.mediaATransform.indexOf('px')
  const mediaATransformRemovePx = imgsMediaProps.mediaATransform.substr(
    0,
    mediaATransformIndex,
  )
  const mediaATransformPx = parseInt(mediaATransformRemovePx, 10)

  const mediaAMinWidthIndex = imgsMediaProps.mediaATransform.indexOf('px')
  const mediaAMinWidthRemovePx = imgsMediaProps.mediaATransform.substr(
    0,
    mediaAMinWidthIndex,
  )
  const mediaAMinWidthPx = parseInt(mediaAMinWidthRemovePx, 10)

  const mediaBTransformIndex = imgsMediaProps.mediaBTransform.indexOf('px')
  const mediaBTransformRemovePx = imgsMediaProps.mediaBTransform.substr(
    0,
    mediaBTransformIndex,
  )
  const mediaBTransformPx = parseInt(mediaBTransformRemovePx, 10)

  const mediaBMinWidthIndex = imgsMediaProps.mediaBTransform.indexOf('px')
  const mediaBMinWidthRemovePx = imgsMediaProps.mediaBTransform.substr(
    0,
    mediaBMinWidthIndex,
  )
  const mediaBMinWidthPx = parseInt(mediaBMinWidthRemovePx, 10)

  setTimeout(() => {
    useEffect(() => {
      setImgsMediaProps({
        ...imgsMediaProps,
        mediaATransform: `${mediaATransformPx - mediaAMinWidthPx}px`,
        mediaBTransform: `${mediaBTransformPx - mediaBMinWidthPx}px`,
      })
    }, [])
  }, 1000)

  console.log(imgsMediaProps)

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
          <CarouselSC.Imgs {...imgsMediaProps}>{imgs}</CarouselSC.Imgs>
        </CarouselSC.ViewContainer>
        <CarouselSC.ControlContainer>
          <CarouselSC.Left>
            <CarouselSC.BehindButton />
          </CarouselSC.Left>
          <CarouselSC.Center {...mediaStyled}>
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
