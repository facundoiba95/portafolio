import React from 'react'
import { LoaderCardStyle, LoaderContainerStyles } from './LoaderStyles'
import { ClipLoader } from 'react-spinners';

const Loader = () => {
  return (
    <LoaderContainerStyles>
        <LoaderCardStyle>
            <h2>Aguarde un momento</h2>
            <ClipLoader color='yellow'/>
        </LoaderCardStyle>
    </LoaderContainerStyles>
  )
}

export default Loader