import React from 'react'
import { CardProjectDetailsContainerStyles, TechStackContainerStyles, TitleProjectCardDetailStyle } from './CardProjectDetailsStyles'
import Typewriter from '../Typewritter/Typewritter'

const CardProjectDetails = () => {
const lines =[
  'NodeJS',
  'ReactJS',
  'MongoDB',
  'Express',
  'Styled-Components',
  'Vercel'
]

  return (
    <CardProjectDetailsContainerStyles>
      <TitleProjectCardDetailStyle>
        <p>Nombre del proyecto </p>
        <h2>Mau SportsTV</h2>
      </TitleProjectCardDetailStyle>
        <h3>Link del proyecto: </h3>
        <h3>Link del sitio web: </h3>
      <TechStackContainerStyles>
        <p>{`techStack = [`}</p>
        <Typewriter lines={lines}/>
      </TechStackContainerStyles>
    </CardProjectDetailsContainerStyles>
    )
}

export default CardProjectDetails