import styled from 'styled-components'
// global style
import { setStyles } from '../../asset/css/GlobalStyle'
// interface
import { IButtonStyle, IMediaStyled } from '../interface/interface'
// image
import behindWhite from '../../asset/images/icons/behind_white.png'
import nextWhite from '../../asset/images/icons/next_white.png'
import behind from '../../asset/images/icons/behind.png'
import next from '../../asset/images/icons/next.png'

const BookCarouselWrap = styled.div`
  flex-direction: column;
  position: relative;
  @media (min-width: ${(props: IMediaStyled) => props.mediaAMinWidth}) {
    width: 100%;
  }

  @media (min-width: ${(props: IMediaStyled) => props.mediaBMinWidth}) {
    max-width: 1000px;
  }
`

const Header = styled.h1`
  padding: 6px 25px 0px;
  font-size: 19px;
  font-weight: normal;
  color: white;
  max-width: 1000px;
  margin: 0 auto 16px;
`

const BooksWrap = styled.div`
  ${setStyles.setAlignX('center')}
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
    width: 970px;
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
  transition: 0.4s;
  position: absolute;
  left: 3px;
  top: 0;
  @media (min-width: ${(props: IMediaStyled) => props.mediaAMinWidth}) {
    transform: ${(props: IMediaStyled) =>
      `translateX(${props.mediaATransform})`};
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
  width: 100%;
  height: 100%;
  top: -10px;
`

const Left = styled.div`
  flex: 1;
`

const Right = styled.div`
  flex: 1;
`

const BehindButton = styled.button`
  background-image: ${(props: IButtonStyle) =>
    props.buttonColor === 'white' ? `url(${behindWhite})` : `url(${behind})`};
  background-size: 9px 15px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #384252;
  border-radius: 30px;
  border: none;
  width: 40px;
  height: 40px;
  z-index: 2;
  position: absolute;
  left: 0;
  top: 50%;
  cursor: pointer;
  opacity: 0.95;
  box-shadow: 0 0.8px 3px rgb(0 0 0 / 33%);

  @media (min-width: ${(props: IButtonStyle) =>
      props.mediaStyled.mediaAMinWidth}) {
    transform: translate(20%, -40%);
    display: ${(props: IButtonStyle) => props.hide && 'none'};
  }

  @media (min-width: ${(props: IButtonStyle) =>
      props.mediaStyled.mediaBMinWidth}) {
    transform: translate(-80%, -50%);
    display: inherit;
  }

  &:hover {
    opacity: 0.7;
  }
`

const NextButton = styled.button`
  background-image: ${(props: IButtonStyle) =>
    props.buttonColor === 'white' ? `url(${nextWhite})` : `url(${next})`};
  background-size: 9px 15px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #384252;
  border-radius: 30px;
  border: none;
  width: 40px;
  height: 40px;
  z-index: 2;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  opacity: 0.95;
  box-shadow: 0 0.8px 3px rgb(0 0 0 / 33%);

  @media (min-width: ${(props: IButtonStyle) =>
      props.mediaStyled.mediaAMinWidth}) {
    transform: translate(-20%, -40%);
    display: ${(props: IButtonStyle) => props.hide && 'none'};
  }

  @media (min-width: ${(props: IButtonStyle) =>
      props.mediaStyled.mediaBMinWidth}) {
    transform: translate(80%, -50%);
    display: inherit;
  }

  &:hover {
    opacity: 0.7;
  }
`

export const BookCarouselSC = {
  BookCarouselWrap,
  Header,
  BooksWrap,
  Books,
  BookList,
  BookItem,
  ControlContainer,
  Left,
  Right,
  BehindButton,
  NextButton,
}
