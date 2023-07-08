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
    height:50px;
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