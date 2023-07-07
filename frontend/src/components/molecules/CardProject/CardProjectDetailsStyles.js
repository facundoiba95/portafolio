import { styled } from "styled-components";

export const CardProjectDetailsContainerStyles = styled.div`
width:100%;
height:600px;
max-width:500px;
font-family:'Fira Code';
font-weight:600;

@media (max-width: 580px) {
    position:relative;
    display:flex;
    flex-direction:column;
    gap:15px;
}
`

export const TitleProjectCardDetailStyle = styled.span`
font-family:'Fira Code';
display:flex;
align-items:center;
gap:15px;
height:40px;

p{
    font-size:1.2rem;
    padding-right:20px;
    border-right: 4px solid white;
}

h2{
    text-align:center;
    padding-left:10px;
}

@media (max-width: 580px) {
    
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    gap:5px;
    width:100%;
    height:auto;

    p{
        display:none;
        text-align:center;
        padding:0;
        border:none;
        text-align:center;
    }

    h2{
        padding:0;
    }
}
`

export const TechStackContainerStyles = styled.span`
font-family:'Fira Code';
position:relative;
top:0px;
left:0px;
display:flex;
align-items:center;
gap:15px;
height:40px;

p{
    font-size:1.2rem;
    padding-right:20px;
}

h2{
    text-align:center;
    padding-left:10px;
}

@media (max-width: 768px) {
    p{
        text-align:center;
        padding:0;
        border:none;
        text-align:center;
    }

    h2{
        padding:0;
    } 
}
`