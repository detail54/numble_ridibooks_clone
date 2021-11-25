import styled from 'styled-components'
import { setStyles } from '../../asset/css/GlobalStyle'
import {
  ICarouselMediaStyled,
  IImgsMediaProps,
  IImgStyle,
} from '../interface/interface'
import behind from '../../asset/images/icons/behind.png'
import next from '../../asset/images/icons/next.png'

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
  @media (min-width: ${(props: ICarouselMediaStyled) => props.mediaAMinWidth}) {
    width: ${(props: ICarouselMediaStyled) => props.mediaAWidth};
    height: ${(props: ICarouselMediaStyled) => props.mediaAHeight};
  }
  @media (min-width: ${(props: ICarouselMediaStyled) => props.mediaBMinWidth}) {
    width: ${(props: ICarouselMediaStyled) => props.mediaBWidth};
    height: ${(props: ICarouselMediaStyled) => props.mediaBHeight};
  }
`

const Imgs = styled.div`
  position: absolute;
  ${setStyles.setAlignX('center')}
  ${setStyles.setAlignY('center')}
  transition: 1s;
  @media (min-width: ${(props: IImgsMediaProps) => props.mediaAMinWidth}) {
    transform: ${(props: IImgsMediaProps) =>
      `translateX(${props.mediaATransform})`};
  }
  @media (min-width: ${(props: IImgsMediaProps) => props.mediaBMinWidth}) {
    transform: ${(props: IImgsMediaProps) =>
      `translateX(${props.mediaBTransform})`};
  }
`

const Img = styled.img`
  border-radius: 6px;
  @media (min-width: ${(props: ICarouselMediaStyled) => props.mediaAMinWidth}) {
    width: ${(props: ICarouselMediaStyled) => props.mediaAWidth};
    height: ${(props: ICarouselMediaStyled) => props.mediaAHeight};
  }
  @media (min-width: ${(props: ICarouselMediaStyled) => props.mediaBMinWidth}) {
    width: ${(props: ICarouselMediaStyled) => props.mediaBWidth};
    height: ${(props: ICarouselMediaStyled) => props.mediaBHeight};
  }
`

const ControlContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  ${setStyles.setAlignX('center')}
`
const Center = styled.div`
  position: relative;
  @media (min-width: ${(props: ICarouselMediaStyled) => props.mediaAMinWidth}) {
    width: ${(props: ICarouselMediaStyled) => props.mediaAWidth};
    height: ${(props: ICarouselMediaStyled) => props.mediaAHeight};
  }
  @media (min-width: ${(props: ICarouselMediaStyled) => props.mediaBMinWidth}) {
    width: ${(props: ICarouselMediaStyled) => props.mediaBWidth};
    height: ${(props: ICarouselMediaStyled) => props.mediaBHeight};
  }
`

const Left = styled.div`
  width: 40px;
  margin: 0px 20px;
`

const Right = styled.div`
  width: 40px;
  margin: 0px 20px;
`

const BehindButton = styled.button`
  background-image: url(${behind});
  background-size: 15px 15px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
  border-radius: 30px;
  border: none;
  opacity: 0.5;
  width: 40px;
  height: 40px;
  z-index: 2;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`

const NextButton = styled.button`
  background-image: url(${next});
  background-size: 15px 15px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
  border-radius: 30px;
  border: none;
  opacity: 0.5;
  width: 40px;
  height: 40px;
  z-index: 2;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`

const ImgCount = styled.div`
  width: 54px;
  height: 24px;
  font-size: 12px;
  text-align: center;
  color: white;
  background-color: #00000066;
  position: absolute;
  right: 10px;
  bottom: 10px;
  border-radius: 12px;
  line-height: 24px;
  border: 1px solid #ffffff40;
`

export const CarouselSC = {
  CarouselWrap,
  ViewContainer,
  Imgs,
  Img,
  ControlContainer,
  Center,
  Left,
  Right,
  BehindButton,
  NextButton,
  ImgCount,
}