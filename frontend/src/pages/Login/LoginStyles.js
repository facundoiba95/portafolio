import { styled } from "styled-components";

export const LoginContainerStyles = styled.section`
width:100%;
height:100%;
`

export const CardLoginContainerStyles = styled.form`
width:100%;
max-width:600px;
height:400px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:0 auto;
gap:20px;
font-family:'Fira Code';
font-weight:600;

span{
    display:flex;
    flex-direction:column;
    gap:5px;
}

label{
    font-size:1.2rem;
}

input{
    width:250px;
    height:40px;
    border-radius:5px;
    font-size:1.4rem;
    padding-left:10px;
}

button{
    width:190px;
    height:40px;
    border-radius:5px;
    background-color: #F9F05F;
    font-weight:600;
    font-size:1.2rem;
}
`