import React, { useEffect, useState } from 'react'
import { CardLoginContainerStyles, LoginContainerStyles } from './LoginStyles';
import TitleSections from '../../components/atoms/TitleSections/TitleSections';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleLogin } from '../../redux/features/users/usersSlice';
import ErrorCard from '../../components/molecules/ErrorCard/ErrorCard';

const Login = () => {
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const isLogged = useSelector(state => state.usersSlice.isLogged);
    const isAdmin = useSelector(state => state.usersSlice.isAdmin);
    const status = useSelector(state => state.usersSlice.status);
    const navigator = useNavigate();
    const dispatch = useDispatch();

    const sendLogin = (e) => {
        e.preventDefault();

        const user = {
            email: inputEmail,
            password: inputPassword
        };
        dispatch(handleLogin(user))
    }

    const goAdminView = () => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
        navigator('/admin')
    }


    useEffect(() => {
        switch (status) {
            case 404:
                alert('Usuario o email no registrado!');
                break;
            case 403:
                alert('Contraseña incorrecta');
                break;
        }
    }, [status])

    return (
        <>
            {
                !isLogged ?
                    <LoginContainerStyles>
                        <TitleSections title={'Login'} />
                        <CardLoginContainerStyles onSubmit={sendLogin}>
                            <span>
                                <label htmlFor="inputEmail">Email:</label>
                                <input type="email" required id='inputEmail' value={inputEmail} placeholder='Email' onChange={(e) => setInputEmail(e.target.value)} />
                            </span>
                            <span>
                                <label htmlFor="inputPassword">Password:</label>
                                <input type="password" required value={inputPassword} placeholder='Password' id='inputPassword' onChange={(e) => setInputPassword(e.target.value)} />
                            </span>
                            <button>Iniciar sesión</button>
                        </CardLoginContainerStyles>
                    </LoginContainerStyles>
                    : isAdmin
                        ? goAdminView()
                        : <ErrorCard />
            }
        </>
    )
}

export default Login;