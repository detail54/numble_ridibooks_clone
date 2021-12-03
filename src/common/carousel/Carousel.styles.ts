import styled, { css } from 'styled-components'
// lib
import { Link } from 'react-router-dom'
// global style
import { setStyles } from '../../asset/css/GlobalStyle'
// interface
import { ICarouselMediaStyled } from '../interface/interface'
// image
import behind from '../../asset/images/icons/behind.png'
import next from '../../asset/images/icons/next.png'

const imgListMargin = '5px'
const imgMarginSum =
  parseInt(imgListMargin.substr(0, imgListMargin.indexOf('px')), 10) * 2

type TCalType = '-' | '+'
type TClassType = 'view' | 'hide'

const setSideMediaStyle = (
  cal: TCalType,
  after: boolean,
  classType: TClassType,
  data: ICarouselMediaStyled,
) => css`
  @media (min-width: ${data.mediaAMinWidth}) {
    width: ${`${
      parseInt(data.mediaAWidth.substr(0, data.mediaAWidth.indexOf('px')), 10) -
      10
    }px`};
    height: ${`${
      parseInt(
        data.mediaAHeight.substr(0, data.mediaAHeight.indexOf('px')),
        10,
      ) - 10
    }px`};
    position: absolute;
    top: ${imgListMargin};
    left: 0;
    transform: ${`translateX(${
      // eslint-disable-next-line no-nested-ternary
      classType === 'view'
        ? cal === '-'
          ? parseInt(
              data.mediaATransform.substr(
                0,
                data.mediaATransform.indexOf('px'),
              ),
              10,
            ) -
            parseInt(
              data.mediaAWidth.substr(0, data.mediaAWidth.indexOf('px')),
              10,
            )
          : parseInt(
              data.mediaATransform.substr(
                0,
                data.mediaATransform.indexOf('px'),
              ),
              10,
            ) +
            parseInt(
              data.mediaAWidth.substr(0, data.mediaAWidth.indexOf('px')),
              10,
            ) +
            10
        : cal === '-'
        ? parseInt(
            data.mediaATransform.substr(0, data.mediaATransform.indexOf('px')),
            10,
          ) -
          parseInt(
            data.mediaAWidth.substr(0, data.mediaAWidth.indexOf('px')),
            10,
          ) *
            2
        : parseInt(
            data.mediaATransform.substr(0, data.mediaATransform.indexOf('px')),
            10,
          ) +
          parseInt(
            data.mediaAWidth.substr(0, data.mediaAWidth.indexOf('px')),
            10,
          ) *
            2
    }px)`};

    ${after
      ? css`
          ::after {
            border-radius: 6px;
            display: block;
            content: '';
            position: absolute;
            left: 0;
            top: -3px;
            width: ${`${
              parseInt(
                data.mediaAWidth.substr(0, data.mediaAWidth.indexOf('px')),
                10,
              ) - 10
            }px`};
            height: ${`${
              parseInt(
                data.mediaAHeight.substr(0, data.mediaAHeight.indexOf('px')),
                10,
              ) -
              imgMarginSum +
              3
            }px`};
            -webkit-transition: background-color 0.2s;
            transition: background-color 0.2s;
            background-color: red;
            background-color: rgba(26, 26, 26, 0.5);
          }
        `
      : css``}
  }

  @media (min-width: ${data.mediaBMinWidth}) {
    width: ${`${
      parseInt(data.mediaBWidth.substr(0, data.mediaBWidth.indexOf('px')), 10) -
      10
    }px`};
    height: ${`${
      parseInt(
        data.mediaBHeight.substr(0, data.mediaBHeight.indexOf('px')),
        10,
      ) - 10
    }px`};
    position: absolute;
    top: ${imgListMargin};
    left: 0;
    transform: ${`translateX(${
      // eslint-disable-next-line no-nested-ternary
      classType === 'view'
        ? cal === '-'
          ? parseInt(
              data.mediaBTransform.substr(
                0,
                data.mediaBTransform.indexOf('px'),
              ),
              10,
            ) -
            parseInt(
              data.mediaBWidth.substr(0, data.mediaBWidth.indexOf('px')),
              10,
            )
          : parseInt(
              data.mediaBTransform.substr(
                0,
                data.mediaBTransform.indexOf('px'),
              ),
              10,
            ) +
            parseInt(
              data.mediaBWidth.substr(0, data.mediaBWidth.indexOf('px')),
              10,
            ) +
            10
        : cal === '-'
        ? parseInt(
            data.mediaBTransform.substr(0, data.mediaBTransform.indexOf('px')),
            10,
          ) -
          parseInt(
            data.mediaBWidth.substr(0, data.mediaBWidth.indexOf('px')),
            10,
          ) *
            2
        : parseInt(
            data.mediaBTransform.substr(0, data.mediaBTransform.indexOf('px')),
            10,
          ) +
          parseInt(
            data.mediaBWidth.substr(0, data.mediaBWidth.indexOf('px')),
            10,
          ) *
            2 +
          10
    }px)`};

    ${after
      ? css`
          ::after {
            border-radius: 6px;
            display: block;
            content: '';
            position: absolute;
            left: 0;
            top: -3px;
            width: ${`${
              parseInt(
                data.mediaBWidth.substr(0, data.mediaBWidth.indexOf('px')),
                10,
              ) - 10
            }px`};
            height: ${`${
              parseInt(
                data.mediaBHeight.substr(0, data.mediaBHeight.indexOf('px')),
                10,
              ) -
              imgMarginSum +
              3
            }px`};
            -webkit-transition: background-color 0.2s;
            transition: background-color 0.2s;
            background-color: red;
            background-color: rgba(26, 26, 26, 0.5);
          }
        `
      : css``}
  }
`

