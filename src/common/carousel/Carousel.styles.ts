import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { setStyles } from '../../asset/css/GlobalStyle'
import { ICarouselMediaStyled, IImgStyle } from '../interface/interface'
import behind from '../../asset/images/icons/behind.png'
import next from '../../asset/images/icons/next.png'

const imgListMargin = '5px'
const imgMarginSum =
  parseInt(imgListMargin.substr(0, imgListMargin.indexOf('px')), 10) * 2

const CarouselWrap = styled.div`
  width: 100%;
  position: relative;
  ${setStyles.setAlignX('center')}
  ${setStyles.setAlignY('center')}
`

const Imgs = styled.ul`
  ${setStyles.setAlignX('center')}
  ${setStyles.setAlignY('center')}
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
    @media (min-width: ${(props: ICarouselMediaStyled) =>
        props.mediaAMinWidth}) {
      width: ${(props: ICarouselMediaStyled) =>
        `${
          parseInt(
            props.mediaAWidth.substr(0, props.mediaAWidth.indexOf('px')),
            10,
          ) - 10
        }px`};
      height: ${(props: ICarouselMediaStyled) =>
        `${
          parseInt(
            props.mediaAHeight.substr(0, props.mediaAHeight.indexOf('px')),
            10,
          ) - 10
        }px`};
      position: absolute;
      top: ${imgListMargin};
      left: 0;
      transform: ${(props: ICarouselMediaStyled) =>
        `translateX(${
          parseInt(
            props.mediaATransform.substr(
              0,
              props.mediaATransform.indexOf('px'),
            ),
            10,
          ) -
          parseInt(
            props.mediaAWidth.substr(0, props.mediaAWidth.indexOf('px')),
            10,
          )
        }px)`};
      img::after {
        display: block;
        content: '';
        position: absolute;
        left: 0;
        top: ${imgListMargin};
        width: ${(props: ICarouselMediaStyled) =>
          `${
            parseInt(
              props.mediaAWidth.substr(0, props.mediaAWidth.indexOf('px')),
              10,
            ) - 10
          }px`};
        height: ${(props: ICarouselMediaStyled) =>
          `${
            parseInt(
              props.mediaAHeight.substr(0, props.mediaAHeight.indexOf('px')),
              10,
            ) - 10
          }px`};
        -webkit-transition: background-color 0.2s;
        transition: background-color 0.2s;
        background-color: red;
        /* background-color: rgba(26, 26, 26, 0.5); */
      }
    }
    @media (min-width: ${(props: ICarouselMediaStyled) =>
        props.mediaBMinWidth}) {
      width: ${(props: ICarouselMediaStyled) =>
        `${
          parseInt(
            props.mediaBWidth.substr(0, props.mediaBWidth.indexOf('px')),
            10,
          ) - 10
        }px`};
      height: ${(props: ICarouselMediaStyled) =>
        `${
          parseInt(
            props.mediaBHeight.substr(0, props.mediaBHeight.indexOf('px')),
            10,
          ) - 10
        }px`};
      position: absolute;
      top: ${imgListMargin};
      left: 0;
      transform: ${(props: ICarouselMediaStyled) =>
        `translateX(${
          parseInt(
            props.mediaBTransform.substr(
              0,
              props.mediaBTransform.indexOf('px'),
            ),
            10,
          ) -
          parseInt(
            props.mediaBWidth.substr(0, props.mediaBWidth.indexOf('px')),
            10,
          )
        }px)`};
      img::after {
        display: block;
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: ${(props: ICarouselMediaStyled) =>
          `${
            parseInt(
              props.mediaBWidth.substr(0, props.mediaBWidth.indexOf('px')),
              10,
            ) - 10
          }px`};
        height: ${(props: ICarouselMediaStyled) =>
          `${
            parseInt(
              props.mediaBHeight.substr(0, props.mediaBHeight.indexOf('px')),
              10,
            ) - 10
          }px`};
        -webkit-transition: background-color 0.2s;
        transition: background-color 0.2s;
        background-color: rgba(26, 26, 26, 0.5);
      }
    }
  }

  .right-view {
    @media (min-width: ${(props: ICarouselMediaStyled) =>
        props.mediaAMinWidth}) {
      width: ${(props: ICarouselMediaStyled) =>
        `${
          parseInt(
            props.mediaAWidth.substr(0, props.mediaAWidth.indexOf('px')),
            10,
          ) - 10
        }px`};
      height: ${(props: ICarouselMediaStyled) =>
        `${
          parseInt(
            props.mediaAHeight.substr(0, props.mediaAHeight.indexOf('px')),
            10,
          ) - 10
        }px`};
      position: absolute;
      top: ${imgListMargin};
      left: 0;
      transform: ${(props: ICarouselMediaStyled) =>
        `translateX(${
          parseInt(
            props.mediaATransform.substr(
              0,
              props.mediaATransform.indexOf('px'),
            ),
            10,
          ) +
          parseInt(
            props.mediaAWidth.substr(0, props.mediaAWidth.indexOf('px')),
            10,
          ) +
          imgMarginSum
        }px)`};
      img::after {
        display: block;
        content: '';
        position: absolute;
        left: 0;
        top: ${imgListMargin};
        width: ${(props: ICarouselMediaStyled) =>
          `${
            parseInt(
              props.mediaAWidth.substr(0, props.mediaAWidth.indexOf('px')),
              10,
            ) - 10
          }px`};
        height: ${(props: ICarouselMediaStyled) =>
          `${
            parseInt(
              props.mediaAHeight.substr(0, props.mediaAHeight.indexOf('px')),
              10,
            ) - 10
          }px`};
        -webkit-transition: background-color 0.2s;
        transition: background-color 0.2s;
        background-color: rgba(26, 26, 26, 0.5);
      }
    }
    @media (min-width: ${(props: ICarouselMediaStyled) =>
        props.mediaBMinWidth}) {
      width: ${(props: ICarouselMediaStyled) =>
        `${
          parseInt(
            props.mediaBWidth.substr(0, props.mediaBWidth.indexOf('px')),
            10,
          ) - 10
        }px`};
      height: ${(props: ICarouselMediaStyled) =>
        `${
          parseInt(
            props.mediaBHeight.substr(0, props.mediaBHeight.indexOf('px')),
            10,
          ) - 10
        }px`};
      position: absolute;
      top: ${imgListMargin};
      left: 0;
      transform: ${(props: ICarouselMediaStyled) =>
        `translateX(${
          parseInt(
            props.mediaBTransform.substr(
              0,
              props.mediaBTransform.indexOf('px'),
            ),
            10,
          ) +
          parseInt(
            props.mediaBWidth.substr(0, props.mediaBWidth.indexOf('px')),
            10,
          ) +
          imgMarginSum
        }px)`};
      img::after {
        display: block;
        content: '';
        position: absolute;
        left: 0;
        top: ${imgListMargin};
        width: ${(props: ICarouselMediaStyled) =>
          `${
            parseInt(
              props.mediaBWidth.substr(0, props.mediaBWidth.indexOf('px')),
              10,
            ) - 10
          }px`};
        height: ${(props: ICarouselMediaStyled) =>
          `${
            parseInt(
              props.mediaBHeight.substr(0, props.mediaBHeight.indexOf('px')),
              10,
            ) - 10
          }px`};
        -webkit-transition: background-color 0.2s;
        transition: background-color 0.2s;
        background-color: rgba(26, 26, 26, 0.5);
      }
    }
  }

  .left-hide {
    opacity: 0;
    @media (min-width: ${(props: ICarouselMediaStyled) =>
        props.mediaAMinWidth}) {
      width: ${(props: ICarouselMediaStyled) =>
        `${
          parseInt(
            props.mediaAWidth.substr(0, props.mediaAWidth.indexOf('px')),
            10,
          ) - 10
        }px`};
      height: ${(props: ICarouselMediaStyled) =>
        `${
          parseInt(
            props.mediaAHeight.substr(0, props.mediaAHeight.indexOf('px')),
            10,
          ) - 10
        }px`};
      position: absolute;
      top: ${imgListMargin};
      left: 0;
      transform: ${(props: ICarouselMediaStyled) =>
        `translateX(${
          parseInt(
            props.mediaATransform.substr(
              0,
              props.mediaATransform.indexOf('px'),
            ),
            10,
          ) -
          parseInt(
            props.mediaAWidth.substr(0, props.mediaAWidth.indexOf('px')),
            10,
          ) *
            2
        }px)`};
      img::after {
        display: block;
        content: '';
        position: absolute;
        left: 0;
        top: ${imgListMargin};
        width: ${(props: ICarouselMediaStyled) =>
          `${
            parseInt(
              props.mediaAWidth.substr(0, props.mediaAWidth.indexOf('px')),
              10,
            ) - 10
          }px`};
        height: ${(props: ICarouselMediaStyled) =>
          `${
            parseInt(
              props.mediaAHeight.substr(0, props.mediaAHeight.indexOf('px')),
              10,
            ) - 10
          }px`};
        -webkit-transition: background-color 0.2s;
        transition: background-color 0.2s;
        background-color: red;
        /* background-color: rgba(26, 26, 26, 0.5); */
      }
    }
    @media (min-width: ${(props: ICarouselMediaStyled) =>
        props.mediaBMinWidth}) {
      width: ${(props: ICarouselMediaStyled) =>
        `${
          parseInt(
            props.mediaBWidth.substr(0, props.mediaBWidth.indexOf('px')),
            10,
          ) - 10
        }px`};
      height: ${(props: ICarouselMediaStyled) =>
        `${
          parseInt(
            props.mediaBHeight.substr(0, props.mediaBHeight.indexOf('px')),
            10,
          ) - 10
        }px`};
      position: absolute;
      top: ${imgListMargin};
      left: 0;
      transform: ${(props: ICarouselMediaStyled) =>
        `translateX(${
          parseInt(
            props.mediaBTransform.substr(
              0,
              props.mediaBTransform.indexOf('px'),
            ),
            10,
          ) -
          parseInt(
            props.mediaBWidth.substr(0, props.mediaBWidth.indexOf('px')),
            10,
          ) *
            2
        }px)`};
      img::after {
        display: block;
        content: '';
        position: absolute;
        left: 0;
        top: ${imgListMargin};
        width: ${(props: ICarouselMediaStyled) =>
          `${
            parseInt(
              props.mediaBWidth.substr(0, props.mediaBWidth.indexOf('px')),
              10,
            ) - 10
          }px`};
        height: ${(props: ICarouselMediaStyled) =>
          `${
            parseInt(
              props.mediaBHeight.substr(0, props.mediaBHeight.indexOf('px')),
              10,
            ) - 10
          }px`};
        -webkit-transition: background-color 0.2s;
        transition: background-color 0.2s;
        background-color: rgba(26, 26, 26, 0.5);
      }
    }
  }

  .right-hide {
    opacity: 0;
    @media (min-width: ${(props: ICarouselMediaStyled) =>
        props.mediaAMinWidth}) {
      width: ${(props: ICarouselMediaStyled) =>
        `${
          parseInt(
            props.mediaAWidth.substr(0, props.mediaAWidth.indexOf('px')),
            10,
          ) - 10
        }px`};
      height: ${(props: ICarouselMediaStyled) =>
        `${
          parseInt(
            props.mediaAHeight.substr(0, props.mediaAHeight.indexOf('px')),
            10,
          ) - 10
        }px`};
      position: absolute;
      top: ${imgListMargin};
      left: 0;
      transform: ${(props: ICarouselMediaStyled) =>
        `translateX(${
          parseInt(
            props.mediaATransform.substr(
              0,
              props.mediaATransform.indexOf('px'),
            ),
            10,
          ) +
          (parseInt(
            props.mediaAWidth.substr(0, props.mediaAWidth.indexOf('px')),
            10,
          ) +
            imgMarginSum) *
            2
        }px)`};
      img::after {
        display: block;
        content: '';
        position: absolute;
        left: 0;
        top: ${imgListMargin};
        width: ${(props: ICarouselMediaStyled) =>
          `${
            parseInt(
              props.mediaAWidth.substr(0, props.mediaAWidth.indexOf('px')),
              10,
            ) - 10
          }px`};
        height: ${(props: ICarouselMediaStyled) =>
          `${
            parseInt(
              props.mediaAHeight.substr(0, props.mediaAHeight.indexOf('px')),
              10,
            ) - 10
          }px`};
        -webkit-transition: background-color 0.2s;
        transition: background-color 0.2s;
        background-color: rgba(26, 26, 26, 0.5);
      }
    }
    @media (min-width: ${(props: ICarouselMediaStyled) =>
        props.mediaBMinWidth}) {
      width: ${(props: ICarouselMediaStyled) =>
        `${
          parseInt(
            props.mediaBWidth.substr(0, props.mediaBWidth.indexOf('px')),
            10,
          ) - 10
        }px`};
      height: ${(props: ICarouselMediaStyled) =>
        `${
          parseInt(
            props.mediaBHeight.substr(0, props.mediaBHeight.indexOf('px')),
            10,
          ) - 10
        }px`};
      position: absolute;
      top: ${imgListMargin};
      left: 0;
      transform: ${(props: ICarouselMediaStyled) =>
        `translateX(${
          parseInt(
            props.mediaBTransform.substr(
              0,
              props.mediaBTransform.indexOf('px'),
            ),
            10,
          ) +
          (parseInt(
            props.mediaBWidth.substr(0, props.mediaBWidth.indexOf('px')),
            10,
          ) +
            imgMarginSum) *
            2
        }px)`};
      img::after {
        display: block;
        content: '';
        position: absolute;
        left: 0;
        top: ${imgListMargin};
        width: ${(props: ICarouselMediaStyled) =>
          `${
            parseInt(
              props.mediaBWidth.substr(0, props.mediaBWidth.indexOf('px')),
              10,
            ) - 10
          }px`};
        height: ${(props: ICarouselMediaStyled) =>
          `${
            parseInt(
              props.mediaBHeight.substr(0, props.mediaBHeight.indexOf('px')),
              10,
            ) - 10
          }px`};
        -webkit-transition: background-color 0.2s;
        transition: background-color 0.2s;
        background-color: rgba(26, 26, 26, 0.5);
      }
    }
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
