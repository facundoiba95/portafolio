import React from 'react'
import { CardCertificationContentLinesStyles, CardCertificationHomeContainerStyle, CardCertificationTitleStyle } from './CardCertificationHomeStyles'

const CardCertificationHome = ({title}) => {    
  return (
    <CardCertificationHomeContainerStyle>
        <CardCertificationTitleStyle>
            <p className='const'>const </p>
            <p className='titleCertification'>{title}</p>
            <p className='equal'>{' = '}</p>
            <p className='openKey'>{'{'}</p>
        </CardCertificationTitleStyle>
        <CardCertificationContentLinesStyles>
            <span className='keyValue'>
             <p className='keyObject'>año:</p>
             <p className='year'>{2020}</p>,
            </span>
            <span className='keyValue'>
             <p className='keyObject'>título:</p>
             <p className='valueObject'>"{'Desarrollador web Frontend'}"</p>,
            </span>
            <span className='keyValue'>
             <p className='keyObject'>institución:</p>
             <p className='valueObject'>"{'Institución Cervantes'}"</p>,
            </span>
            <span className='keyValue'>
             <p className='keyObject'>certificado:</p>
             <a href='https://app.eduflow.com/certificate/d3f3e156-a854-4268-8f0b-2cbe996f1f84' className='valueObject' target='_blank'>"{'Ver certificado'}"</a>,
            </span>
            <span className='keyValue'>
                <p className='closeKey'>{'}'}</p>
            </span>
        </CardCertificationContentLinesStyles>
        
    </CardCertificationHomeContainerStyle>
    )
}

export default CardCertificationHome