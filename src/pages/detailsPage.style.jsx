import styled from "styled-components";
import DetailsPage from "./DetailsPage";

export const StyledDetailsPage= styled(DetailsPage)`
background-color :#DADAD6;
padding-bottom: 3rem;
margin-top : 3.3rem;

@media screen and (max-width:745px){
        &>div:nth-child(1){
        display:grid;
        grid-template-columns: 20% 80%;
        height: 50vh;
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
        aspect-ratio:1/1;
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
        display: grid;
        place-content: center;
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
    transform:translate(-50%,-30%);
  }
  .price{      
    font-size:25px;
      font-family:_salsa !important;
      color: black;
      text-align:center;
  }
  a{
    color : black;
    text-decoration: none;
  }
    ._button{
    text-align:center;
    font-weight:bold;
    padding:.3rem;
    border: solid 1px grey;
    border-radius:30px/30px;
    margin:1rem 1rem;
  }
  .price+span{
    font-size : 26px;
  }

    
}


`