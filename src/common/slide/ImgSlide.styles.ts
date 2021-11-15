import styled from 'styled-components'
import { setStyles } from '../../GlobalStyle'
import { IImgStyle } from '../interface/interface'

const ImgSlideWrap = styled.div`
  width: 100%;
  ${setStyles.setAlignX('center')}
  ${setStyles.setAlignY('center')}
`

const Img = styled.img`
  ${(props: IImgStyle) =>
    (props.width || props.height) &&
    setStyles.setWidthAndHeight(props.width, props.height)}
`

export const ImgSlideSC = {
  ImgSlideWrap,
  Img,
}
