import React from 'react';
import imagen from '../../assets/facunew5remove.png';
import { AboutMeContainerStyles } from './AboutMeStyles';


const AboutMe = () => {
  return (
    <AboutMeContainerStyles>
        <h2>Sobre mi</h2>
        <p>Hola! Soy <strong>Facundo Ibañez Gambarte</strong>, un apasionado desarrollador web Frontend y estudiante de desarrollo web Fullstack de Córdoba, Argentina.</p>

        <p>Con conocimientos sólidos en el diseño y la interfaz del Frontend, así como en el manejo del servidor Backend y bases de datos no relacionales como MongoDB, he trabajado en diversos proyectos personales y académicos para mejorar constantemente mis habilidades.</p>

        <p>Dedicado a mi formación profesional, siempre busco aprender y crecer tanto de forma autodidacta como a través de clases virtuales en NUCBA.</p>

        <p>Fuera del ámbito de la programación, formo parte de una banda musical y disfruto de hobbies como tocar el piano, jugar al fútbol y cocinar.</p>

        <p>Valoro el trabajo en equipo y la colaboración, y me encantaría formar parte de un equipo excepcional para contribuir al logro de metas e ideas.</p>

        <p>¡Agradezco que visites mi portafolio! Si tienes alguna pregunta o comentario sobre mi trabajo, estoy disponible para responderlo. Solo dirígete hacia la sección <a href="/contact">contacto</a>.</p>

        <p>Espero tener la oportunidad de conectarnos y compartir mi pasión por la tecnología y el desarrollo.</p>

        <p>¡Saludos! Facundo</p>
    </AboutMeContainerStyles>
  )
}

export default AboutMe