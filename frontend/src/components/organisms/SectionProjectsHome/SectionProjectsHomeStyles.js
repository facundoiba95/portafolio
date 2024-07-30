import styled from 'styled-components';

export const SectionProjectsHomeContainerStyles = styled.div`
width:100%;
max-width:1320px;
height:100%;
margin:3rem auto;
`

export const WrapperCardProjectsStyles = styled.div`
width:100%;
display:grid;
grid-template-columns: 1fr 1fr;
justify-items:center;
align-items:center;
gap:20px;
padding:10px;

@media (max-width: 768px) {
    grid-template-columns:1fr;
    gap:0px;
}
`