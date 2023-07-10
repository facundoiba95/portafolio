import React, { useContext, useState } from 'react'
import { CardLoginContainerStyles, LoginContainerStyles } from './LoginStyles';
import TitleSections from '../../components/atoms/TitleSections/TitleSections';
import { GlobalContext } from '../../Context/GlobalContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [ inputEmail, setInputEmail ] = useState('');
    const [ inputPassword, setInputPassword ] = useState('');
    const { setIsOpenModal, isOpenModal } = useContext(GlobalContext);
    const navigator = useNavigate();


  return (
    <LoginContainerStyles>
        <TitleSections title={'Login'}/>
        <CardLoginContainerStyles>
            <span>
                <label htmlFor="inputEmail">Email:</label>
                <input type="email" required id='inputEmail' value={inputEmail} placeholder='Email' onChange={(e) => setInputEmail(e.target.value)}/>
            </span>
            <span>
                <label htmlFor="inputPassword">Password:</label>
                <input type="password"required  value={inputPassword} placeholder='Password' id='inputPassword' onChange={(e) => setInputPassword(e.target.value)}/>
            </span>
            <button onClick={() => navigator('/admin')}>Iniciar sesión</button>
        </CardLoginContainerStyles>
    </LoginContainerStyles>
  )
}

export default Login;