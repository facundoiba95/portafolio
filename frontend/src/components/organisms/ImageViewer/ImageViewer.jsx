import React, { useContext, useEffect, useState } from 'react'
import { ContentImageViewerStyles, ImageViewerContainerStyles } from './ImageViewerStyles'
import image from '../../../assets/mrincredible.jpg';
import { AiFillCloseCircle } from 'react-icons/ai';
import { GlobalContext } from '../../../Context/GlobalContext';
import TransitionContainer from '../../molecules/TransitionContainer/TransitionContainer';

const ImageViewer = () => {
  const { isOpenViewer, setIsOpenViewer, imageView } = useContext(GlobalContext);

  useEffect(() => {
    if(isOpenViewer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
      
  }, [isOpenViewer]);

  return (
    <TransitionContainer>
      <ImageViewerContainerStyles isOpenViewer={isOpenViewer}>
        <span className='closeViewerContainer' onClick={() => setIsOpenViewer(!isOpenViewer)}>
          <AiFillCloseCircle className='iconClose' />
        </span>
        <ContentImageViewerStyles src={imageView} />
      </ImageViewerContainerStyles>
    </TransitionContainer>
  )
}

export default ImageViewer