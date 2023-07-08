import React from 'react'
import { OtherProjectListStyles, OtherProjectsContainerStyles, TitleOtherProjectsStyles } from './OtherProject'
import CardOtherProjects from '../../molecules/CardOtherProjects/CardOtherProjects'

const OtherProjects = () => {
  return (
    <OtherProjectsContainerStyles>
        <TitleOtherProjectsStyles>Otros proyectos</TitleOtherProjectsStyles>
        <OtherProjectListStyles>
            <CardOtherProjects title={'Mau SportsTV'}/>
            <CardOtherProjects title={'Vestigio App'}/>
            <CardOtherProjects title={'Tricampeón'}/>
            <CardOtherProjects title={'Todo App'}/>
            <CardOtherProjects title={'Landing Page'}/>
            <CardOtherProjects title={'Other'}/>
        </OtherProjectListStyles>
    </OtherProjectsContainerStyles>
    )
}

export default OtherProjects