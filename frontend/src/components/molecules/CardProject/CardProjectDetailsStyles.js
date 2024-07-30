import { styled } from "styled-components";

export const CardProjectDetailsContainerStyles = styled.div`
width:100%;
height:auto;
font-family:'Fira Code';
font-weight:600;
display:flex;


.sectionOneCardDetail{
    width:100%;
    display:flex;
    flex-direction:column;
    gap:20px;
}

.itemProject{
    width:100%;
    max-width:500px;
    display:flex;
    gap:20px;
    align-items:center;

    h3{
        font-size:1.2rem;
        padding-right:20px;
        border-right: 4px solid white;
        width:100%;
        max-width:240px;
    }
    a{
        color:#93999E;
        font-size:1.1rem;
        width:100%;
        max-width:200px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding-left:5px;
    }
    a:hover{
        color:yellow;
    }

}


.descriptionProject{
    display:flex;
    flex-direction:column;
    gap:3px;

    p{
        width:100%;
        max-width:600px;
        font-size:1.1rem;
        font-weight:600;
        color:#93999E;
        line-height:30px;
    }
}

.sectionTwoCardDetail{
        width:100%;
        display:flex;
        flex-direction:column;
        gap:30px;


        h2{
            width:200px;
        }
}
.containerImgProject{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:20px;
        height:100%;
       
        
    img{
        transition:all 0.2s ease-in-out;
        width:100%;
        max-width:500px;
        height:350px;
        border-radius: 10px;
        object-fit: cover;
        cursor: pointer;
    }
}

@media (max-width: 1100px) {
    .descriptionProject{
    p{
        max-width:450px;
    }
}
}

@media (max-width: 768px) {
    flex-direction:column;

    .sectionOneCardDetail {
        height: auto;
    }

    .descriptionProject{
    p{
        max-width:600px;
    }
}
    .sectionTwoCardDetail{
        margin-top:33rem;
    }
}


`

export const TitleProjectCardDetailStyle = styled.span`
font-family:'Fira Code';
display:flex;
align-items:center;
gap:15px;
height:40px;

p{
    width:100%;
    max-width:240px;
    font-size:1.1rem;
    padding-right:20px;
    border-right: 4px solid white;
}

h3{
    text-align:center;
    padding-left:10px;
    color:#FC69FF;
}


@media (max-width: 580px) {
    
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    gap:5px;
    width:100%;
    height:auto;

    p{
        display:none;
        text-align:center;
        padding:0;
        border:none;
        text-align:center;
    }

    h2{
        padding:0;
    }
}
`

export const TechStackContainerStyles = styled.span`
font-family:'Fira Code';
position:relative;
top:0px;
left:0px;
display:flex;
align-items:center;
gap:15px;
height:40px;

p{
    font-size:1.2rem;
    padding-right:20px;
}

h2{
    text-align:center;
    padding-left:10px;
}

@media (max-width: 768px) {
    height: auto;
    p{
        text-align:center;
        padding:0;
        border:none;
        text-align:center;
    }

    h2{
        padding:0;
    } 
}
`