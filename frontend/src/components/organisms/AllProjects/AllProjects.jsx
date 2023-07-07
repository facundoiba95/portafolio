import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProjectHome from '../../molecules/CardProjectHome/CardProjectHome';
import { WrapperCardProjectsStyles } from '../SectionProjectsHome/SectionProjectsHomeStyles';
import { useNavigate, useParams } from 'react-router-dom';

const AllProjects = () => {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const params = useParams();


    const goDetailsProject = (e) => {
        const idProject = e.target.dataset.id;
        params.idProject = idProject;
        navigator(`/projects/${params.idProject}`)
    }


    // traer datos desde BDD
    const renderAllProjectsCards = () => {
        return [].map(project => {
            return (
                <CardProjectHome titleProject={'Mausports'} handleFunction={(e) => goDetailsProject(e)}/>
            )
        })
    }


  return (
    <WrapperCardProjectsStyles>
        <CardProjectHome titleProject={'Mausports'} handleFunction={(e) => goDetailsProject(e)}/>
        <CardProjectHome titleProject={'Tricampeon'} handleFunction={(e) => goDetailsProject(e)}/>
    </WrapperCardProjectsStyles>
    )
}

export default AllProjects