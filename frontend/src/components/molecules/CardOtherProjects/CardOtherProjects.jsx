import React from 'react'
import { CardOtherProjectContainerStyles } from './CardOtherProjectsStyles'

const CardOtherProjects = ({title, handleFunction}) => {

  return (
    <CardOtherProjectContainerStyles onClick={(e) => handleFunction(e)}>
      <p>{`[`}</p>
      <h2 onClick={(e) => handleFunction(e)}>{`"${title}"`}</h2>
      <p>{`]`}</p>
    </CardOtherProjectContainerStyles>
    )
}

export default CardOtherProjects