import { styled } from "styled-components";

export const CardAddCertificateContainerStyle = styled.div`
width:100%;
max-width:600px;
height:100%;
padding:10px;
font-family:'Fira Code';
margin:0 auto;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:30px;

.titleCard{
    font-size:2.5rem;
    text-align:center;
}

button {
    width:150px;
    height:40px;
    border-radius:5px;
    border:1px solid yellow;
    background-color:transparent;
    color:white;
    font-weight:600;
    margin:0 auto;
    cursor: pointer;
}
`