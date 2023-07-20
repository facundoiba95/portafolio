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



p{
    color:#ffffff99;
    width:100%;
    max-width:700px;
    font-size:1.2rem;
    font-weight:600;
    letter-spacing:1px;
}
strong{
    color:white;
}

a{
    color:#808080;
}

@media (max-width: 580px) {
    padding:10px;
    p{
        text-align:left;
    }
}
`