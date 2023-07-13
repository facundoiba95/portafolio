import React, { useContext, useState } from 'react'
import { ContentImageViewerStyles, ImageViewerContainerStyles } from './ImageViewerStyles'
import image from '../../../assets/mrincredible.jpg';
import { AiFillCloseCircle } from 'react-icons/ai';
import { GlobalContext } from '../../../Context/GlobalContext';

const ImageViewer = () => {
  const { isOpenViewer,setIsOpenViewer, imageView } = useContext(GlobalContext);

  return (
    <ImageViewerContainerStyles isOpenViewer={isOpenViewer}>
        <span className='closeViewerContainer' onClick={() => setIsOpenViewer(!isOpenViewer)}>
          <AiFillCloseCircle className='iconClose'/>
          <h2>Cerrar ventana</h2>
        </span>
        <ContentImageViewerStyles src={imageView}/>
    </ImageViewerContainerStyles>
    )
}

export default ImageViewer