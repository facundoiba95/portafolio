import React from 'react'
import { SectionProjectsHomeContainerStyles, WrapperCardProjectsStyles } from './SectionProjectsHomeStyles'
import TitleSections from '../../atoms/TitleSections/TitleSections'
import CardProjectHome from '../../molecules/CardProjectHome/CardProjectHome'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const SectionProjectsHome = () => {
  const navigator = useNavigate();
  const allProjects = useSelector( state => state.projectSlice.projects );

  const params = useParams();

  const goDetailsProject = (e) => {
      const idProject = e.target.dataset.id;
      params.idProject = idProject;
      window.scroll({
        top: 0,
        behavior: "smooth"
      })
      navigator(`/projects/${params.idProject}`)
  }

  const renderAllProjects = () => {
    return allProjects.map( project => {
      const { name, _id, techStack } = project;
      return (
        <CardProjectHome 
        titleProject={name} 
        _id={_id}
        techStack={techStack}
        handleFunction={(e) => goDetailsProject(e)}/>
      )
    } )
  }

  return (
    <SectionProjectsHomeContainerStyles>
        <TitleSections title={'Proyectos'}/>
        <WrapperCardProjectsStyles>
          {renderAllProjects()}
        </WrapperCardProjectsStyles>
    </SectionProjectsHomeContainerStyles>
    )
}

export default SectionProjectsHome