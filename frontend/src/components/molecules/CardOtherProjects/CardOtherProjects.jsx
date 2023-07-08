import React from 'react'
import { CardOtherProjectContainerStyles } from './CardOtherProjectsStyles'

const CardOtherProjects = ({title}) => {
  return (
    <CardOtherProjectContainerStyles>
      <p>{`[`}</p>
      <h2>{`"${title}"`}</h2>
      <p>{`]`}</p>
    </CardOtherProjectContainerStyles>
    )
}

export default CardOtherProjects