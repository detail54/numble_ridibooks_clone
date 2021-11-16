import styled from 'styled-components'
import { setStyles } from '../../asset/css/GlobalStyle'
import { IImgStyle } from '../interface/interface'

const CarouselWrap = styled.div`
  width: 100%;
  position: relative;
`

const ViewContainer = styled.div`
  width: 100%;
  height: 286px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  ${setStyles.setAlignX('center')}
  ${setStyles.setAlignY('center')}
`

const View = styled.div`
  overflow-x: hidden;
  width: 430px;
  height: 286px;
  background: yellow;
`

const Imgs = styled.div`
  ${setStyles.setAlignX('center')}
  ${setStyles.setAlignY('center')}
  transform: translateX(1935px);
  transition: 1s;
`

const Img = styled.img`
  ${(props: IImgStyle) =>
    (props.width || props.height) &&
    setStyles.setWidthAndHeight(props.width, props.height)}
`

const leftButton = styled.div``

const rightButton = styled.div``

const imgCount = styled.div``

export const CarouselSC = {
  CarouselWrap,
  ViewContainer,
  View,
  Imgs,
  Img,
  leftButton,
  rightButton,
  imgCount,
}
