import React, { useEffect } from 'react'
import { OtherProjectListStyles, OtherProjectsContainerStyles, TitleOtherProjectsStyles } from './OtherProject'
import CardOtherProjects from '../../molecules/CardOtherProjects/CardOtherProjects'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const OtherProjects = () => {
    const params = useParams();
    const navigate = useNavigate();
    const allProjects = useSelector( state => state.projectSlice.projects );

    const goDetailProject = (e) => {
        params.idProject = e.target.dataset.id;
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
        navigate(`/projects/${params.idProject}`);
    }

    const renderOtherProjects = () => {
        return allProjects.map( project => {
            const { name, _id } = project;
            return ( 
                <CardOtherProjects
                 title={name} 
                 handleFunction={(e) => goDetailProject(e)}
                 _id={_id}/>
            )
        })
    }

  return (
    <OtherProjectsContainerStyles>
        <TitleOtherProjectsStyles>Otros proyectos</TitleOtherProjectsStyles>
        <OtherProjectListStyles>
            {renderOtherProjects()}
        </OtherProjectListStyles>
    </OtherProjectsContainerStyles>
    )
}

export default OtherProjects