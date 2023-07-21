import React from 'react'
import { CardEmailSentSuccesfullyContainerStyles, CardEmailSuccesfullyStyles } from './CardEmailSentSuccessfullStyles'
import { SiMinutemailer } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import { BsFillSendXFill } from 'react-icons/bs';

const CardEmailSentSuccesfully = ({ conditionMessage }) => {
  const navigator = useNavigate();
  return (
    < CardEmailSentSuccesfullyContainerStyles>
       <CardEmailSuccesfullyStyles>
        {
          conditionMessage == true
          ? 
          <>
            <SiMinutemailer className='iconMessageOk'/>
            <h2>El mensaje se envió correctamente!</h2>
            <p>Muchas gracias por contactarme! En la brevedad responderé tu mensaje.</p>
            <p>Puedes visitar mis proyectos, o saber más sobre mi en estas secciónes: </p>
            <span>
              <h4 onClick={() => navigator("/projects/allProjects")}>Proyectos</h4>
              <h4 onClick={() => navigator("/aboutme")}>Sobre mí</h4>
            </span>
          </>
          : <>
          <BsFillSendXFill className='iconMessageFailed'/>
            <h2>Ocurrió un error al enviar el mensaje!</h2>
            <p> Lamento lo ocurrido :/ . En la brevedad solucionaré el problema.</p>
            <p> Mientras tanto puedes visitar mis proyectos o saber más sobre mi en estas secciónes: </p>
            <span>
              <h4 onClick={() => navigator("/projects/allProjects")}>Proyectos</h4>
              <h4 onClick={() => navigator("/aboutme")}>Sobre mí</h4>
            </span>
            </>
        }
       </CardEmailSuccesfullyStyles>
    </CardEmailSentSuccesfullyContainerStyles>
  )
}

export default CardEmailSentSuccesfully