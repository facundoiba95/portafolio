import styled from "styled-components";

export const ContainerModalStyle = styled.div`
width:100%;
height:100vh;
display:${props => props.isOpenModal ? 'flex' : 'none'};
flex-direction:column;
justify-content:center;
align-items:center;
position:absolute;
top:100px;
backdrop-filter:blur(10px);
`
export const ModalAleatoryContentContainerStyles = styled.div`
width:100%;
max-width:500px;
height:350px;
background-color:#14161a;
font-family:'Fira Code';
position:relative;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;

.iconClose{
    position:absolute;
    top:10px;
    right:10px;
    font-size:2rem;
    cursor: pointer;
}

span{
    display:flex;
    gap:20px;
}
button{
width:150px;
height:40px;
border-radius:5px;
border:none;
font-size:1.2rem;
font-weight:600;
font-family:'Fira Code';
cursor: pointer;
}

.accept{
    background-color:#5AE24E;
}

.decline{
    background-color:#E84E4E;
    color:white;
}
`

export const TitleModalStyle = styled.h2`
width:100%;
font-size: 1.5rem;
text-align:center;
`