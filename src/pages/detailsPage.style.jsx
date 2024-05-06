import styled from "styled-components";
import DetailsPage from "./DetailsPage";
import { COLOR,TEXT_COLOR } from "../data/Constantes";

export const StyledDetailsPage= styled(DetailsPage)`
background-color :${COLOR.MAIN};
padding-bottom: 3rem;
padding-top : 3.4rem;

@media screen and (max-width:745px){
        &>div:nth-child(1){
        height: 50vh;
        width: 100%;
        flex-direction:row;
        display:flex;
        flex-wrap:nowrap;
          overflow-x: scroll;
        align-items:left;
        gap:5px;
        padding: 30px 20px;
    }
    .imageBox{
      flex-shrink:0 ;
      flex-grow:1;
      display: block;
        height:100% ;
        aspect-ratio:1/1;
        border: solid ${COLOR.FIFTH} 1px;
    }
    img{
      
        width : 100%;
        height: 100%;
        object-fit:fill;
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
        padding:0 1rem;
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
    padding:0 .3rem;
  border: solid 1px  ${COLOR.SEVENTH} ;

    border-radius:30px/30px;
    margin:1rem 1rem;

  }
  ._button>a{
    font-size:14px;
    line-height:14px;
    color: ${TEXT_COLOR.MAIN};
    font-weight:900;
  }
  .price+span{
    font-size : 26px;
  }
 
  .span1{
    display:block;
    position: relative;
    margin-bottom:5px;
  }
  .span1>span{
      display: inline-block;
      margin-left:18px;
      font-weight:900;
      color: green;

  }
  .span1>span>span{
    position: absolute;
    bottom:0;
    left:20%;
      font-weight:900;
      color: green;
  }
  .span1>span>span *{

      font-weight:900;
      color: green;
  }


    
}


`