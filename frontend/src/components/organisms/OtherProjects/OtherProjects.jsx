import React from 'react'
import { OtherProjectListStyles, OtherProjectsContainerStyles, TitleOtherProjectsStyles } from './OtherProject'
import CardOtherProjects from '../../molecules/CardOtherProjects/CardOtherProjects'
import { useNavigate, useParams } from 'react-router-dom';

const OtherProjects = () => {
    const params = useParams();
    const navigate = useNavigate();
    
    const goDetailProject = (e) => {
        params.idProject = e.target.dataset.id;
        window.scrollTo(0,0);
        navigate(`/projects/${params.idProject}`);
    }
  return (
    <OtherProjectsContainerStyles>
        <TitleOtherProjectsStyles>Otros proyectos</TitleOtherProjectsStyles>
        <OtherProjectListStyles>
            <CardOtherProjects title={'Mau SportsTV'} handleFunction={(e) => goDetailProject(e)}/>
            <CardOtherProjects title={'Vestigio App'} handleFunction={(e) => goDetailProject(e)}/>
            <CardOtherProjects title={'Tricampeón'} handleFunction={(e) => goDetailProject(e)}/>
            <CardOtherProjects title={'Todo App'} handleFunction={(e) => goDetailProject(e)}/>
            <CardOtherProjects title={'Landing Page'} handleFunction={(e) => goDetailProject(e)}/>
            <CardOtherProjects title={'Other'} handleFunction={(e) => goDetailProject(e)}/>
        </OtherProjectListStyles>
    </OtherProjectsContainerStyles>
    )
}

export default OtherProjects