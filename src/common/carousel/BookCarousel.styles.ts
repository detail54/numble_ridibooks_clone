import styled from 'styled-components'
// global style
import { setStyles } from '../../asset/css/GlobalStyle'
// interface
import { IMediaStyled } from '../interface/interface'
// image
import behindWhite from '../../asset/images/icons/behind_white.png'
import nextWhite from '../../asset/images/icons/next_white.png'

const BookCarouselWrap = styled.div`
  max-width: 1000px;
  flex-direction: column;
  position: relative;
`

const Header = styled.h1`
  padding: 6px 25px 0px;
  font-size: 19px;
  font-weight: normal;
  color: white;
  max-width: 1000px;
  margin: 0 auto 16px;
`

const Books = styled.div`
  ${setStyles.setAlignX('center')}
  ${setStyles.setAlignY('center')}
  position: relative;

  @media (min-width: ${(props: IMediaStyled) => props.mediaAMinWidth}) {
    width: 100%;
    height: ${(props: IMediaStyled) =>
      `${
        parseInt(
          props.mediaAWidth.substr(0, props.mediaAWidth.indexOf('px')),
          10,
        ) * 2.04
      }px`};
  }

  @media (min-width: ${(props: IMediaStyled) => props.mediaBMinWidth}) {
    overflow: hidden;
    width: 990px;
    height: ${(props: IMediaStyled) =>
      `${
        parseInt(
          props.mediaBWidth.substr(0, props.mediaBWidth.indexOf('px')),
          10,
        ) * 2.04
      }px`};
  }
`

const BookList = styled.ul`
  ${setStyles.setAlignX('center')}
  ${setStyles.setAlignY('center')}
  margin: 0;
  padding: 0;
  transition: 0.2s;
  position: absolute;
  @media (min-width: ${(props: IMediaStyled) => props.mediaAMinWidth}) {
    transform: ${(props: IMediaStyled) =>
      `translateX(${props.mediaBTransform})`};
  }

  @media (min-width: ${(props: IMediaStyled) => props.mediaBMinWidth}) {
    transform: ${(props: IMediaStyled) =>
      `translateX(${props.mediaBTransform})`};
  }

  li:nth-child(1) {
    margin: 0;
  }
`

const BookItem = styled.li`
  @media (min-width: ${(props: IMediaStyled) => props.mediaAMinWidth}) {
    cursor: pointer;
    margin-left: 12px;
    width: ${(props: IMediaStyled) => props.mediaAWidth};
    height: ${(props: IMediaStyled) =>
      `${
        parseInt(
          props.mediaAWidth.substr(0, props.mediaAWidth.indexOf('px')),
          10,
        ) * 2.04
      }px`};

    img {
      height: ${(props: IMediaStyled) =>
        `${
          parseInt(
            props.mediaAWidth.substr(0, props.mediaAWidth.indexOf('px')),
            10,
          ) * 1.558
        }px`};
    }
  }

  @media (min-width: ${(props: IMediaStyled) => props.mediaBMinWidth}) {
    cursor: pointer;
    margin-left: 22px;
    width: ${(props: IMediaStyled) => props.mediaBWidth};
    height: ${(props: IMediaStyled) =>
      `${
        parseInt(
          props.mediaBWidth.substr(0, props.mediaBWidth.indexOf('px')),
          10,
        ) * 2.04
      }px`};

    img {
      height: ${(props: IMediaStyled) =>
        `${
          parseInt(
            props.mediaBWidth.substr(0, props.mediaBWidth.indexOf('px')),
            10,
          ) * 1.558
        }px`};
    }
  }
  list-style: none;
`

const ControlContainer = styled.div`
  position: absolute;
  ${setStyles.setAlignX('center')}
  width: 1100px;
  height: 100%;
  top: -10px;
  left: -55px;
`

const Center = styled.div`
  position: relative;
  max-width: 1000px;
  width: 1000px;
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
  background-image: url(${behindWhite});
  background-size: 9px 15px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #384252;
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
  opacity: 0.95;
  box-shadow: 0 0.8px 3px rgb(0 0 0 / 33%);

  &:hover {
    opacity: 0.7;
  }
`

const NextButton = styled.button`
  background-image: url(${nextWhite});
  background-size: 9px 15px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #384252;
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
  opacity: 0.95;
  box-shadow: 0 0.8px 3px rgb(0 0 0 / 33%);

  &:hover {
    opacity: 0.7;
  }
`

export const BookCarouselSC = {
  BookCarouselWrap,
  Header,
  Books,
  BookList,
  BookItem,
  ControlContainer,
  Center,
  Left,
  Right,
  BehindButton,
  NextButton,
}
