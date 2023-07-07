import React from 'react'
import { CardProjectHomeContainerStyles, CardProjectHomeContentOneStyles } from './CardProjectHomeStyles'
import { FaNodeJs, FaReact, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiRedux, SiStyledcomponents } from 'react-icons/si';
import { AiOutlineCloud } from 'react-icons/ai';


const CardProjectHome = ({titleProject, handleFunction, _id}) => {
  return (
    <CardProjectHomeContainerStyles onClick={(e) => handleFunction(e)} data-id={_id}>
        <CardProjectHomeContentOneStyles onClick={(e) => handleFunction(e)} data-id={_id}>
            <h2 onClick={(e) => handleFunction(e)} data-id={_id}>{titleProject}</h2>
            <span className='toolsContainer'>
                <FaNodeJs style={{color:'yellowgreen'}}/>
                <SiRedux style={{color:'purple'}}/>
                <SiExpress/>
                <SiStyledcomponents style={{color:'pink'}}/>
                <SiMongodb style={{color:'green'}}/>
                <FaReact style={{color:'#3a86ff'}}/>
                <FaHtml5 style={{color:'orange'}}/>
                <AiOutlineCloud style={{color:''}}/>
            </span>
        </CardProjectHomeContentOneStyles>
    </CardProjectHomeContainerStyles>
    )
}

export default CardProjectHome