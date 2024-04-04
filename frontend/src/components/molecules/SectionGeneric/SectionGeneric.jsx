import React from 'react'
import { SectionGenericContainerStyles } from './SectionGenericStyles'

const SectionGeneric = ({children}) => {
  return (
    <SectionGenericContainerStyles>
        {children}
    </SectionGenericContainerStyles>
  )
}

export default SectionGeneric