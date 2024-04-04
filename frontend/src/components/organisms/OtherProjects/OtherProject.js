import styled from 'styled-components';

export const OtherProjectsContainerStyles = styled.section`
width:100%;
height:auto;
padding:10px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

::-webkit-scrollbar{
    height:10px;
}

::-webkit-scrollbar-track {
  background: #93999E;        
}

::-webkit-scrollbar-thumb {
  background-color: white;    
}
`

export const OtherProjectListStyles = styled.ul`
width:100%;
height:100%;
display:flex;
gap:20px;
padding:10px 10px 20px 10px;
overflow-x:scroll;
`
export const TitleOtherProjectsStyles = styled.p`
width:100%;
font-size:2rem;
font-family:'Red Hat Display';
font-weight:600;
padding:10px 10px 10px 30px;
color:white;
border-left: 5px solid white;
margin-bottom:1rem;
`
