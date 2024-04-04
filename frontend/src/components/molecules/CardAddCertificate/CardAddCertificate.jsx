import React, { useState } from 'react'
import { CardAddProjectContainerStyles, InfoAddProjectContainerStyles } from '../CardAddProject/CardAddProjectStyles'
import { CardAddCertificateContainerStyle } from './CardAddCertificateStyles';
import { useDispatch, useSelector } from 'react-redux';
import { createCertificate } from '../../../redux/features/certifications/certificationSlice';

const CardAddCertificate = () => {
    const dispatch = useDispatch();
    const [ inputTitle, setInputTitle ] = useState('');
    const [ inputYear, setInputYear ] = useState('');
    const [ inputUrlCertificate, setInputUrlCertificate ] = useState('');
    const [ inputInstitute, setInputInstitute ] = useState(''); 

    const sendCertificate = () => {
        const newCertificate = {
            year: inputYear,
            title: inputTitle,
            urlcertificate: inputUrlCertificate,
            institute: inputInstitute
        }

        dispatch(createCertificate(newCertificate));
    }


  return (
    <CardAddCertificateContainerStyle>
       <h2 className='titleCard'>Agregar nuevo certificado</h2>
       <InfoAddProjectContainerStyles>
            <span>
              <label htmlFor="inputTitle">Título del certificado:</label>
              <input type="text" value={inputTitle} name='titleCertificate' id='inputTitle' placeholder='Titulo del certificado' onChange={(e) => setInputTitle(e.target.value)}/>
            </span>
            <span>
                <label htmlFor="inputUrlCertificate">Link del certificado:</label>
                <input type="text" value={inputUrlCertificate} name='inputUrlCertificate' id='inputUrlCertificate' placeholder='Link del certificado' onChange={(e) => setInputUrlCertificate(e.target.value)}/>
            </span>
            <span>
                <label htmlFor="inputYear">Año: </label>
                <input type="number" value={inputYear} name='' id='inputYear' placeholder='Año' onChange={(e) => setInputYear(e.target.value)}/>
            </span>
            <span>
                <label htmlFor="inputInstitute">Institución: </label>
                <input type="text" value={inputInstitute} name='institute' id='inputInstitute' placeholder='Institución' onChange={(e) => setInputInstitute(e.target.value)}/>
            </span>
            <button onClick={sendCertificate}>Enviar formulario</button>

       </InfoAddProjectContainerStyles>
    </CardAddCertificateContainerStyle>
    )
}

export default CardAddCertificate