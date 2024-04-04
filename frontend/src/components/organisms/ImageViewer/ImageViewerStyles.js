import { styled } from "styled-components";

export const ImageViewerContainerStyles = styled.div`
width:100%;
height:100%;
max-height:800px;
display:${props => props.isOpenViewer ? 'flex' : 'none'};
backdrop-filter:blur(10px);
position:absolute;
top: 100px;
left:50%;
transform: translate(-50%);
z-index: 1000;
overflow:hidden;


.closeViewerContainer{
    font-family:'Red Hat Display';
    position:absolute;
    right:20px;
    top:20px;
    color:black;
    display:flex;
    gap:10px;
    justify-content:center;
    align-items:center;
    padding:10px;
    border-radius:5px;
    background-color:yellow;
    cursor: pointer;
}

.iconClose{
    font-size:30px;
}


`

export const ContentImageViewerStyles = styled.img`
width:80%;
height:100%;
margin:0 auto;
overflow:hidden;
object-fit:contain;

@media (max-width: 580px) {
    width:90%;
}
`