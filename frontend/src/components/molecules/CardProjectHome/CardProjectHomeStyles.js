import styled from "styled-components";

export const CardProjectHomeContainerStyles = styled.div`
width:100%;
max-width:650px;
height:300px;
display:flex;
justify-content:center;
align-items:center;
border:1px solid #80808020;
cursor:pointer;


h2{
    padding:8px;
    border:transparent;
    color:#93999E;
}

:hover{
    h2{
    transition:all 0.2s ease-in-out;
    color:white;
    
    }

    .toolsContainer{
        opacity:1;
        visibility:visible;
    }
}

@media (max-width: 768px) {
    height: 250px;
    border: none;
    border-bottom: 1px solid #80808090;

    &:nth-child(1) {
        border-top: 1px solid #80808090;
    }
}

`

export const CardProjectHomeContentOneStyles = styled.div`
width:100%;
height:100%;
font-family:'Fira Code';
padding-left:20px;
display:flex;
justify-content:center;
align-items:center;
position:relative;

h2 {
    font-size:2.2rem;
    text-align:center;
    transition:all 0.2s ease-in-out;
}

.toolsContainer{
    display:flex;
    gap:8px;
    position:absolute;
    bottom:15px;
    font-size:1.3rem;
    visibility:hidden;
    opacity:0;
    transition:all 0.2s ease-in-out;
}

@media (max-width: 768px) {
    /* h2:active{
        color:yellow;
        transition:all 0.1s ease-in-out;
        transform:scale(2.2);
    } */

        h2 {
            color: white;
            font-size: 1.4rem;
        }
    .toolsContainer{
        opacity:1;
        visibility:visible;
    }
}
`

