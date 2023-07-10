import React, { useState } from 'react'
import { ContactContainerStyles, FormContactContainerStyles } from './ContactStyles'
import TitleSections from '../../components/atoms/TitleSections/TitleSections'

const Contact = () => {
  const [ inputName, setInputName ] = useState('');
  const [ inputNumber, setInputNumber ] = useState('');
  const [ inputEmail, setInputEmail ] = useState('');
  const [ inputContent, setInputContent ] = useState(''); 

  const handleSendMessage = (e) => {
    e.preventDefault();

  }

  return (
    <ContactContainerStyles>
        <TitleSections title={'Contacto'}/>
        <FormContactContainerStyles onSubmit={handleSendMessage}>
            <span>
                <label htmlFor="inputName">Nombre</label>
                <input type="text" required name='name' id='inputName' value={inputName} placeholder='Nombre' onChange={(e) => setInputName(e.target.value)}/>
            </span>
            <span>
                <label htmlFor="inputNumber">Telefono</label>
                <input type="number" required name='phoneNumber' id='inputNumber' value={inputNumber} onChange={(e) => setInputNumber(e.target.value)}/>
            </span>
            <span>
                <label htmlFor="inputEmail">Email</label>
                <input type="email" required name='email' id='inputEmail' value={inputEmail} placeholder='Email' onChange={(e) => setInputEmail(e.target.value)}/>
            </span>
            <span>
                <label htmlFor="inputContent">Mensaje</label>
                <textarea name="content" required id="inputContent" cols="30" rows="10" placeholder='Escribe aqui tu mensaje, consulta o lo que quisieras saber sobre mi.' value={inputContent} onChange={(e) => setInputContent(e.target.value)}></textarea>
            </span>
            <button>Enviar mensaje</button>
        </FormContactContainerStyles>
    </ContactContainerStyles>
    )
}

export default Contact