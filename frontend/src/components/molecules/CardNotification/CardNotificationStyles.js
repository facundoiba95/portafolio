import { styled } from "styled-components";

export const CardNotificationContainerStyles = styled.div`
width:100%;
height:100vh;
display:flex;
flex-direction:column;
align-items:center;
font-family:'Fira Code';
font-size:1.5rem;

.iconCheck{
    color:green;
    font-size:8rem;
}

.iconError{
    color:red;
    font-size:8rem;
}
`