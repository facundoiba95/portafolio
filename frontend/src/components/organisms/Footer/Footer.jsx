import React from 'react'
import { FooterContainerStyles } from './FooterStyles'
import imgProfileFooter from '../../../assets/facunew5.png';

import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <FooterContainerStyles>
        <span className='imgContainer'>
            <img src={imgProfileFooter} alt="img profile footer" />
        </span>
        <span className='infoProfileContainer'>
            <h2>Facundo Ibañez Gambarte</h2>
            <h3>Desarrollador Web Frontend</h3>
            <p>Estudiante de Desarrollo Web Fullstack</p>
            <span className='iconsContainer'>
                <BsInstagram className='icon'/>
                <BsGithub className='icon'/>
                <BsLinkedin className='icon'/>
            </span>
        </span>
        <span className='contactMe'>
            <p>Si quieres trabajar conmigo o contactarme por cualquier motivo, <a href="/contact">haz click aquí</a>!</p>
        </span>
    </FooterContainerStyles>
    )
}

export default Footer