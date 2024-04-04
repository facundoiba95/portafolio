import styled from "styled-components";

export const MenuHamburguerIconStyles = styled.div`
width:50px;
height:50px;
display:none;
flex-direction:column;
justify-content:center;
background-color:white;
gap:8px;
padding:15px;
transition:all 0.2s ease-in-out;
border-radius:${props => props.isOpenMenu ? 'none' : '50%'};
cursor: pointer;
position:relative;

hr {
    width:30px;
    height:3px;
    background-color:black;
    border:none;
    border-radius:5px;
    position:absolute;
    left:23%;
    top:50%;
    transition:all 0.2s ease-in-out;
}

hr:nth-child(2){
    visibility:${props => props.isOpenMenu ? 'hidden' : 'visible'};
    opacity: ${props => props.isOpenMenu ? 0 : 1};
}

hr:nth-child(1){
    top:${props => props.isOpenMenu ? 'none' : '17px'};
    transform: ${props => props.isOpenMenu ? 'rotate(45deg)' : 'none'};
}

hr:nth-child(3){
    top:${props => props.isOpenMenu ? 'none' : '33px'};
    transform: ${props => props.isOpenMenu ? 'rotate(-45deg)' : 'none'};
}

@media (max-width: 768px) {
    display:flex;
}
`