import styled from 'styled-components';

export const ContactContainerStyles = styled.section`
width:100%;
height:100%;
display:flex;
flex-direction:column;
`
export const FormContactContainerStyles = styled.div`
width:100%;
max-width:600px;
height:100%;
margin:0 auto;
font-family:'Fira Code';
display:flex;
flex-direction:column;
gap:20px;
padding:10px;

span{
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
}

label{
    font-size:1.5rem;
}

input{
    width:250px;
    height:40px;
    border-radius:5px;
    color:black;
    padding-left:10px;
    font-size:1.3rem;
}

::placeholder{
    color:black;
    font-size:1.3rem;
    padding-left:10px;
}

textarea{
    font-size:1.2rem;
    color:black;
    font-weight:600;
    padding-left:10px;
}

textarea::placeholder{
    color:black;
    font-weight:600;
}

button{
    width:200px;
    height:40px;
    border-radius:5px;
    border:none;
    background-color: #80808080;
    color:white;
    font-size:1.2rem;
    margin:0 auto;
    cursor: pointer;
}
`