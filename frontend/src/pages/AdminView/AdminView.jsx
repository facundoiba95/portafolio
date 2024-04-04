import React, { useContext, useEffect } from 'react'
import { AdminViewContainerStyles } from './AdminViewStyles'
import TitleSections from '../../components/atoms/TitleSections/TitleSections'
import NavbarAdmin from '../../components/organisms/NavbarAdmin/NavbarAdmin'
import { useLocation } from 'react-router-dom';
import AdminPanelEmpty from '../../components/molecules/AdminPanelEmpty/AdminPanelEmpty';
import { GlobalContext } from '../../Context/GlobalContext';
import { useDispatch, useSelector } from 'react-redux';
import ErrorCard from '../../components/molecules/ErrorCard/ErrorCard';
import { validateToken } from '../../redux/features/users/usersSlice';
import { restartStatusProject } from '../../redux/features/projects/projectSlice';

const AdminView = ({children}) => {
   const { isOpenMenuAdmin } = useContext(GlobalContext);
   const isAdmin = useSelector( state => state.usersSlice.isAdmin );
   const verifed = useSelector( state => state.usersSlice.verifed );
   const location = useLocation();
   const dispatch = useDispatch();
   
   const handleRoute = () => {
      if(location.pathname === '/admin'){
         return (
            <AdminPanelEmpty/>
         )
      } else {
         return (
            <>
            {children}
            </>
         )
      }
   }

   useEffect(() => {
      dispatch(validateToken());
      dispatch(restartStatusProject());
   }, [])

  return (
    <>
    {
      isAdmin && verifed ?
      <>
       <TitleSections title={'Admin view'}/>
       <AdminViewContainerStyles isOpenMenuAdmin={isOpenMenuAdmin}>
        <NavbarAdmin/>
           {handleRoute()}
       </AdminViewContainerStyles>
      </>
      : <ErrorCard/>
    }
    </>
    )
}

export default AdminView