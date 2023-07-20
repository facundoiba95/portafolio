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
    justify-content:flex-start;
    align-items:flex-start;
    position:absolute;
    padding-top:20px;
    top:100px;
    left:${props => props.isOpenMenu ? '0' : '-100%'};
    width:100%;
    height:100vh;
    background-color:#14161a;
    gap:100px;
    
    .itemSubmenu{
        display:none;
    }
}
`

export const NavbarHeaderItemStyles = styled.li`
width:150px;
display:flex;
align-items:center;
justify-content:center;
cursor: pointer;
font-weight:600;
position:relative;
height:100%;

p:hover{
    transition:all 0.2s ease-in-out;
    letter-spacing:2px;
    color:yellow;
}

.submenu_container{
    height:100%;
    display:flex;
    align-items:center;

ul{
width:300px;
height:auto;
background-color:#14161a;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
position:absolute;
left:50%;
top:100px;
transform: translate(-50%);
font-size:1.2rem;
opacity:0;
visibility:hidden;
transition:all 0.2s ease-in-out;
border-radius:30px;
border:2px solid #80808070;
padding:10px;
}

li{
width:100%;
padding:20px 0px 20px 20px;

h4:hover{
    color:#2EDF37;
}}
}

.submenu_container:hover .submenu{
    opacity:1;
    visibility:visible;
}
.submenu_container:hover p{
    transition:all 0.2s ease-in-out;
    letter-spacing:2px;
    color:yellow;
}

@media (max-width: 768px) {
    height:auto;
    width:100%;
    justify-content:flex-start;
    padding-left:80px;

    p{  
      color:#93999E;
      font-size:1.4rem;
      cursor: pointer;
    }

    p:hover{    
      letter-spacing:0;
      color:#93999E;
    }
    p:active{
        color:yellow;
        transition:all 0.1s ease-in-out;
        transform:scale(2.2);
    }
}
`

export const ListSubmenuNavbarMobileStyles = styled.span`
width:100%;
height:100%;
display:none;
transition:all 0.1s ease-in-out;

@media (max-width: 768px) {
    display:flex;
    height:${props => props.isOpenSubmenu ? '30%' : '0'};
    flex-direction:column;
    padding-left:80px;
    max-height:350px;


    .iconClose,.iconOpen{
      color:white;
      font-weight:600;
      font-size:1.5rem;
      position:absolute;
      left:140px;
      transition:all 0.1s ease-in-out;
    }

    .iconClose{
        opacity:${props => props.isOpenSubmenu ? '0' : '1'};
        visibility: ${props => props.isOpenSubmenu ? 'hidden' : 'visible'};
    }

    .iconOpen{
        color:yellow;
        opacity:${props => props.isOpenSubmenu ? '1' : '0'};
        visibility: ${props => props.isOpenSubmenu ? 'visible' : 'hidden'};
    }

    p{
      color:#93999E;
      font-size:1.4rem;
      cursor: pointer;
      font-weight:600;
      display:flex;
      position:relative;
      align-items:center;
    }

    ul{
        transition:all 0.2s ease-in-out;
        display:flex;
        height:${props => props.isOpenSubmenu ? '100%' : '0'};
        opacity:${props => props.isOpenSubmenu ? '1' : '0'};
        visibility:${props => props.isOpenSubmenu ? 'visible' : 'hidden'};
        flex-direction:column;
        gap:20px;
        padding:20px 0 10px 0px;
    }
}
`

export const ItemSubmenuNavbarMobileStyles = styled.li`
width:100%;
max-width:300px;
padding-bottom:5px;
height:100%;
font-weight:600;
font-size:1.2rem;
cursor:pointer;
`

