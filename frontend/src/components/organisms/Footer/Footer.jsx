import React from 'react'
import { FooterContainerStyles } from './FooterStyles'
import imgProfileFooter from '../../../assets/facunew5.png';
import { useNavigate } from 'react-router-dom';
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    const navigator = useNavigate();

    const goContact = () => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
        navigator('/contact');
    }

    const goHowCreatePortafolio = () => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
        navigator('/howcreateportafolio');
    }
  return (
    <FooterContainerStyles>
        <span className='imgContainer'>
            <img src={imgProfileFooter} alt="img profile footer" />
        </span>
        <span className='infoProfileContainer'>
            <h2>Facundo Ibañez Gambarte</h2>
            <h3>Fullstack Web Dev Trainee.</h3>
            <p>Estudiante de Desarrollo de Software.</p>
            <span className='iconsContainer'>
                <a href="https://www.instagram.com/facundoiba_/" target='_blank'><BsInstagram className='icon'/></a>
                <a href="https://github.com/facundoiba95" target='_blank'><BsGithub className='icon'/></a>
                <a href="https://www.linkedin.com/in/facundoiba/" target='_blank'><BsLinkedin className='icon'/></a>
            </span>
        </span>
        <span className='contactMe'>
            <small onClick={goHowCreatePortafolio}>Cómo se construyo este portafolio ?</small>
            <span>
              <p>Si quieres trabajar conmigo o contactarme por cualquier motivo:</p>
              <b onClick={goContact}>haz click aquí</b>!
            </span>
        </span>
    </FooterContainerStyles>
    )
}

export default Footer
