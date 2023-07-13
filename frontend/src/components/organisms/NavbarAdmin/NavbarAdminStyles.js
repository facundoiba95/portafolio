import { styled } from "styled-components";

export const NavbarAdminContainerStyles = styled.nav`
width:100%;
max-width:400px;
height:100vh;
background-color:#93999E;
font-family:'Fira Code';
position:relative;
transition:all 0.2s ease-in-out;
left:${props => props.isOpenMenuAdmin ? '-380px' : '0px'};

.iconLeft, .iconRight{
    transition:all 0.2s ease-in-out;
    font-size:50px;
    position:absolute;
    top:150px;
    cursor:pointer;
}

.iconRight{
    visibility:${props => props.isOpenMenuAdmin ? 'visible' : 'hidden'};
    opacity:${props => props.isOpenMenuAdmin ? '1' : '0'};
    left:${props => props.isOpenMenuAdmin ? '380px' : '15px'};
}

.iconLeft{
    visibility:${props => props.isOpenMenuAdmin ? 'hidden' : 'visible'};
    opacity:${props => props.isOpenMenuAdmin ? '0' : '1'};
    left:${props => props.isOpenMenuAdmin ? '375px' : '375px'};
}

@media (max-width: 580px) {
    max-width:100%;
    
    .iconLeft, .iconRight{
    transition:all 0.2s ease-in-out;
    font-size:50px;
    position:absolute;
    top:150px;
    cursor:pointer;
}

.iconRight{
    visibility:${props => props.isOpenMenuAdmin ? 'visible' : 'hidden'};
    opacity:${props => props.isOpenMenuAdmin ? '1' : '0'};
    left:${props => props.isOpenMenuAdmin ? '380px' : '15px'};
}

.iconLeft{
    visibility:${props => props.isOpenMenuAdmin ? 'hidden' : 'visible'};
    opacity:${props => props.isOpenMenuAdmin ? '0' : '1'};
    left:${props => props.isOpenMenuAdmin ? '375px' : '0px'};
}
}
`

export const NavbarAdminListStyles = styled.ul`
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:flex-start;
gap:20px;
`

export const NavbarAdminItemsStyles = styled.li`
width:100%;
font-size:1.2rem;
color:white; 
font-weight:600;
padding-left:20px;
height:50px;
border-bottom:2px solid white;
display:flex;
align-items:center;
text-transform:uppercase;
cursor: pointer;
transition:all 0.2s ease-in-out;

p:hover{
    color:white;
}
p:active{
    scale:1.1;
    color:yellow;
}
`