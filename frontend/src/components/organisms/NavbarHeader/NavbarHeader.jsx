import React, { useContext } from 'react'
import { NavbarHeaderContainerStyles, NavbarHeaderItemStyles, NavbarHeaderListStyles } from './NavbarHeaderStyles'
import MenuHamburguer from '../../atoms/HamburguerMenu/MenuHamburguer'
import { GlobalContext } from '../../../Context/GlobalContext'
import SectionFramerMotion from '../SectionFramerMotion/SectionFramerMotion'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

const NavbarHeader = () => {
  const { isOpenMenu, setIsOpenMenu } = useContext(GlobalContext);
  const navigator = useNavigate();
  
  const goProjects = () => {
    navigator('/projects/allProjects');
  }

  const goHome = () => {
    navigator('/')
  }

  const goAboutMe = () => {
    navigator('/aboutme')
  }

  const goContact = () => {
    navigator('/contact')
  }

  return (
    <NavbarHeaderContainerStyles>
      <MenuHamburguer/>
        <NavbarHeaderListStyles isOpenMenu={isOpenMenu}>
            <SectionFramerMotion />
            <NavbarHeaderItemStyles onClick={goHome}><p>Home</p></NavbarHeaderItemStyles>
            <NavbarHeaderItemStyles onClick={goProjects}><p>Proyectos</p></NavbarHeaderItemStyles>
            <NavbarHeaderItemStyles onClick={goAboutMe}><p>About Me</p></NavbarHeaderItemStyles>
            <NavbarHeaderItemStyles onClick={goContact}><p>Contacto</p></NavbarHeaderItemStyles>
        </NavbarHeaderListStyles>
    </NavbarHeaderContainerStyles>
  )

}

export default NavbarHeader