import { styled } from "styled-components";

export const HowCreatePortafolioContainerStyles = styled.section`
width:100%;
height:100%;
max-width:1000px;
margin:0 auto;
font-family: 'Fira Code';
display:flex;
flex-direction:column;
gap:30px;
padding:5px;

@media (max-width: 580px) {
    text-align:center;
}
`

export const TechStackListStyles = styled.ul`
width:100%;
max-width:900px;
height:100%;
display:grid;
grid-template-columns: 1fr 1fr 1fr;
justify-items:center;
align-items:center;
margin:0 auto;
gap:30px;

@media (max-width: 580px) {
    grid-template-columns: 1fr 1fr;
}
`
export const TechStackItemStyles = styled.li`
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:10px;
text-align:center;

.iconTech{
    font-size:3rem;
    color:#93999E;
}

h3{
    color:#ffffff;
}

@media (max-width: 580px) {
h3{
    padding:5px;
}
}
`
export const ContentHowCreatePortafolioContainerStyles = styled.div`
width:100%;
height:100%;
font-family:'Montserrat';
font-size:1.3rem;
display:flex;
flex-direction:column;
gap:10px;


ul{
    display:flex;
    flex-direction:column;
    gap:30px;
    letter-spacing:1px;

    li{
        width:100%;
        padding-left:20px;
        color:#bababa;
    }
}

@media (max-width: 580px) {
    text-align:left;
}
`