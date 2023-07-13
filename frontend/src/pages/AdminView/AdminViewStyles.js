import { styled } from "styled-components";

export const AdminViewContainerStyles = styled.section`
width:100%;
height:100%;
display:grid;
grid-template-columns:${props => props.isOpenMenuAdmin ? '50px 1fr' : '1fr 1fr'};
transition:all 0.2s ease-in-out;

@media (max-width: 580px) {
    grid-template-columns:${props => props.isOpenMenuAdmin ? '50px 1fr' : '1fr'};
}
`