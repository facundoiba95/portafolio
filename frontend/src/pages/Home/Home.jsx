import React, { useEffect } from 'react'
import SectionTop from '../../components/organisms/SectionTop/SectionTop'
import SectionProjectsHome from '../../components/organisms/SectionProjectsHome/SectionProjectsHome'
import SectionGeneric from '../../components/molecules/SectionGeneric/SectionGeneric';
import SectionSkillsHome from '../../components/organisms/SectionSkillsHome/SectionSkillsHome';
import SectionCertifications from '../../components/organisms/SectionCertifications/SectionCertifications';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjects } from '../../redux/features/projects/projectSlice';
import { getAllCertificates } from '../../redux/features/certifications/certificationSlice';
import LoaderFullWidth from '../../components/molecules/LoaderFullWidth/LoaderFullWidth';

const Home = () => {
  const dispatch = useDispatch();
  const isLoadingProjects = useSelector(state => state.projectSlice.isLoading);
  const isLoadingCertifications = useSelector(state => state.certificationSlice.isLoading);

  useEffect(() => {
    dispatch(getAllProjects())
    dispatch(getAllCertificates())
  }, [])


  return (
    <>
      {
        isLoadingProjects
          ? <LoaderFullWidth isActive={isLoadingProjects}/>
          : <>
            <SectionTop />
            <SectionGeneric>
              <SectionProjectsHome />
            </SectionGeneric>
            <SectionGeneric>
              <SectionSkillsHome />
            </SectionGeneric>
            <SectionGeneric>
              <SectionCertifications />
            </SectionGeneric>
          </>
      }
    </>
  )
}

export default Home