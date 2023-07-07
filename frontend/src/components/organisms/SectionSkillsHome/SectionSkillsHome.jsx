import React from 'react'
import { IconItemSkillsStyles, ListSkillsHomeIconsStyles } from './SectionSkillsHomeStyles'
import TitleSections from '../../atoms/TitleSections/TitleSections'
import { SectionProjectsHomeContainerStyles } from '../SectionProjectsHome/SectionProjectsHomeStyles'
import { FaNodeJs, FaReact, FaHtml5, FaCss3, FaGitAlt} from 'react-icons/fa';
import { SiExpress, SiMongodb, SiRedux, SiStyledcomponents, SiJavascript, SiPostman } from 'react-icons/si';
import { BsDatabaseFillCheck } from 'react-icons/bs';


const SectionSkillsHome = () => {
  return (
    <SectionProjectsHomeContainerStyles>
        <TitleSections title={'Tech stack'}/>
        <ListSkillsHomeIconsStyles>
            <IconItemSkillsStyles>
                <p>React JS</p>
                <FaReact  className='iconSkill'/>
            </IconItemSkillsStyles>
            <IconItemSkillsStyles>
                <p>HTML</p>
                <FaHtml5  className='iconSkill'/>
            </IconItemSkillsStyles>
            <IconItemSkillsStyles>
                <p>CSS</p>
                <FaCss3  className='iconSkill'/>
            </IconItemSkillsStyles>
            <IconItemSkillsStyles>
                <p>MongoDB</p>
                <SiMongodb  className='iconSkill'/>
            </IconItemSkillsStyles>
            <IconItemSkillsStyles>
                <p>React Redux Toolkit</p>
                <SiRedux  className='iconSkill'/>
            </IconItemSkillsStyles>
            <IconItemSkillsStyles>
                <p>Node JS</p>
                <FaNodeJs  className='iconSkill'/>
            </IconItemSkillsStyles>
            <IconItemSkillsStyles>
                <p>Javascript</p>
                <SiJavascript  className='iconSkill'/>
            </IconItemSkillsStyles>
            <IconItemSkillsStyles>
                <p>Express</p>
                <SiExpress className='iconSkill'/>
            </IconItemSkillsStyles>
            <IconItemSkillsStyles>
                <p>Styled Components</p>
                <SiStyledcomponents className='iconSkill' />
            </IconItemSkillsStyles>
            <IconItemSkillsStyles>
                <p>Git</p>
                <FaGitAlt className='iconSkill' />
            </IconItemSkillsStyles>
            <IconItemSkillsStyles>
                <p>Postman</p>
                <SiPostman className='iconSkill' />
            </IconItemSkillsStyles>
            <IconItemSkillsStyles>
                <p>CRUD Database</p>
                <BsDatabaseFillCheck className='iconSkill' />
            </IconItemSkillsStyles>
        </ListSkillsHomeIconsStyles>
    </SectionProjectsHomeContainerStyles>
    )
}

export default SectionSkillsHome