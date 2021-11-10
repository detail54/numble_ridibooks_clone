import React from 'react'
// interface
import { IInput } from '../interface/interface'
// style
import { InputSC } from './Input.styles'

const Input: React.FC<IInput> = (props) => {
  const { placeholder, onChange, styles } = props

  return (
    <InputSC.Input
      placeholder={placeholder}
      onChange={(event) => onChange(event.currentTarget.value)}
      {...styles}
    />
  )
}

export default Input
