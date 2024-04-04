import React from 'react';
import { MdNoEncryptionGmailerrorred } from 'react-icons/md';
import { ErrorCardContainerStyle } from './ErrorCardStyles';

const ErrorCard = () => {
  return (
    <ErrorCardContainerStyle>
        <MdNoEncryptionGmailerrorred className='iconError'/>
        <h1>No tienes permisos de administrador.</h1>
    </ErrorCardContainerStyle>
  )
}

export default ErrorCard