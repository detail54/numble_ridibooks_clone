import styled from 'styled-components'
import { setStyles } from '../../asset/css/GlobalStyle'
import { IImgStyle } from '../interface/interface'
import behind from '../../asset/images/icons/behind.png'

const CarouselWrap = styled.div`
  width: 100%;
  position: relative;
  ${setStyles.setAlignX('center')}
  ${setStyles.setAlignY('center')}
`

const ViewContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
  ${setStyles.setAlignX('center')}
  ${setStyles.setAlignY('center')}
  @media (min-width: 375px) {
    width: 355px;
    height: 236px;
  }
  @media (min-width: 1000px) {
    width: 430px;
    height: 286px;
  }
`

const Imgs = styled.div`
  position: absolute;
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

const ControlContainer = styled.div`
  @media (min-width: 375px) {
    width: 355px;
    height: 236px;
  }
  @media (min-width: 1000px) {
    width: 430px;
    height: 286px;
  }
`

const LeftButton = styled.button``

const RightButton = styled.button`
  background-image: url(${behind});
  background-size: 15px 15px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
  border-radius: 30px;
  opacity: 0.5;
  width: 40px;
  height: 40px;
  z-index: 2;
  position: absolute;
  left: 0;
`

const ImgCount = styled.div``

export const CarouselSC = {
  CarouselWrap,
  ViewContainer,
  Imgs,
  Img,
  ControlContainer,
  LeftButton,
  RightButton,
  ImgCount,
}
