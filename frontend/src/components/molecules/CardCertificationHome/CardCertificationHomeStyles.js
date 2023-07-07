import styled from "styled-components";

export const CardCertificationHomeContainerStyle = styled.div`
width:100%;
max-width:650px;
height:270px;
border:1px solid gray;
font-family:"Fira Code";
position:relative;
font-weight:600;
`

export const CardCertificationTitleStyle = styled.span`
width:auto;
display:flex;
gap:10px;
position:absolute;
top:70px;
left:60px;

.const{
    color:#FC69FF;
}

.titleCertification{
    color:#F3D81C;
}

.equal{
    color:#1CE5F3;
}

.openKey{
    color:#FC69FF;
}

@media (max-width: 580px) {
    top:70px;
    left:30px;
}

@media (max-width: 400px) {
    left:5px;
}
`

export const CardCertificationContentLinesStyles = styled.span`
width:auto;
height:100%;
position:absolute;
top:90px;
left:95px;
display:flex;
flex-direction:column;
gap:5px;

.keyValue{
    display:flex;
    gap:10px;
}

.keyObject{
    color:#FF374F;
}

.year{
    color: #FFAB05;
}

.valueObject{
    color: #2EDF37;
    width: 100%;
    max-width:300px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

a:hover{
    cursor: pointer;
}

.closeKey{
    color:#FC69FF;
    position:absolute;
    left:-35px;
}

@media (max-width: 580px) {
    top:100px;
    left:50px;

    .valueObject{
    max-width:150px;
    }

    .closeKey{
    left:-25px;
    }
}

@media (max-width: 400px) {
    top:100px;
    left:35px;

    .valueObject{
    max-width:120px;
    }
}
`
