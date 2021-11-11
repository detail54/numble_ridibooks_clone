import React from 'react'
// interface
import { IButtonWrap } from '../interface/interface'
// component
import Button from './Button'

const ButtonWrap: React.FC<IButtonWrap> = (props) => {
  const { texts, imgUrls, styles } = props

  const buttons = texts.map((text, index) => (
    <Button
      key={text}
      text={text}
      imgUrl={imgUrls && imgUrls[index]}
      styles={styles[index]}
    />
  ))

  return <>{buttons}</>
}

export default ButtonWrap
