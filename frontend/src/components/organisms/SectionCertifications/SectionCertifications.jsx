import React from 'react'
import { SectionProjectsHomeContainerStyles } from '../SectionProjectsHome/SectionProjectsHomeStyles'
import TitleSections from '../../atoms/TitleSections/TitleSections'
import { SectionCertificacionsContainerStyles } from './SectionCertificationsStyles'
import CardCertificationHome from '../../molecules/CardCertificationHome/CardCertificationHome'
import { useSelector } from 'react-redux'

const SectionCertifications = () => {
  const allCertificates = useSelector( state => state.certificationSlice.allCertifications );

  const renderCardCertificate = () => {
    return allCertificates.map( cert => {
      const { title,year,urlcertificate,institute } = cert;
      return (
        <CardCertificationHome 
        title={title}
        urlcertificate={urlcertificate}
        institute={institute}
        year={year}
        />
      )
    } )
  }
  return (
    <SectionProjectsHomeContainerStyles>
        <TitleSections title={'Certificaciónes'}/>
        <SectionCertificacionsContainerStyles>
          { renderCardCertificate() }
        </SectionCertificacionsContainerStyles>
    </SectionProjectsHomeContainerStyles>
      )
}

export default SectionCertifications