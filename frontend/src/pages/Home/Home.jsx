import React from 'react'
import SectionTop from '../../components/organisms/SectionTop/SectionTop'
import SectionProjectsHome from '../../components/organisms/SectionProjectsHome/SectionProjectsHome'
import SectionGeneric from '../../components/molecules/SectionGeneric/SectionGeneric';
import SectionSkillsHome from '../../components/organisms/SectionSkillsHome/SectionSkillsHome';
import SectionCertifications from '../../components/organisms/SectionCertifications/SectionCertifications';
import SectionFramerMotion from '../../components/organisms/SectionFramerMotion/SectionFramerMotion';


const Home = () => {
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