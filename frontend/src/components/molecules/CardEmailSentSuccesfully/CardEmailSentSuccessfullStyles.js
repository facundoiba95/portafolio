import { styled } from "styled-components";

export const CardEmailSentSuccesfullyContainerStyles = styled.div`
width:100%;
height:100vh;
position:relative;
font-family: 'Red Hat Display';



`

export const CardEmailSuccesfullyStyles = styled.div`
width:100%;
max-width:600px;
height:auto;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
position:absolute;
top:0;
left:50%;
transform: translate(-50%);
gap:30px;
padding:10px;

.iconMessageOk{
    font-size:6rem;
    color: yellowgreen;
}

.iconMessageFailed{
    font-size:6rem;
    color: red;
}

h2{
    font-size:2.5rem;
    text-align:center;
}

span{
    display:flex;
    gap:50px;
}

p,h4{
    text-align:center;
    font-size:1.4rem;
    font-weight:600;
    letter-spacing:1px;
    line-height:35px;
}

h4{
    color:#ffff80;
    cursor: pointer;
}


`