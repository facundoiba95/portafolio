import styled from "styled-components";

export const NavbarHeaderContainerStyles = styled.header`
width:100%;
height:100px;
display:flex;
justify-content:center;
align-items:center;
font-family:'Fira Code';
font-weight:300;
margin-bottom:0rem;
position:sticky;
backdrop-filter: blur(10px);
top:0;
z-index:1000;

@media (max-width: 768px) {
    justify-content:space-between;
    padding-left:20px;
}
`
export const NavbarHeaderListStyles = styled.ul`
width:auto;
height:100%;
display:flex;
justify-content:center;
align-items:center;

@media (max-width: 768px) {
    transition:all 0.2s ease-in-out;
    flex-direction:column;
    position:absolute;
    top:100px;
    left:${props => props.isOpenMenu ? '0' : '-100%'};
    width:100%;
    max-width:350px;
    min-height:400px;
}
`

export const NavbarHeaderItemStyles = styled.li`
width:150px;
display:flex;
align-items:center;
justify-content:center;
cursor: pointer;
font-weight:600;

p:hover{
    transition:all 0.2s ease-in-out;
    letter-spacing:2px;
    color:yellow;
}

@media (max-width: 768px) {
   display:none;
}
`