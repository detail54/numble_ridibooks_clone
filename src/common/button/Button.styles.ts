import styled, { css } from 'styled-components'
// interface
import { IButtonStyles } from '../interface/interface'
// global style
import { setStyles, colors } from '../../GlobalStyle'

const Button = styled.button`
  ${(props: IButtonStyles) =>
    (props.buttonSize === '50px' &&
      css`
        font-size: 16px;
        padding: 0px 16px;
        margin-right: 8px;
        img {
          ${setStyles.setWidthAndHeight('18px', '18px')}
          margin-right: 6px;
        }
      `) ||
    (props.buttonSize === '40px' &&
      css`
        font-size: 14px;
        padding: 0px 12px;
        margin-right: 8px;
        img {
          ${setStyles.setWidthAndHeight('16px', '16px')}
          margin-right: 4px;
        }
      `) ||
    (props.buttonSize === '30px' &&
      css`
        font-size: 14px;
        padding: 0px 8px;
        margin-right: 6px;
        img {
          ${setStyles.setWidthAndHeight('14px', '14px')}
          margin-right: 4px;
        }
      `) ||
    (props.buttonSize === '25px' &&
      css`
        font-size: 13px;
        padding: 0px 6px;
        margin-right: 5px;
        img {
          ${setStyles.setWidthAndHeight('13px', '13px')}
          margin-right: 4px;
        }
      `) ||
    (props.buttonSize === '21px' &&
      css`
        font-size: 11px;
        padding: 0px 5px;
        margin-right: 5px;
        img {
          ${setStyles.setWidthAndHeight('11px', '11px')}
          margin-right: 4px;
        }
      `)}

  ${(props: IButtonStyles) =>
    (props.buttonColor === 'dodgerBlue' &&
      css`
        color: white;
        background: ${colors.dodgerblue_50};
        border: 1px solid dodger;
      `) ||
    (props.buttonColor === 'white' &&
      css`
        color: ${colors.gray_50};
        background: white;
        border: 1px solid ${colors.gray_10};
      `) ||
    (props.buttonColor === 'gray' &&
      css`
        color: white;
        background: ${colors.gray_10};
        border: 1px solid ${colors.gray_10};
      `) ||
    (props.buttonColor === 'outDodgerBlue' &&
      css`
        color: ${colors.dodgerblue_50};
        background: white;
        border: 1px solid ${colors.dodgerblue_50};
      `) ||
    (props.buttonColor === 'none' &&
      css`
        color: white;
        background: none;
        border: 1px solid white;
      `)}

  cursor: ${(props: IButtonStyles) => props.cursor || 'pointer'};

  border-radius: 3px;

  button:nth-last-child(1) {
    margin: 0px;
  }
`

const Img = styled.img``

export const ButtonSC = {
  Button,
  Img,
}
