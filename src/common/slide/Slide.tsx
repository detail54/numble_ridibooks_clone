import React from 'react'
import { IImgSlideWrap } from '../interface/interface'
import { ImgSlideSC } from './ImgSlide.styles'

const ImgSlide: React.FC<IImgSlideWrap> = (props) => {
  const { datas } = props

  const totalImg = datas.length

  const imgs = datas.map((img) => (
    <ImgSlideSC.Img
      key={img.id}
      src={img.imgUrl}
      alt={img.alt}
      {...img.styles}
    />
  ))

  return <ImgSlideSC.ImgSlideWrap>{imgs}</ImgSlideSC.ImgSlideWrap>
}

export default ImgSlide
