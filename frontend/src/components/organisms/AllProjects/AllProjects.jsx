import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProjectHome from '../../molecules/CardProjectHome/CardProjectHome';
import { WrapperCardProjectsStyles } from '../SectionProjectsHome/SectionProjectsHomeStyles';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllProjects } from '../../../redux/features/projects/projectSlice';

const AllProjects = () => {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const params = useParams();
    const allProjects = useSelector( state => state.projectSlice.allProjects );
 
    useEffect(() => {
       dispatch(getAllProjects())
    }, [])


    const goDetailsProject = (e) => {
        const idProject = e.target.dataset.id;
        params.idProject = idProject;
        navigator(`/projects/${params.idProject}`)
    }

    const renderAllProjectsCards = () => {
        return allProjects.map(project => {
            const { name, _id,techStack } = project;
            return (
                <CardProjectHome
                 titleProject={name} 
                 techStack={techStack}
                 handleFunction={(e) => goDetailsProject(e)}
                 _id={_id}
                 />
            )
        }).reverse()
    }

  return (
    <WrapperCardProjectsStyles>
        {renderAllProjectsCards()}
    </WrapperCardProjectsStyles>
    )
}

export default AllProjects