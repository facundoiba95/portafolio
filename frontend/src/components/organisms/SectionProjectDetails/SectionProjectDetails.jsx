import React, { useContext, useEffect, useState } from 'react'
import { SectionProjectDetailsContainerStyles } from './SectionProjectDetailsStyles'
import CardProjectDetails from '../../molecules/CardProject/CardProjectDetails'
import { TitleProjectCardDetailStyle } from '../../molecules/CardProject/CardProjectDetailsStyles'
import Typewriter from '../../molecules/Typewritter/Typewritter'
import OtherProjects from '../OtherProjects/OtherProjects'
import ImageViewer from '../ImageViewer/ImageViewer'
import { GlobalContext } from '../../../Context/GlobalContext'
import { useDispatch, useSelector } from 'react-redux'
import { getProject } from '../../../redux/features/projects/projectSlice'
import { useParams } from 'react-router-dom'

const SectionProjectDetails = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const projectSelected = useSelector( state => state.projectSlice.project );

    useEffect(() => {
        dispatch(getProject(params.idProject))
    }, [ params.idProject ])

    const renderProjectSelected = () => {
        return projectSelected.map( project => {
            const {
                name,
                linkproject,
                linkwebsite,
                techStack,
                img1,img2,img3,img4,
                content,
                _id
             } = project;

             return (
                <CardProjectDetails
                name={name}
                linkproject={linkproject}
                linkwebsite={linkwebsite}
                content={content}
                techStack={techStack}
                img1={img1}
                img2={img2}
                img3={img3}
                img4={img4}
                _id={_id}
                />
            )
        } )
    }
    return (
    <>
    <SectionProjectDetailsContainerStyles>
        {renderProjectSelected()}
    </SectionProjectDetailsContainerStyles>
    <OtherProjects/>
    </>
    )
}

export default SectionProjectDetails