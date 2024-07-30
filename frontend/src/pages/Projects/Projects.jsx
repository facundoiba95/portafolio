import React, { useContext } from 'react';
import { SectionProjectsHomeContainerStyles } from '../../components/organisms/SectionProjectsHome/SectionProjectsHomeStyles';
import TitleSections from '../../components/atoms/TitleSections/TitleSections';
import TransitionContainer from '../../components/molecules/TransitionContainer/TransitionContainer';

const Projects = ({ children }) => {

    return (
        <TransitionContainer>
            <SectionProjectsHomeContainerStyles>
                <TitleSections title={'Proyectos'} />
                {children}
            </SectionProjectsHomeContainerStyles>
        </TransitionContainer>
    );
};

export default Projects;