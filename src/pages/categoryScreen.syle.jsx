import styled from "styled-components";
import CategoryScreen from "./CategoryScreen";

export const StyledCategoryScreen=styled(CategoryScreen)`

    display: grid;
    grid-template-columns: 50% 50%;
    gap: 2px 2px;
    flex-wrap: wrap;
    margin-top:3.3rem;
    a{
        color : black;
        text-decoration: none;
    }

  .square-box>div>span:nth-child(2) span,.singleArticle>span:nth-child(2) span,.singleArticle2>span:nth-child(3) span{
        display:inline-block;

  }
  .square-box>div>span:nth-child(2)>.dollarSign{
    transform:translate(-50%,-20%);
    font-size:12px;

  }
  .square-box{
    flex-shrink:0;
  position: relative;
  height:20rem;
  width:100%;
  display: inline-block;
  background-color:grey;
  overflow: hidden;
}
.square-box>img{
  width:100%;
  height:60%;
  display: block;
}
.square-box>div>span:nth-child(1){

  font-weight:900;
  text-transform: uppercase;
  color : #353131;
  text-align:center;
}
.square-box>div>span:nth-child(2){

  color : #353131;
  text-align:center;
  font-family: _salsa !important;
    display:inline-block;

}
.square-box>div>div{
  color : #353131;
  font-size:14px;
    text-align:center;
    font-weight:bold;
    padding:0 5px;
    border: solid 1px grey;
    border-radius:10px/10px;

}
.square-box>div>span{
  display:block;
}
.square-box>div{
  display:flex;
  color:white;
  background-color:#DADAD6;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  width:100%;
  height:40%;
}
`