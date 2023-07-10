import React from 'react'
import { NavbarAdminContainerStyles, NavbarAdminItemsStyles, NavbarAdminListStyles } from './NavbarAdminStyles'

const NavbarAdmin = () => {
  return (
    <NavbarAdminContainerStyles>
        <NavbarAdminListStyles>
            <NavbarAdminItemsStyles>Este es el item numero 1</NavbarAdminItemsStyles>
            <NavbarAdminItemsStyles>Este es el item numero 2</NavbarAdminItemsStyles>
            <NavbarAdminItemsStyles>Item numero 3</NavbarAdminItemsStyles>
            <NavbarAdminItemsStyles>Este es el otro item numero 4</NavbarAdminItemsStyles>
        </NavbarAdminListStyles>
    </NavbarAdminContainerStyles>
    )
}

export default NavbarAdmin