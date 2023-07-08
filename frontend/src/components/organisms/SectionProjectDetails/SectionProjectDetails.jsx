import React from 'react'
import { SectionProjectDetailsContainerStyles } from './SectionProjectDetailsStyles'
import CardProjectDetails from '../../molecules/CardProject/CardProjectDetails'
import { TitleProjectCardDetailStyle } from '../../molecules/CardProject/CardProjectDetailsStyles'
import Typewriter from '../../molecules/Typewritter/Typewritter'
import OtherProjects from '../OtherProjects/OtherProjects'

const SectionProjectDetails = () => {

    const project = {
        name: 'Mau SportsTV',
        stack: ['React JS', 'Node JS', 'MongoDB', 'Express', 'Framer Motion','Redux Toolkit'],
        description: 'Esta es la descripcion del proyecto Mau SportsTV. Esta es la descripcion del proyecto Mau SportsTVEsta es la descripcion del proyecto Mau SportsTVEsta es la descripcion del proyecto Mau SportsTVEsta es la descripcion del proyecto Mau SportsTVEsta es la descripcion del proyecto Mau SportsTV'
    }

    const lines = [
        `Título: ${project.name}`,
        `Tech-Stack: ${project.stack.join(', ')}`,
        `Descripción: ${project.description}`
    ]


  return (
    <>
    <SectionProjectDetailsContainerStyles>
        <CardProjectDetails/>
    </SectionProjectDetailsContainerStyles>
    <OtherProjects/>
    </>
    )
}

export default SectionProjectDetails