const CarouselWrap = styled.div`
  width: 100%;
  position: relative;
  ${setStyles.setAlignX('center')}
  ${setStyles.setAlignY('center')}
`

const ViewContainer = styled.div`
  width: 100%;
  overflow: hidden;
  ${setStyles.setAlignX('center')}
  ${setStyles.setAlignY('center')}
`

const Imgs = styled.ul`
  ${setStyles.setAlignX('center')}
  ${setStyles.setAlignY('center')}
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0;
  @media (min-width: ${(props: ICarouselMediaStyled) => props.mediaAMinWidth}) {
    height: ${(props: ICarouselMediaStyled) => props.mediaAHeight};
  }
  @media (min-width: ${(props: ICarouselMediaStyled) => props.mediaBMinWidth}) {
    height: ${(props: ICarouselMediaStyled) => props.mediaBHeight};
  }

  .view {
    @media (min-width: ${(props: ICarouselMediaStyled) =>
        props.mediaAMinWidth}) {
      cursor: pointer;
      width: ${(props: ICarouselMediaStyled) => props.mediaAWidth};
      height: ${(props: ICarouselMediaStyled) => props.mediaAHeight};
      position: absolute;
      top: 0;
      left: 0;
      transform: ${(props: ICarouselMediaStyled) =>
        `translateX(${props.mediaATransform})`};
    }
    @media (min-width: ${(props: ICarouselMediaStyled) =>
        props.mediaBMinWidth}) {
      cursor: pointer;
      width: ${(props: ICarouselMediaStyled) => props.mediaBWidth};
      height: ${(props: ICarouselMediaStyled) => props.mediaBHeight};
      position: absolute;
      top: 0;
      left: 0;
      transform: ${(props: ICarouselMediaStyled) =>
        `translateX(${props.mediaBTransform})`};
    }
  }

  .left-view {
    ${(props: ICarouselMediaStyled) =>
      setSideMediaStyle('-', true, 'view', props)}
  }

  .right-view {
    ${(props: ICarouselMediaStyled) =>
      setSideMediaStyle('+', true, 'view', props)}
  }

  .left-hide {
    opacity: 0;
    ${(props: ICarouselMediaStyled) =>
      setSideMediaStyle('-', false, 'hide', props)}
  }

  .right-hide {
    opacity: 0;
    ${(props: ICarouselMediaStyled) =>
      setSideMediaStyle('+', false, 'hide', props)}
  }

  .hide {
    opacity: 0;
    @media (min-width: ${(props: ICarouselMediaStyled) =>
        props.mediaAMinWidth}) {
      width: ${(props: ICarouselMediaStyled) => props.mediaAWidth};
      height: ${(props: ICarouselMediaStyled) => props.mediaAHeight};
      position: absolute;
      transform: translateX(300%);
    }
    @media (min-width: ${(props: ICarouselMediaStyled) =>
        props.mediaBMinWidth}) {
      width: ${(props: ICarouselMediaStyled) => props.mediaBWidth};
      height: ${(props: ICarouselMediaStyled) => props.mediaBHeight};
      position: absolute;
      transform: translateX(300%);
    }
  }
`

const ImgList = styled.li`
  border-radius: 6px;
  margin-left: ${imgListMargin};
  margin-right: ${imgListMargin};
  transition: 0.2s;
  ${setStyles.setAlignX('center')}
  ${setStyles.setAlignY('center')}
`

const ImgLink = styled(Link)`
  border-radius: 6px;
`

const Img = styled.img`
  border-radius: 6px;
  ${setStyles.setWidthAndHeight('100%', '100%')}
`

const ControlContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  top: 0;
  left: 0;
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

const ImgNumber = styled.div`
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
  ImgList,
  ImgLink,
  Img,
  ControlContainer,
  Center,
  Left,
  Right,
  BehindButton,
  NextButton,
  ImgNumber,
}
