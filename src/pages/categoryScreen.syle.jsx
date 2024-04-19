import styled from "styled-components";
import CategoryScreen from "./CategoryScreen";
import { COLOR,TEXT_COLOR } from "../data/Constantes";

export const StyledCategoryScreen=styled(CategoryScreen)`

  width:100%;

    display: grid;
    grid-template-columns: 50% 50%;
    gap: 2px 2px;

  overflow:hidden;

    background-color:${COLOR.MAIN};

    a{
        color : ${TEXT_COLOR.MAIN};
        text-decoration: none;
    }
      .promo-1{
    margin-left:10px;
    text-decoration:line-through ${TEXT_COLOR.SECOND} 1px;
    font-size:14px;
    font-weight:100;
    color: ${TEXT_COLOR.SECOND};
  }


  .square-box>div>span:nth-child(2) span,.singleArticle>span:nth-child(2) span,.singleArticle2>span:nth-child(3) span{
        display:inline-block;

  }
  .square-box>div>span:nth-child(1) .dollarSign{
    display:inline-block;
    transform: translate(-40%,0%);
    font-size:11px;

  }
  .square-box .promo-1{
    margin-left:15px;
    text-decoration:line-through ${TEXT_COLOR.SECOND} .5px;
    font-size:11px;
    color: ${TEXT_COLOR.SECOND};
  }
  .square-box{

  position: relative;
  min-height:0rem;
  width:100%;
  background-color:${COLOR.MAIN};
  overflow: hidden;
}
.square-box img{
  display:block;
  width:100%;
  aspect-ratio:1/1;
  display: block;
  margin:4px 0;
  object-fit:fill;
}
.square-box>div>span:nth-child(2){

  font-weight:600;
  text-transform: uppercase;
  font-size:11px;
  line-height:11px;
  color :  ${TEXT_COLOR.SECOND};
}
.square-box>div>span:nth-child(1){
  margin-top:10px;
  color :  ${TEXT_COLOR.SECOND};
  
    display:inline-block;

}
.squarePrice{
  font-size:14px;
  line-height:14px;
  color:${TEXT_COLOR.MAIN}
}
.square-box>div>div{
  color :  ${TEXT_COLOR.FOURTH};
  margin-top: 8px;

  text-decoration:underline;
  font-size:14px;
  color:${TEXT_COLOR.MAIN};
    font-weight:600;
    /* padding:0 5px; */
    /* border: solid 1px grey;
    border-radius:10px/10px; */

}
.square-box>div>span{
  display:block;
}
.square-box>div{
  display:flex;
  line-height:20px;
  padding-left:.4rem;
  color: ${TEXT_COLOR.SECOND};
  background-color:${COLOR.MAIN};
  flex-direction: column;
  /* align-items:center; */
  justify-content: center;
  width:100%;
  height:25%;
}

`