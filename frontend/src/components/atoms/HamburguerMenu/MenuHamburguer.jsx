import React, { useContext } from 'react'
import { MenuHamburguerIconStyles } from './MenuHamburguerStyles'
import { GlobalContext } from '../../../Context/GlobalContext'

const MenuHamburguer = () => {
    const {  isOpenMenu, setIsOpenMenu } = useContext(GlobalContext);

  return (
    <MenuHamburguerIconStyles onClick={() => setIsOpenMenu(!isOpenMenu)} isOpenMenu={isOpenMenu}>
        <hr />
        <hr />
        <hr />
    </MenuHamburguerIconStyles>
  )
}

export default MenuHamburguer