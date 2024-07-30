import React from 'react'
import { SectionTopContainerStyles, SectionTopContentOneStyles, SectionTopContentTwoStyles } from './SectionTopStyles'
import image1 from '../../../assets/facunew5.png';
const SectionTop = () => {
  return (
    <SectionTopContainerStyles>
        <SectionTopContentOneStyles>
            <span className='saludo'>
              <h1> Hola!</h1>
              <h1> Mi nombre <br/>es <b>Facundo</b>.</h1>
            </span>
            <span className='profession'>
                <h3>Fullstack Web Dev Trainee.</h3>
                <h4>Estudiante de Desarrollo de Software.</h4>
            </span>
        </SectionTopContentOneStyles>
        <SectionTopContentTwoStyles>
            <img src={image1} alt="" />
        </SectionTopContentTwoStyles>
    </SectionTopContainerStyles>
    )
}

export default SectionTop
