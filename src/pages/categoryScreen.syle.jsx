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
.square-box{

  position: relative;
  height:  17rem;

  width:100%;
  background-color:${COLOR.MAIN};
  overflow: hidden;
}
.square-box::after{
  content:'Promotion';
  font-size:16px;
  text-align: center;
  padding-bottom:2px 0px;
  width:100%;
  height: 25px;
  top:0;
  position: absolute;
  left:0;
  background-color:${COLOR.FOURTH} ;
  transform: rotate(-45deg) translateX(-30%) translateY(-2rem);
}
.square-box img{
  width:100%;
  height:60%;
  display: block;
}
.square-box>div>span:nth-child(1){

  font-weight:100;
  text-transform: uppercase;
  color :  ${TEXT_COLOR.SECOND};
}
.square-box>div>span:nth-child(2){

  color :  ${TEXT_COLOR.SECOND};
  
    display:inline-block;

}
.squarePrice{
  font-size:16px;
  color:${TEXT_COLOR.MAIN}
}
.squarePrice{
  font-size:16px;
  color:${TEXT_COLOR.MAIN}
}
  .dollarSign{
    font-size:13px;
    line-height:14px;
    font-weight:100;
    color :  ${TEXT_COLOR.MAIN};

  }
.square-box>div>div{
  color :  ${TEXT_COLOR.FOURTH};
  text-decoration:underline;
  font-size:14px;
  color:${TEXT_COLOR.MAIN};
    font-weight:100;
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