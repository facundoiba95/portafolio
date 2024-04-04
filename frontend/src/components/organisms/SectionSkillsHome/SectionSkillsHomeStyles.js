import styled from "styled-components";


export const ListSkillsHomeIconsStyles = styled.ul`
width:100%;
height:100%;
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr;
justify-content:center;
align-items:center;

@media (max-width: 768px) {
    grid-template-columns:1fr 1fr 1fr;
}

@media (max-width: 520px) {
    grid-template-columns:1fr 1fr;
}
`

export const IconItemSkillsStyles = styled.li`
width:100%;
height:200px;
font-family:'Fira Code';
font-weight:600;
display:flex;
flex-direction:column-reverse;
justify-content:center;
align-items:center;
gap:20px;
text-align:center;

p{
    font-size:1.5rem;
    height:50px;
}

.iconSkill{
    width:80px;
    height:80px;
    color:#93999E;
}
`