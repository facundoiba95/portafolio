import React, { useContext } from 'react'
import { SectionProjectsHomeContainerStyles } from '../../components/organisms/SectionProjectsHome/SectionProjectsHomeStyles'
import TitleSections from '../../components/atoms/TitleSections/TitleSections'

const Projects =  ({children}) => {
  return (
      <SectionProjectsHomeContainerStyles>
          <TitleSections title={'Proyectos'}/>
          {children}
       </SectionProjectsHomeContainerStyles>
    )
}

export default Projects