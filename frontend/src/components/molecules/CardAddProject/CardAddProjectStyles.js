import { styled } from "styled-components";

export const CardAddProjectContainerStyles = styled.form`
width:100%;
max-width:600px;
height:100%;
padding:10px;
font-family:'Fira Code';
margin:0 auto;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:30px;

.titleCard{
    font-size:2.5rem;
    text-align:center;
}

.containerImages{
    img{
        width:100%;
    }
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:10px;
}

button {
    width:150px;
    height:40px;
    border-radius:5px;
    border:1px solid yellow;
    background-color:transparent;
    color:white;
    font-weight:600;
    margin:0 auto;
    cursor: pointer;
}

@media (max-width: 580px) {
    .containerImages{
    img{
        width:100%;
    }

    display:grid;
    grid-template-columns:1fr;
    gap:10px;
}
}
`

export const InfoAddProjectContainerStyles = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
gap:20px;
font-size:1.5rem;

span{
    display: flex;
    flex-direction:column;
}

input{
    height:45px;
    border-radius:5px;
    padding:10px;
}

.addTechContainer{
    display:flex;
    gap:20px;

    ul{
        display:flex;
        gap:10px;
        flex-wrap:wrap;
        
    }

    li{
        border-left:4px solid white;
        padding-left:10px;
        height:30px;
        display:flex;
        gap:15px;
        margin:0.5rem 0;

        p{
            width:24px;
            height:24px;
            cursor: pointer;
            background-color:red;
            text-align:center;
            border-radius:15px;
            display:flex;
            justify-content:center;
            align-items:center;
        }
    }
}

.addTech{
    width:200px;
    height:35px;
    margin:0 auto;
    font-size:1.2rem;
}


::placeholder{
    font-size:1.2rem;
}

`