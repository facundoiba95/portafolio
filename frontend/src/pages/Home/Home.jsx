import React, { useEffect } from 'react'
import SectionTop from '../../components/organisms/SectionTop/SectionTop'
import SectionProjectsHome from '../../components/organisms/SectionProjectsHome/SectionProjectsHome'
import SectionGeneric from '../../components/molecules/SectionGeneric/SectionGeneric';
import SectionSkillsHome from '../../components/organisms/SectionSkillsHome/SectionSkillsHome';
import SectionCertifications from '../../components/organisms/SectionCertifications/SectionCertifications';
import { useDispatch } from 'react-redux';
import { getAllProjects } from '../../redux/features/projects/projectSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(getAllProjects())
  }, [])


  return (
    <>
    <SectionTop/>
    <SectionGeneric>
      <SectionProjectsHome/>
    </SectionGeneric>
    <SectionGeneric>
      <SectionSkillsHome/>
    </SectionGeneric>
    <SectionGeneric>
      <SectionCertifications/>
    </SectionGeneric>
    </>
  )
}

export default Home