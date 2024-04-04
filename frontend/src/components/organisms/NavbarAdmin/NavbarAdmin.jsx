import React, { useContext } from 'react'
import { NavbarAdminContainerStyles, NavbarAdminItemsStyles, NavbarAdminListStyles } from './NavbarAdminStyles'
import { BiSolidChevronLeftCircle, BiSolidChevronRightCircle } from 'react-icons/bi';
import { GlobalContext } from '../../../Context/GlobalContext';
import { useNavigate } from 'react-router-dom';

const NavbarAdmin = () => {
    const { isOpenMenuAdmin, setIsOpenMenuAdmin } = useContext(GlobalContext);
    const navigator = useNavigate();

    const goAddProject = () => {
        window.scrollTo(0,0);
        setIsOpenMenuAdmin(!isOpenMenuAdmin);
        navigator('/admin/addProject');
    }

    const goAddCertificate = () => {
        window.scrollTo(0,0);
        setIsOpenMenuAdmin(!isOpenMenuAdmin);
        navigator('/admin/addCertificate');
    }



  return (
    <NavbarAdminContainerStyles isOpenMenuAdmin={isOpenMenuAdmin}>
        <BiSolidChevronRightCircle className='iconRight' onClick={() => setIsOpenMenuAdmin(false)}/>
        <BiSolidChevronLeftCircle className='iconLeft' onClick={() => setIsOpenMenuAdmin(true)}/>
        <NavbarAdminListStyles>
            <NavbarAdminItemsStyles onClick={goAddProject}><p>Agregar proyecto</p></NavbarAdminItemsStyles>
            <NavbarAdminItemsStyles onClick={goAddCertificate}><p>Agregar certificado</p></NavbarAdminItemsStyles>
        </NavbarAdminListStyles>
    </NavbarAdminContainerStyles>
    )
}

export default NavbarAdmin