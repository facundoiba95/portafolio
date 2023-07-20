import React from 'react'
import { CardProjectHomeContainerStyles, CardProjectHomeContentOneStyles } from './CardProjectHomeStyles'
import { FaNodeJs, FaReact, FaHtml5 } from 'react-icons/fa';
import { SiExpress,SiCss3,SiJavascript, SiRedux, SiMongodb, SiStyledcomponents } from 'react-icons/si';

const CardProjectHome = ({
      titleProject,
      handleFunction,
      _id,
      techStack
    }) => {
        const iconsTechStack = {
            'nodejs': <FaNodeJs style={{color:'yellowgreen'}}/> ,
            'reactjs': <FaReact style={{color:'#3a86ff'}}/>,
            'express': <SiExpress/>,
            'redux': <SiRedux style={{color:'purple'}}/>,
            'html': <FaHtml5 style={{color:'orange'}}/>,
            'mongodb': <SiMongodb style={{color:'green'}}/>,
            'javascript': <SiJavascript style={{color:'ff9900'}}/>,
            'styled-components': <SiStyledcomponents style={{color:'pink'}}/>,
            'css': <SiCss3 style={{color:'#2899F3'}}/>
        }

        const renderIconsTechStack = () => {
            return techStack.filter(tech => iconsTechStack[tech]).map(tech => {
              return iconsTechStack[tech]
            });
          }
        
  return (
    <CardProjectHomeContainerStyles onClick={(e) => handleFunction(e)} data-id={_id}>
        <CardProjectHomeContentOneStyles onClick={(e) => handleFunction(e)} data-id={_id}>
            <h2 onClick={(e) => handleFunction(e)} data-id={_id}>{titleProject}</h2>
            <span className='toolsContainer'>
                {
                  renderIconsTechStack()
                }
            </span>
        </CardProjectHomeContentOneStyles>
    </CardProjectHomeContainerStyles>
    )
}

export default CardProjectHome