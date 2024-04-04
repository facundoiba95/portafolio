import { styled } from "styled-components";

export const AdminPanelEmptyContainerStyles = styled.div`
width:100%;
height:100%;
margin:0 auto;
font-family:'Fira Code';
display:flex;
justify-content:space-evenly;
align-items:center;
flex-direction:column;

span{
    display:flex;
    flex-direction:column;
    gap:20px;
}

h1{
    font-size:2.5rem;
    text-align:center;
    text-transform:uppercase;
}

h2{
    text-align:center;
    font-size:2rem;
    font-weight:300;

}

.iconAdmin{
    font-size:7rem;
}

@media (max-width: 580px) {
    h1{
        font-size:2rem;
    }

    h2{
        font-size:1.5rem;
    }
}
`