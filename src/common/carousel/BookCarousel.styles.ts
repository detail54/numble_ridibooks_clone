import styled from 'styled-components'
// global style
import { setStyles } from '../../asset/css/GlobalStyle'
// interface
import { IMediaStyled } from '../interface/interface'
// image
import behind from '../../asset/images/icons/behind.png'
import next from '../../asset/images/icons/next.png'

const BookCarouselWrap = styled.div`
  max-width: 1000px;
  flex-direction: column;
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
    width: 1000px;
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
  transition: 0.2s;
  position: absolute;
  @media (min-width: ${(props: IMediaStyled) => props.mediaAMinWidth}) {
    transform: ${(props: IMediaStyled) =>
      `translateX(${props.mediaATransform})`};
  }

  @media (min-width: ${(props: IMediaStyled) => props.mediaBMinWidth}) {
    transform: ${(props: IMediaStyled) =>
      `translateX(${props.mediaBTransform})`};
  }
`

const BookItem = styled.li`
  @media (min-width: ${(props: IMediaStyled) => props.mediaAMinWidth}) {
    cursor: pointer;
    width: ${(props: IMediaStyled) => props.mediaAWidth};
    height: ${(props: IMediaStyled) =>
      `${
        parseInt(
          props.mediaAWidth.substr(0, props.mediaAWidth.indexOf('px')),
          10,
        ) * 2.04
      }px`};
    margin-right: 12px;

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
    width: ${(props: IMediaStyled) => props.mediaBWidth};
    height: ${(props: IMediaStyled) =>
      `${
        parseInt(
          props.mediaBWidth.substr(0, props.mediaBWidth.indexOf('px')),
          10,
        ) * 2.04
      }px`};
    margin-right: 22px;

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

export const BookCarouselSC = {
  BookCarouselWrap,
  Header,
  Books,
  BookList,
  BookItem,
  BehindButton,
  NextButton,
}
