import styled from "styled-components";
import DetailsPage from "./DetailsPage";
import { COLOR,TEXT_COLOR } from "../data/Constantes";

export const StyledDetailsPage= styled(DetailsPage)`
background-color :${COLOR.MAIN};
padding-bottom: 3rem;
margin-top : 3.3rem;

@media screen and (max-width:745px){
        &>div:nth-child(1){
        display:grid;
        grid-template-columns: 20% 80%;
        min-height: 50vh;
        width: 100%;
        overflow: hidden;
    }
    &>div:nth-child(2){
        display:grid;
        place-content: center;
    }
    &>div:nth-child(1)>div:first-child{
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        gap:5px;
    }
    .imageBox{
        width:100%;
        aspect-ratio:1/1;

    }

    img{
      
        width : 100%;
        height: 100%;
    }

    .activate{
        position : relative;
    }
    .activate::after{
        content :"";
        position:absolute;
        width:100%;
        height: 100%;
        top :0;
        left : 0;
        background-color:rgba(0,0,0,0.5);


    }
    .grid-center{
        border : solid 1px white;
    }


    /* -------------------------- */

    &>div:nth-child(2)>span{
        display : block;
        width:100%;
        text-align: center;
    }
    .price span{        
        display:inline-block;
          }
    .price>.dollarSign{    
    transform:translate(-50%,-2%);
    font-size:16px;
    color: ${TEXT_COLOR.MAIN};

  }
  .dollarSign2{
    font-size:14px;
    font-weight:0;
    line-height:14px;
    transform:translate(-10%,-3%);
    color :  ${TEXT_COLOR.MAIN};

  }
    .promo-1{
    margin-left:10px;
    text-decoration:line-through ${TEXT_COLOR.SECOND} 1px;
    font-size:14px;
    font-weight:100;
    color: ${TEXT_COLOR.SECOND};
  }
  .price{      
    font-size:20px;
      font-family:_salsa !important;
      color: ${TEXT_COLOR.MAIN};
      text-align:center;
  }
  .maincolor{
    color:${TEXT_COLOR.MAIN}
  }
  a{
    color : black;
    text-decoration: none;
  }
    ._button{
    text-align:center;
    padding:.3rem;
  border: solid 1px  ${TEXT_COLOR.MAIN} ;

    border-radius:30px/30px;
    margin:1rem 1rem;

  }
  ._button>a{
    color: ${TEXT_COLOR.MAIN};
  }
  .price+span{
    font-size : 26px;
  }

    
}


`