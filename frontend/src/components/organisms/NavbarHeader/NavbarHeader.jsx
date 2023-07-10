import React, { useContext } from 'react'
import { NavbarHeaderContainerStyles, NavbarHeaderItemStyles, NavbarHeaderListStyles } from './NavbarHeaderStyles'
import MenuHamburguer from '../../atoms/HamburguerMenu/MenuHamburguer'
import { GlobalContext } from '../../../Context/GlobalContext'
import { useNavigate } from 'react-router-dom'
import Button from '../../atoms/Button/Button'

const NavbarHeader = () => {
  const { isOpenMenu, setIsOpenMenu } = useContext(GlobalContext);
  const navigator = useNavigate();
  
  const goProjects = () => {
    window.scrollTo(0,0);
    setIsOpenMenu(!isOpenMenu)
    navigator('/projects/allProjects');
  }

  const goHome = () => {
    window.scrollTo(0,0);
    setIsOpenMenu(!isOpenMenu)
    navigator('/')
  }

  const goAboutMe = () => {
    window.scrollTo(0,0);
    setIsOpenMenu(!isOpenMenu)
    navigator('/aboutme')
  }

  const goContact = () => {
    window.scrollTo(0,0);
    setIsOpenMenu(!isOpenMenu)
    navigator('/contact')
  }

  const goLogin = () => {
    window.scrollTo(0,0);
    setIsOpenMenu(!isOpenMenu)
    navigator('/login')
  }

  return (
    <NavbarHeaderContainerStyles>
      <MenuHamburguer/>
        <NavbarHeaderListStyles isOpenMenu={isOpenMenu}>
            <NavbarHeaderItemStyles onClick={goHome}><p>Home</p></NavbarHeaderItemStyles>
            <NavbarHeaderItemStyles onClick={goProjects}><p>Proyectos</p></NavbarHeaderItemStyles>
            <NavbarHeaderItemStyles onClick={goAboutMe}><p>About Me</p></NavbarHeaderItemStyles>
            <NavbarHeaderItemStyles onClick={goContact}><p>Contacto</p></NavbarHeaderItemStyles>
        </NavbarHeaderListStyles>
        <NavbarHeaderListStyles>
          <Button title={'Login'} handleFunction={goLogin}/>
        </NavbarHeaderListStyles>
    </NavbarHeaderContainerStyles>
  )
}

export default NavbarHeader