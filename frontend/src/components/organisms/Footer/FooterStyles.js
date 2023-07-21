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

h4{
    font-size:1.2rem;
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
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:30px;

    small{
        color:#fffff0;
        font-size:1.3rem;
        font-weight:600;
        cursor: pointer;
    }

    span{
        display:flex;
        width:100%;
        max-width:420px;
        gap:0;
        align-items:flex-start;
        flex-wrap:wrap;
    }
 

    b{
        color:#fffff0;
        cursor: pointer;
    }
    b:hover, small:hover{
        color:yellow;
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

    .contactMe{
      span{
        justify-content:center;
      }
    }
}
`