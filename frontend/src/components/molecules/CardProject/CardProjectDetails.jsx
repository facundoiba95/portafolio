import React, { useContext } from 'react'
import { CardProjectDetailsContainerStyles, TechStackContainerStyles, TitleProjectCardDetailStyle } from './CardProjectDetailsStyles'
import Typewriter from '../Typewritter/Typewritter'
import img1 from '../../../assets/imgProject1.png';
import img2 from '../../../assets/imgProject2.png';
import img3 from '../../../assets/imgProject3.png';
import img4 from '../../../assets/imgProject4.png';
import { GlobalContext } from '../../../Context/GlobalContext';


const CardProjectDetails = () => {
  const { isOpenViewer, setIsOpenViewer, isScroll, setIsScroll } = useContext(GlobalContext);

  const lines =[
    'NodeJS',
    'ReactJS',
    'MongoDB',
    'Express',
    'Styled-Components',
    'Vercel'
  ]

  const openImageViewer = () => {
    window.scrollTo(0,0);
    setIsOpenViewer(!isOpenViewer)
    setIsScroll(!isScroll)
  }

  return (
    <CardProjectDetailsContainerStyles>
      <span className='sectionOneCardDetail'>
      <TitleProjectCardDetailStyle>
      <p>Nombre del proyecto </p>
      <h3>Integrador React JS</h3>
      </TitleProjectCardDetailStyle>
      <span className='itemProject'>
          <h3>Link del proyecto</h3>
          <a href="https://github.com/facundoiba95/integradorReact" target='_blank'>Link de proyecto</a>
      </span>
      <span className='itemProject'>
          <h3>Link del sitio web</h3>
          <a href="https://integrador-react-sooty.vercel.app/" target='_blank'>Sitio web</a>
      </span>
      <span className='descriptionProject'>
          <h3>Descripción del proyecto: </h3>
          <p>Lorem ipsum dolor sit amet consectetur sit amet consectetursit amet Lorem ipsum dolor sit amet consectetur sit amet consectetursit amet Lorem ipsum dolor sit amet consectetur sit amet consectetursit amet consectetur  sit amet consectetur sit amet consectetur sit amet consectetur, adipisicing elit. Voluptatem, aliquam nulla? Ab voluptas reiciendis laborum blanditiis repudiandae assumenda sint debitis. Rem, aliquid. Dignissimos quis hic quidem veritatis pariatur, quos ratione.</p>
      </span>
      <TechStackContainerStyles>
        <p>{`techStack = [`}</p>
        <Typewriter lines={lines}/>
      </TechStackContainerStyles>
      </span>

      <span className='sectionTwoCardDetail'>
        <h2>Vista previa:</h2>
        <span className='containerImgProject'>
          <img src={img1} alt="" onClick={openImageViewer}/>
          <img src={img2} alt="" onClick={openImageViewer}/>
          <img src={img3} alt="" onClick={openImageViewer}/>
          <img src={img4} alt="" onClick={openImageViewer}/>
        </span>
      </span>
    </CardProjectDetailsContainerStyles>
    )
}

export default CardProjectDetails