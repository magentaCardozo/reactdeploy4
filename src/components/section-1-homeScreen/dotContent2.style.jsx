import styled from "styled-components";
import DotContent2 from "./DotContent2";

export const StyledDotContent2=styled(DotContent2)`

        position:absolute;
        left:4%;
        top:-25%;
        width:100%;
        height:100%;
        overflow: hidden;
    
    .style2{
        position:absolute;
        left:22rem;
        top:2rem;
        display:block;

    }
    .style3{
        position:absolute;
        left:28.5rem;
        display:block;
        top:10rem;

    }
    .style4{
        position:absolute;
        left:-5rem;
        display:block;
        top:26.5rem;

    }
    .style5{
        position:absolute;
        left:13rem;
        display:block;
        top:14rem;

    }
@media screen and ((width >=410px) and (width< 1130px)) {
            top:-0%;

    .style2{
        z-index:10;

    }
    .style3{
        position:absolute;
        left:28.5rem;
        display:block;
        top:10rem;

    }
}
@media screen and ((width >=200px) and (width< 410px)) {

    .style2{
        z-index:10;

    }
    .style3{
        position:absolute;
        left:28.5rem;
        display:block;
        top:10rem;

    }
        left:4%;
        top:0%;
}

`