import { styled } from "styled-components";

export const FooterContainerStyles = styled.footer`
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
height:400px;
padding:20px;
font-family:'Red Hat Display';
font-size:1.4rem;
gap:10px;
a{
    color:yellow;
}
.imgContainer{
    img{
        width:190px;
        height:190px;
        border-radius:50%;
    }
}

.infoProfileContainer{
    display:flex;
    flex-direction:column;
    gap: 5px;
}

.iconsContainer{
    display:flex;
    justify-content:flex-start;
    align-items:center;
    gap:10px;
}

.icon{
    font-weight:600;
    font-size:2rem;
}

.contactMe {
    p{
      width:100%;
      max-width:420px;
    }
}

@media (max-width: 768px) {
    flex-direction:column;
    text-align:center;
    gap:30px;
    padding:50px 0 100px 0;
    height:100%;
    

    .iconsContainer{
    justify-content:center;
    }
}
`