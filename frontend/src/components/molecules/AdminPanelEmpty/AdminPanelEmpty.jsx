import React from 'react'
import { AdminPanelEmptyContainerStyles } from './AdminPanelEmptyStyles'
import { MdOutlineAdminPanelSettings } from 'react-icons/md';

const AdminPanelEmpty = () => {
  return (
    <AdminPanelEmptyContainerStyles>
        <span>
          <h1>Panel de administrador.</h1>
          <h2>En la barra izquierda encontrarás las herramientas de administrador.</h2>
        </span>
        <MdOutlineAdminPanelSettings className='iconAdmin'/>
    </AdminPanelEmptyContainerStyles>
    )
}

export default AdminPanelEmpty