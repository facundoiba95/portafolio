import { styled } from "styled-components";

export const AboutMeContainerStyles = styled.section`
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
font-family:'Poppins';
gap:20px;

h2{
    font-size:2.5rem;
}

p{
    color:#ffffff99;
    width:100%;
    max-width:1000px;
    font-size:1.2rem;
    font-weight:600;
    letter-spacing:1px;
    padding:10px;
}

strong{
    color:white;
}

a{
    color:#808080;
}

small,h4{
    font-size:1.2rem;
    color:#fffff0;
}

@media (max-width: 580px) {
    p{
        text-align:left;
    }
}
`