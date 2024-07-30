import React, { useContext } from 'react'
import { ItemSubmenuNavbarMobileStyles, ListSubmenuNavbarMobileStyles, NavbarHeaderContainerStyles, NavbarHeaderItemStyles, NavbarHeaderListStyles } from './NavbarHeaderStyles'
import MenuHamburguer from '../../atoms/HamburguerMenu/MenuHamburguer'
import { GlobalContext } from '../../../Context/GlobalContext'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../../atoms/Button/Button'
import { useSelector, useDispatch } from 'react-redux';
import { handleLogout } from '../../../redux/features/users/usersSlice'
import { PiEyeClosedLight, PiEyeLight } from 'react-icons/pi';

const NavbarHeader = () => {
  const { isOpenMenu, setIsOpenMenu, setIsOpenSubmenu, isOpenSubmenu } = useContext(GlobalContext);
  const isLogged = useSelector(state => state.usersSlice.isLogged);
  const navigator = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const allProjects = useSelector(state => state.projectSlice.projects);

  const goDetailProject = (e) => {
    params.idProject = e.target.dataset.id;
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
    setIsOpenMenu(!isOpenMenu)
    setIsOpenSubmenu(false);
    navigator(`/projects/${params.idProject}`);
  }

  const renderItemProjects = () => {
    return allProjects.map(projects => {
      return (
        <li onClick={(e) => goDetailProject(e)} data-id={projects._id}>
          <h4 onClick={(e) => goDetailProject(e)} data-id={projects._id}>
            {projects.name}
          </h4>
        </li>
      )
    })
  }

  const renderItemsSubmenuMobil = () => {
    return allProjects.map(project => {
      const { name, _id } = project;
      return (
        <ItemSubmenuNavbarMobileStyles data-id={_id} onClick={(e) => goDetailProject(e)}>{name}</ItemSubmenuNavbarMobileStyles>
      )
    });
  }

  const goProjects = () => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    })
    setIsOpenMenu(!isOpenMenu)
    navigator('/projects/allProjects');
  }

  const goHome = () => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    })
    setIsOpenMenu(!isOpenMenu)
    navigator('/')
  }

  const goAboutMe = () => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    })
    setIsOpenMenu(!isOpenMenu)
    navigator('/aboutme')
  }

  const goContact = () => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    })
    setIsOpenMenu(!isOpenMenu)
    navigator('/contact')
  }

  const goLogin = () => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    })
    setIsOpenMenu(!isOpenMenu)
    navigator('/login')
  }

  const logout = () => {
    dispatch(handleLogout());
  }


  return (
    <NavbarHeaderContainerStyles>
      <MenuHamburguer />
      <NavbarHeaderListStyles isOpenMenu={isOpenMenu}>
        <NavbarHeaderItemStyles onClick={goHome}><p>Home</p></NavbarHeaderItemStyles>
        <NavbarHeaderItemStyles className='itemSubmenu'>
          <span className='submenu_container'>
            <p onClick={goProjects}>Proyectos</p>
            <ul className='submenu'>
              {renderItemProjects()}
            </ul>
          </span>
        </NavbarHeaderItemStyles>
        <ListSubmenuNavbarMobileStyles isOpenSubmenu={isOpenSubmenu}>
          <p onClick={() => setIsOpenSubmenu(!isOpenSubmenu)}>
            Proyectos
            <PiEyeClosedLight className='iconClose' />
            <PiEyeLight className='iconOpen' />
          </p>
          <ul>
            {renderItemsSubmenuMobil()}
          </ul>
        </ListSubmenuNavbarMobileStyles>
        <NavbarHeaderItemStyles onClick={goAboutMe}><p>About Me</p></NavbarHeaderItemStyles>
        <NavbarHeaderItemStyles onClick={goContact}><p>Contacto</p></NavbarHeaderItemStyles>
      </NavbarHeaderListStyles>
      <NavbarHeaderListStyles>
        {
          !isLogged
            ? <Button title={'Login'} handleFunction={goLogin} />
            : <Button title={'Logout'} handleFunction={logout} />
        }
      </NavbarHeaderListStyles>
    </NavbarHeaderContainerStyles>
  )
}

export default NavbarHeader