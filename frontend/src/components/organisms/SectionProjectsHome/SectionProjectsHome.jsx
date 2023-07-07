import React from 'react'
import { SectionProjectsHomeContainerStyles, WrapperCardProjectsStyles } from './SectionProjectsHomeStyles'
import TitleSections from '../../atoms/TitleSections/TitleSections'
import CardProjectHome from '../../molecules/CardProjectHome/CardProjectHome'

const SectionProjectsHome = () => {
  return (
    <SectionProjectsHomeContainerStyles>
        <TitleSections title={'Proyectos'}/>
        <WrapperCardProjectsStyles>
          <CardProjectHome titleProject={'Mau SportsTV'}/>
          <CardProjectHome titleProject={'Tricampeon'}/>
          <CardProjectHome titleProject={'Vestigio App'}/>
          <CardProjectHome titleProject={'TodoApp'}/>
          <CardProjectHome titleProject={'Landing page'}/>
        </WrapperCardProjectsStyles>
    </SectionProjectsHomeContainerStyles>
    )
}

export default SectionProjectsHome