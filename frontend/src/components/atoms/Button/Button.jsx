import React from 'react'
import { ButtonContainerStyles } from './ButtonStyles'

const Button = ({title, handleFunction}) => {
  return (
    <ButtonContainerStyles onClick={(e) => handleFunction(e)}>{title}</ButtonContainerStyles>
    )
}

export default Button