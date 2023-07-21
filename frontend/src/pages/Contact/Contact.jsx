import React, { useEffect, useState } from 'react'
import { ContactContainerStyles, FormContactContainerStyles } from './ContactStyles'
import TitleSections from '../../components/atoms/TitleSections/TitleSections'
import { useDispatch, useSelector } from 'react-redux';
import { restartStatusMessage, sendMessage } from '../../redux/features/message/messageSlice';
import Loader from '../../components/molecules/Loader/Loader';
import CardEmailSentSuccesfully from '../../components/molecules/CardEmailSentSuccesfully/CardEmailSentSuccesfully';


const Contact = () => {
  const [ inputName, setInputName ] = useState('');
  const [ inputNumber, setInputNumber ] = useState('');
  const [ inputEmail, setInputEmail ] = useState('');
  const [ inputContent, setInputContent ] = useState(''); 
  const isLoading = useSelector( state => state.messageSlice.isLoading );
  const status = useSelector( state => state.messageSlice.status );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restartStatusMessage());
  },[])

  const handleSendMessage = () => {
    const newMessage = {
        name: inputName,
        cellphone: inputNumber,
        email: inputEmail,
        content: inputContent
    }

    dispatch(sendMessage(newMessage));
  }
   
  return (
      <ContactContainerStyles>
        <TitleSections title={'Contacto'}/>
        {
            isLoading
            ? <Loader/>
            : status == 200
            ? <CardEmailSentSuccesfully conditionMessage={true}/>
            : status == 500
            ? <CardEmailSentSuccesfully conditionMessage={false}/>
            :<FormContactContainerStyles>
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
            <button onClick={handleSendMessage}>Enviar mensaje</button>
        </FormContactContainerStyles>
        }
        </ContactContainerStyles>
    
    )
}

export default Contact