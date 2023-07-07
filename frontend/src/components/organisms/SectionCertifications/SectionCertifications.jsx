import React from 'react'
import { SectionProjectsHomeContainerStyles } from '../SectionProjectsHome/SectionProjectsHomeStyles'
import TitleSections from '../../atoms/TitleSections/TitleSections'
import { SectionCertificacionsContainerStyles } from './SectionCertificationsStyles'
import CardCertificationHome from '../../molecules/CardCertificationHome/CardCertificationHome'

const SectionCertifications = () => {
  return (
    <SectionProjectsHomeContainerStyles>
        <TitleSections title={'Certificaciones'}/>
        <SectionCertificacionsContainerStyles>
          <CardCertificationHome title={'DesarrolladorWebFrontend'}/>
          <CardCertificationHome title={'DesarrolladorWebFrontend'}/>
          <CardCertificationHome title={'DesarrolladorWebFrontend'}/>
          <CardCertificationHome title={'DesarrolladorWebFrontend'}/>
        </SectionCertificacionsContainerStyles>
    </SectionProjectsHomeContainerStyles>
      )
}

export default SectionCertifications