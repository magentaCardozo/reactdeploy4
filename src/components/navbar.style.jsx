import Navbar from "./Navbar";
import styled from "styled-components";

export const StyledNavbar=styled(Navbar)`
&>div:nth-child(1){
        background-color: #F9FF00;

}
    div .first-col{
        padding-left:1.5rem;
    }
    div .second-col{
        padding-left:1.5rem;
    }
    .moreInfo{
        min-height: 50px;
        width:100%;
        background-color: black;
    }
    .moreInfo>div:nth-child(1){
        text-align:center;
        font-size:20px;
        color:white;
    }
    .moreInfo>div:nth-child(2){
        text-align:center;
        font-size:14px;
        color:white;

    }
    .hide{
        display:none;
    }
`