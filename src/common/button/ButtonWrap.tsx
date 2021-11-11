import React from 'react'
// interface
import { IButtonWrap } from '../interface/interface'
// component
import Button from './Button'

const ButtonWrap: React.FC<IButtonWrap> = (props) => {
  const { datas } = props

  const buttons = datas.map((data) => (
    <Button
      key={`${data.text} button`}
      text={data.text}
      imgUrl={data.imgUrl && data.imgUrl}
      styles={data.styles}
    />
  ))

  return <>{buttons}</>
}

export default ButtonWrap
