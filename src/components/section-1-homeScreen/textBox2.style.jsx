import styled from "styled-components";
import TextBox2 from "./TextBox2";
import { COLOR } from "../../data/Constantes";
import { TEXT_COLOR } from "../../data/Constantes";

export const StyledTextBox2 = styled(TextBox2)`
    all: unset;
    position:absolute;
    top:-7%;
    left:5%;
    display:block;
    border-top-right-radius:45%;
    border-bottom-left-radius:45%;
    height:70%;
    width:100%;
    margin-top:1rem;
    background-color:${COLOR.FIFTH};

h2{
    margin-left:5%;
    margin-top:12%;
    font-size:5rem;
    color : black;
    font-weight:800;
    text-align:left;
    letter-spacing:1px;
    font-weight:100;
}
h2 span{
    color:black;
}
h3{
    margin-top:12%;
    margin-left:5%;
    width:70%;
    font-size:20px;
    text-align:center;
    letter-spacing:1px;
    color:${TEXT_COLOR.FOURTH};
}
@media screen and  ((width>=500px) and (width<950px)){
    h3{
    text-align:left;
    font-size:25px;

    }
}

@media screen and  ((width>=950px) and (width<1375px)){
    h3{
    text-align:left;
    font-size:28px;
    }
}
@media screen and  ((width>=800px) and (width<950px)){
    h2{
        font-size:3rem;
    }
}
@media screen and  (max-width:799px){
    left:0%;
        top:-13%;

    h2{
    font-size:3rem;
    font-weight:500;
    text-transform: uppercase;

    }
        h3{
    font-size:30px;
    width:90%;
    font-weight:400;


    }
}

`