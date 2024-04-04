import React from 'react'
import { CardCertificationContentLinesStyles, CardCertificationHomeContainerStyle, CardCertificationTitleStyle } from './CardCertificationHomeStyles'

const CardCertificationHome = ({
    title,
    year,
    urlcertificate,
    institute
}) => {    
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
             <p className='year'>{year}</p>,
            </span>
            <span className='keyValue'>
             <p className='keyObject'>título:</p>
             <p className='valueObject'>"{title}"</p>,
            </span>
            <span className='keyValue'>
             <p className='keyObject'>institución:</p>
             <p className='valueObject'>"{institute}"</p>,
            </span>
            <span className='keyValue'>
             <p className='keyObject'>certificado:</p>
             <a href={urlcertificate} className='valueObject' target='_blank'>"{'Ver certificado'}"</a>,
            </span>
            <span className='keyValue'>
                <p className='closeKey'>{'}'}</p>
            </span>
        </CardCertificationContentLinesStyles>
        
    </CardCertificationHomeContainerStyle>
    )
}

export default CardCertificationHome