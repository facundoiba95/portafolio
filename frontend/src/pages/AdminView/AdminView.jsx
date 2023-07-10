import React from 'react'
import { AdminViewContainerStyles } from './AdminViewStyles'
import TitleSections from '../../components/atoms/TitleSections/TitleSections'
import NavbarAdmin from '../../components/organisms/NavbarAdmin/NavbarAdmin'

const AdminView = ({children}) => {
  return (
    <>
       <TitleSections title={'Admin view'}/>
       <AdminViewContainerStyles>
        <NavbarAdmin/>
           {children}
       </AdminViewContainerStyles>
    </>
    )
}

export default AdminView