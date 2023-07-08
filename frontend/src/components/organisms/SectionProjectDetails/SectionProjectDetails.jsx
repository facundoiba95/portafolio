import React, { useContext, useState } from 'react'
import { SectionProjectDetailsContainerStyles } from './SectionProjectDetailsStyles'
import CardProjectDetails from '../../molecules/CardProject/CardProjectDetails'
import { TitleProjectCardDetailStyle } from '../../molecules/CardProject/CardProjectDetailsStyles'
import Typewriter from '../../molecules/Typewritter/Typewritter'
import OtherProjects from '../OtherProjects/OtherProjects'
import ImageViewer from '../ImageViewer/ImageViewer'
import { GlobalContext } from '../../../Context/GlobalContext'

const SectionProjectDetails = () => {

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