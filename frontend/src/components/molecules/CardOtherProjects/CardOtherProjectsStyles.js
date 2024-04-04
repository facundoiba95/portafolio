import styled from "styled-components";

export const CardOtherProjectContainerStyles = styled.li`
width:100%;
min-width:380px;
height:250px;
border:1px solid #80808080;
display:flex;
color:white;
justify-content:center;
align-items:center;
font-family:'Fira Code';
gap:10px;

h2{
    color:#2EDF37;
    transition: all 0.1s ease-in-out;
    text-align:center;
}

p{
    font-size:2.2rem;
    font-weight:300;
}
h2:hover{
    cursor: pointer;
}
h2:active{
    opacity:0;
    visibility:hidden;
}
`
