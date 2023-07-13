import React from 'react'
import { CardOtherProjectContainerStyles } from './CardOtherProjectsStyles'

const CardOtherProjects = ({
  title, 
  handleFunction,
  _id
}) => {

  return (
    <CardOtherProjectContainerStyles data-id={_id} onClick={(e) => handleFunction(e)}>
      <p>{`[`}</p>
      <h2 onClick={(e) => handleFunction(e)} data-id={_id}>{`"${title}"`}</h2>
      <p>{`]`}</p>
    </CardOtherProjectContainerStyles>
    )
}

export default CardOtherProjects