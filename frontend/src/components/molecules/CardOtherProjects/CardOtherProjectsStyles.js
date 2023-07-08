import styled from "styled-components";

export const CardOtherProjectContainerStyles = styled.li`
width:100%;
max-width:380px;
min-width:320px;
height:250px;
border:1px solid #80808080;
display:flex;
color:white;
justify-content:center;
align-items:center;
font-family:'Fira Code';
gap:10px;
cursor: pointer;

h2{
    color:#2EDF37;
    transition: all 0.1s ease-in-out;
}

p{
    font-size:2.2rem;
    font-weight:300;
}

h2:active{
    opacity:0;
    visibility:hidden;
    
}
`
