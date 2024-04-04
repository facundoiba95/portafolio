import styled from "styled-components";

export const SectionCertificacionsContainerStyles = styled.div`
width:100%;
max-width:1120px;
height:100%;
display:grid;
grid-template-columns: 1fr 1fr;
align-content:center;
justify-content:center;
gap:20px;
margin:0 auto;
padding:10px;

@media (max-width: 768px) {
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:10px;
}
`