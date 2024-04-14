import InfoScreen from "./InfoScreen";
import styled from "styled-components";
import { COLOR, TEXT_COLOR} from "../data/Constantes";

export const StyledInfoScreen=styled(InfoScreen)`

    min-height:80vh;
    min-width:100vw;
    padding:5rem .5rem 0 .5rem;
    background-color:${COLOR.MAIN};
    &>div:nth-child(1){
        font-size:16px;
        text-decoration:underline;
        text-transform:uppercase;
        color:${TEXT_COLOR.MAIN};
        letter-spacing:1px;
        text-align: center;

    }
    &>div:nth-child(1)+div{
        margin-top:.8rem;
        font-size:17px;
        color:${TEXT_COLOR.MAIN};
        line-height:25px;
        text-align:center;
        margin:1.5rem;
    }

`