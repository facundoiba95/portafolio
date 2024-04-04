import styled from "styled-components";

export const SectionTopContainerStyles = styled.section`
width:100%;
height:650px;
display:flex;
justify-content:center;
align-items:center;
position:relative;

@media (max-width: 768px) {
    margin-top:10rem;
    height:580px;
}

@media (max-width: 580px) {
    margin-top:30rem;
    height:580px;
}
`

export const SectionTopContentOneStyles = styled.div`
width:100%;
height:100%;
font-family:'Montserrat';

.saludo{
    max-width:780px;
    font-size:4.5rem;
    position: absolute;
    top:40px;
    left:40px;
    line-height:6.5rem;
    font-weight:100;

    b{
        color:yellow;
    }
}

.profession{
    position:absolute;
    top:400px;
    left:40px;
    display:flex;
    flex-direction:column;
    gap:10px;
    font-family:'Fira Code';
    font-weight:600;

    h3{
        font-size:1.5rem;
    }

    h4{
        font-size: 1.2rem;
        color:#93999E;
    }
}

@media (max-width: 1100px) {
    .saludo{
        font-size:2.3rem;
        max-width:350px;
        line-height:3.5rem;
        top:120px;
    }
}

@media (max-width: 768px) {
    .saludo{
        top:-6rem;
        left:25px;
        max-width:600px;
        font-size:3.5rem;
        line-height:5rem;
    }
    .profession{
        top:21rem;
        left:30px;
        max-width:350px;
    }
}

@media (max-width:580px) {
.saludo{
    max-width:340px;
    font-size:2.9rem;
    line-height:5rem;
    top:-25rem;
    left:20px;
    line-height:4rem;
    text-align:left;
}

.profession{
    position:absolute;
    top:28rem;
    left:30px;
}
}
`


export const SectionTopContentTwoStyles = styled.div`
width:100%;
height:100%;

img{
    width:100%;
    height:100%;
    object-fit:contain;
}

@media (max-width: 768px) {
    display:flex;
    justify-content:flex-end;
    flex-direction:column;
    img{
        width:100%;
        height:400px;
    }
}

@media (max-width: 580px) {
    display:block;
    img{
        position:absolute;
        left:0;
        transform:translate(6%);
        width:350px;
        height:400px;
    }
}

@media (max-width: 410px) {
    img{
        transform:translate(1%);
    }
}
`