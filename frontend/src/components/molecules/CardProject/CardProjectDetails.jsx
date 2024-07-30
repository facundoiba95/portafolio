import React, { useContext } from 'react'
import { CardProjectDetailsContainerStyles, TechStackContainerStyles, TitleProjectCardDetailStyle } from './CardProjectDetailsStyles'
import Typewriter from '../Typewritter/Typewritter'
import { GlobalContext } from '../../../Context/GlobalContext';
import { useSelector } from 'react-redux';

const CardProjectDetails = ({
  name,
  _id,
  linkwebsite,
  linkproject,
  img1,
  img2,
  img3,
  img4,
  techStack,
  content
}) => {
  const { isOpenViewer, setIsOpenViewer, isScroll, setIsScroll, setImageView } = useContext(GlobalContext);

  const openImageViewer = (e) => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
    const imageSelected = e.target.dataset.image;
    setImageView(imageSelected)
    setIsOpenViewer(!isOpenViewer)
    setIsScroll(!isScroll)
  }

  const renderDescription = () => {
    const description = content;
    const replacedDescription = description.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));

    return <p>{replacedDescription}</p>;
  };
  return (
    <CardProjectDetailsContainerStyles>
      <span className='sectionOneCardDetail'>
        <TitleProjectCardDetailStyle>
          <p>Nombre del proyecto </p>
          <h3>{name}</h3>
        </TitleProjectCardDetailStyle>
        <span className='itemProject'>
          <h3>Link del proyecto</h3>
          <a href={linkproject} target='_blank'>Link de proyecto</a>
        </span>
        <span className='itemProject'>
          <h3>Link del sitio web</h3>
          <a href={linkwebsite} target='_blank'>Sitio web</a>
        </span>
        <span className='descriptionProject'>
          <h3>Descripción del proyecto: </h3>
          <div>{renderDescription()}</div>
        </span>
        <TechStackContainerStyles>
          <p>{`techStack = [`}</p>
          <Typewriter lines={techStack} />
        </TechStackContainerStyles>
      </span>

      <span className='sectionTwoCardDetail'>
        <h2>Vista previa:</h2>
        <span className='containerImgProject'>
          <img src={img1} data-image={img1} alt="" onClick={(e) => openImageViewer(e)} />
          <img src={img2} data-image={img2} alt="" onClick={(e) => openImageViewer(e)} />
          <img src={img3} data-image={img3} alt="" onClick={(e) => openImageViewer(e)} />
          <img src={img4} data-image={img4} alt="" onClick={(e) => openImageViewer(e)} />
        </span>
      </span>
    </CardProjectDetailsContainerStyles>
  )
}

export default CardProjectDetails