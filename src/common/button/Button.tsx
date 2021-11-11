import React from 'react'
// interface
import { IButton } from '../interface/interface'
// style
import { ButtonSC } from './Button.styles'

const Button: React.FC<IButton> = (props) => {
  const { text, imgUrl, onClick, styles } = props

  const Img = imgUrl ? <ButtonSC.Img src={imgUrl} /> : <></>

  return (
    <ButtonSC.Button onClick={onClick} {...styles}>
      {Img}
      {text}
    </ButtonSC.Button>
  )
}

export default Button
