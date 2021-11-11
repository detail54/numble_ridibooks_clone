import React from 'react'
// interface
import { IButtonWrap } from '../interface/interface'
// component
import Button from './Button'
// style
import { ButtonWrapSC } from './ButtonWrap.styles'

const ButtonWrap: React.FC<IButtonWrap> = (props) => {
  const { datas, wrapStyle } = props

  const buttons = (
    <ButtonWrapSC.Ul {...wrapStyle}>
      {datas.map((data) => (
        <ButtonWrapSC.Li key={`${data.text} button`} {...wrapStyle}>
          <Button
            text={data.text}
            imgUrl={data.imgUrl && data.imgUrl}
            styles={data.styles}
          />
        </ButtonWrapSC.Li>
      ))}
    </ButtonWrapSC.Ul>
  )

  return <>{buttons}</>
}

export default ButtonWrap
