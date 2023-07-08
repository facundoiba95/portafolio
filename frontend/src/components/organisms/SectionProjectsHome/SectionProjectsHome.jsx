import React from 'react'
import { SectionProjectsHomeContainerStyles, WrapperCardProjectsStyles } from './SectionProjectsHomeStyles'
import TitleSections from '../../atoms/TitleSections/TitleSections'
import CardProjectHome from '../../molecules/CardProjectHome/CardProjectHome'
import { useNavigate, useParams } from 'react-router-dom'

const SectionProjectsHome = () => {
  const navigator = useNavigate();
  const params = useParams();

  const goDetailsProject = (e) => {
      const idProject = e.target.dataset.id;
      params.idProject = idProject;
      window.scrollTo(0,0)
      navigator(`/projects/${params.idProject}`)
  }

  return (
    <SectionProjectsHomeContainerStyles>
        <TitleSections title={'Proyectos'}/>
        <WrapperCardProjectsStyles>
          <CardProjectHome titleProject={'Mau SportsTV'} handleFunction={(e) => goDetailsProject(e)}/>
          <CardProjectHome titleProject={'Tricampeon'} handleFunction={(e) => goDetailsProject(e)}/>
          <CardProjectHome titleProject={'Vestigio App'} handleFunction={(e) => goDetailsProject(e)}/>
          <CardProjectHome titleProject={'TodoApp'} handleFunction={(e) => goDetailsProject(e)}/>
          <CardProjectHome titleProject={'Landing page'} handleFunction={(e) => goDetailsProject(e)}/>
        </WrapperCardProjectsStyles>
    </SectionProjectsHomeContainerStyles>
    )
}

export default SectionProjectsHome