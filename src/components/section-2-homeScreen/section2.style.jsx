import Section2 from "./Section2";
import styled from "styled-components";
import { COLOR } from "../../data/Constantes";
import { TEXT_COLOR } from "../../data/Constantes";


export const StyledSection2=styled(Section2)`
  a{
    color: inherit;
    text-decoration:none;
  }
  --gradient: linear-gradient(

    45deg,#845ec2,#d65db1,#ff6f91,#ff9671,#ffc75f,#f9f871
  );
position : relative;
.list-article{
  display: none;
}

.square{
  display:none;
}

.nav{
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:10000;
    position: sticky;
    top:11rem;
    margin-top:6rem;
    background-color:transparent;
    opacity:1;
    margin-bottom:3px;
    border: solid 1px #E5E9EC;
  }
  .nav>div{


  display : none;
}

  .img1{
    width:35rem;
    height:25rem;
  }
  .img2{
    width:15rem;
    height:15rem;
  }
  .img3{
    width:25rem;
    height:25rem;

  }
  .img4{
    width:25rem;
    height:25rem;
  }
  .img5{
    width:15rem;
    height:15rem;
  }
  .img6{
    width:25rem;
    height:20rem;
  }
.section2-1{

    margin-bottom: 1rem;
    height: 170vh;
    width: 100%;
    display: grid;
    grid-template-areas: 'b1 b1 b2' 'b1 b1 b3' 'b4 b5 b3' 'b4 b6 b6';
    grid-template-columns: 30% 1fr 37%;
    grid-template-rows: 40vh 40vh 1fr  40vh;
    gap: 3px;
}
.textStyle{
  all:unset;
  width:100%;
  text-align:center;
    position:absolute;
    display:block;
    overflow:hidden;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    font-family:audrey;
    font-size:2.3rem;
    font-weight:bolder;
    color:#787373;
    text-shadow: -1px -1px 0 #FFF, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;

  }
.box2-1 {
    grid-area: b1;
    background-color: #F9FF00;
}

.box2-2 {
    grid-area: b2;
    background-color: #E5E9EC;
}

.box2-3 {
    grid-area: b3;
    background-color: #ffff9f;
}

.box2-4 {
    grid-area: b4;
    background-color: #E5E9EC;
}

.box2-5 {
    grid-area: b5;
    background-color: #ffe900;
}

.box2-6 {
    grid-area: b6;
    background-color: #FDD771;
}
@media screen and  (width<=500px){
  /* rrrrrrrrrrrrrrrrrrrrrrrrr */
  .singleArticle2{
    width:100%;
    height:100%;
    display: flex;

    flex-direction: column;
  }
  .singleArticle2> span{
    display: block;
  }

      .singleArticle2>div:nth-child(1){
    display:flex;
    flex-shrink:0;
    justify-content:center;
    align-items:center;
     width:100% !important;
    height:290px !important;
    margin-bottom:10px;
  }
      .singleArticle2>div:nth-child(1)>img{
      display:block;

     
  }
    .singleArticle{
      position:relative;
      box-shadow: 7px 0 5px -5px grey, -7px 0 5px -5px grey;
    width:100%;
    height:100%;
    border-top: transparent;
    display: flex;
    flex-direction: column;
    border-radius:5px;
    padding:5px;
  }

singlearticle>*{
  padding-left:10px;
}

    .singleArticle>span:nth-child(2){
      font-size:40px;
      color: ${TEXT_COLOR.MAIN};
      padding-bottom:.6rem;
  }
  .square-box>div>span:nth-child(2) span,.singleArticle>span:nth-child(2) span,.singleArticle2>span:nth-child(3) span{
        display:inline-block;

  }
  .square-box>div>span:nth-child(2)>.dollarSign{
    transform:translate(-50%,-20%);
    font-size:12px;

  }
  
  .singleArticle>span:nth-child(2)>.dollarSign,.singleArticle2>span:nth-child(3)>.dollarSign{
    transform:translate(-50%,-30%);
    

  }
  .promo-1{
    margin-left:10px;
    text-decoration:line-through ${TEXT_COLOR.SECOND} 1px;
    font-size:14px;
    font-weight:100;
    color: ${TEXT_COLOR.SECOND};
  }
  .dollarSign{
    font-size:13px;
    line-height:14px;
    font-weight:100;
    color :  ${TEXT_COLOR.MAIN};

  }
  .dollarSign2{
    font-size:30px;
    font-weight:0;
    line-height:14px;
    font-weight:900;
    transform:translate(-100%,-30%);
    color :  ${TEXT_COLOR.MAIN};

  }
    .singleArticle2>span:nth-child(3){
      font-size:55px;
      color:  ${TEXT_COLOR.MAIN};
      text-align:center;
  }
    .singleArticle>span:nth-child(3){
      font-size:27px;
      text-transform:uppercase;
      font-weight:900;
      letter-spacing:1px;
      line-height:27px;

  }
    .singleArticle2>span:nth-child(4){
      font-size:40px;
      text-transform:uppercase;
      font-weight:800;
      letter-spacing:1px;
      line-height:25px;
      text-align:center;
      padding-bottom:10px;
  }
    .singleArticle>span:nth-child(4){
        padding-top:2px;
        padding-right: 5px;
      font-size:14px;
      line-height:15px;
      color:  ${TEXT_COLOR.SECOND};
      height:45px;
      overflow-y:scroll;
  }
  .singleArticle2>div:nth-child(2){
    height: 10px;
    width: 100%;
    gap : 0 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .circle{
    border : solid .5px grey;
    height: 100%;
    aspect-ratio:1/1;
    border-radius:50%;
    background-color: transparent;
  }
  .imageOn{
    background-color:grey;
  }
    .singleArticle2>span:nth-child(5){
        padding-top:2px;
        padding-right: 5px;
      font-size:14px;
      line-height:15px;
      color: ${TEXT_COLOR.SECOND};
      height:70px;
      text-align:center;
      overflow-y:scroll;
  }
  ._button{
    text-align:center;
    font-weight:100;
    padding:.3rem;
    border: solid 1px grey;
    border-radius:30px/30px;
    margin:1rem 1rem;
    color: ${TEXT_COLOR.MAIN}
  }
    ._button:active{
        background-color:${COLOR.SECOND} ;
  }
  .singleArticle2>a{
    display: block;
    margin:0px auto;
    color:  ${TEXT_COLOR.MAIN};


  }


    .singleArticle>div:nth-child(1){
    display:flex;
    flex-shrink:0;
    justify-content:center;
    align-items:center;
     margin:0;
     width:300px !important;
    height:300px !important;
  }
    .singleArticle>div:nth-child(1)>img{
      display:block;

     
  }
  
  .imgHover::before{
    content:'';
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    border-radius:3px;
    background-color:rgba(0,0,0,0.4);
    

  }
  .imgHover{
    position: relative;
  }

  .articleSquare{

  }
  .articleBox{
    margin:8px 0;
    min-height:0rem;
    width:100%;
    overflow:hidden;
    background-color:${COLOR.MAIN};

  }

  .listImg{
    /* position: absolute;
    top:45rem;
    left:0; */
    height:10rem;
    width:100%;
    margin:2px 0;
  }
  .listImg>div{
    display:flex;
    overflow-x:scroll;
    height:100%;
    width:100%;

  }
  .articles{
    display:flex;
    gap:0 .7rem;
    overflow-x:scroll;
    /* position: absolute;
    top:0;
    right:0; */
    width:100%;
    padding-top:1rem;
    height:35rem;
    background-color:${COLOR.MAIN};

  }

  .slug{
    /* position: absolute;
    left:0;
    top:35rem; */
    display:block;
    overflow-x:hidden;
    min-height:0rem;
    width:100%;
    background-color:${COLOR.MAIN} ;
  }
  .slug>div:nth-child(1){

  }
  .slug>div:nth-child(2){

    background-color: transparent;
    text-align: left;
    font-size:18px;
    padding:8px;
    color :  ${TEXT_COLOR.MAIN};


  }
  .category{
    margin:0;
    padding:0;
    display:block;
    width:100%;
    /* position: absolute;
    top:0;
    left:0; */
    overflow-x:hidden;
    overflow-y:hidden;
    background-color:transparent;
  }
  .category>div:nth-child(1){

    background-color:grey;
    height:80%;
    width:100%;
    transform: scale(1.3);
    background-color:${COLOR.MAIN};
    border-radius: 0 0 50% 50%/0 0 100% 100%;
    display:none;
  }
   .category>div:nth-child(3){
    display:none;
   }
    .category>div:nth-child(2){
    font-size:22px;
    text-transform:uppercase;
    width:100%;
    text-align: center;
    justify-content:center;
    line-height:25px;
    color :  ${TEXT_COLOR.MAIN};
    background-color:grey;
    padding:0.9% 0;


  }

  /* rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr */
  .nav>div{
    border-left: double 1px ${TEXT_COLOR.SECOND};
    margin: 1rem;

    line-height:25px;
    font-size : 16px;
    font-weight:0;
    padding-left:0.5rem;
    text-align:justify;
  display : block;
  color :  ${TEXT_COLOR.MAIN};
}
 
  .section2-1{
  height: unset;
  min-height:100%;
  width: 100%;
  display: grid;
  margin-top:0px;
  grid-template-columns:repeat(1,100%);
  /* grid-template-rows:130.4rem 130.4rem 130.4rem ; */
  grid-template-rows:unset ;
  
  grid-template-areas:unset;
  gap:0px;
}
.nav{
  margin-top:4rem;

}
.section2-1+div{
  height:1rem;
  width:100%;
  background-color:${COLOR.MAIN};
}
.square{
  /* position: absolute;
  top:90rem;
  left:0; */
  min-height:0rem;
  gap: 0px 1px;
  overflow:hidden;
  display:grid;
  grid-template-columns:50% 50%;
  grid-template-rows:unset;
}
.square-box{

  position: relative;
  height:17rem;
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
  margin:4px 0;
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
.textStyle{
  all: unset;
  display: none;
  }
  .flexDisplay,.flexDisplay::before,.flexDisplay::after{
    all: unset;
    display:block;

  }

.img{
  display:none;
}


.list-article{

  display:block;
  position:relative;
  width:100%;
  min-height:100%;
  /* height:100%; */
  overflow-y:hidden;
  background-color:${COLOR.MAIN};
  padding:0;
  margin:0;
}
  .box2-1 {
    grid-area: unset;
    background-color: ${COLOR.MAIN};
}

.box2-2 {
    grid-area: unset;
    background-color: ${COLOR.MAIN};
}

.box2-3 {
    grid-area: unset;
    background-color: ${COLOR.MAIN};
}

.box2-4 {
    grid-area: unset;
    background-color: ${COLOR.MAIN};
}

.box2-5 {
    grid-area: unset;
    background-color: ${COLOR.MAIN};
}

.box2-6 {
    grid-area: unset;
    background-color: ${COLOR.MAIN};
}
}
@media screen and ((width>500px) and (width<=900px)) {
  .nav{
    display: flex;
    align-items:center;
    justify-content: center;
  }
  .nav>div>span:nth-child(1){
    display:inline-block;
  }
  .nav>div>span:nth-child(2){
    display:inline-block;
    margin-left:8rem;
  }
  .nav>div>span:nth-child(3){
    display:inline-block;
    margin-left:8rem;
  }
  .box2-1 {
    grid-area: unset;
    background-color: #F9FF00;
}

.box2-2 {
    grid-area: unset;
    background-color: #bfccd3;
}

.box2-3 {
    grid-area: unset;
    background-color: #ffff9f;
}

.box2-4 {
    grid-area: unset;
    background-color: #E5E9EC;
}

.box2-5 {
    grid-area: unset;
    background-color: #ffe900;
}

.box2-6 {
    grid-area: unset;
    background-color: #FDD771;
}
.nav{
    width:100%;
    display:flex;
    margin-top:6rem;
    height:2.4rem;
  }
.textStyle{
    position:Absolute;
    font-family:audrey;
    font-size:1.3rem;
    font-weight:bolder;
    color:black;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;

  }
    .section2-1{
    margin-bottom: 1rem;
    width: 100%;
    height:unset;
    grid-template-rows: unset;
    display: grid;
    grid-template-areas: unset;
    grid-template-columns: repeat(2, 50%);
    gap: 1px;
}
.flexDisplay{
  height:20rem;
  min-height:15rem;
}

  .img1{
    width:15rem;
    height:10rem;
  }
  .img2{
    width:8rem;
    height:8rem;
  }
  .img3{
    width:9rem;
    height:9rem;

  }
  .img4{
    width:10rem;
    height:10rem;
  }
  .img5{
    width:5rem;
    height:5rem;
  }
  .img6{
    width:15rem;
    height:10rem;
  }
}


@media screen and ((width<=1000px) and (width>900px)) {
    .section2-1{
    margin-bottom: 1rem;
    height: 130vh;
    width: 100%;
    display: grid;
    grid-template-areas: 'b1 b1 b2' 'b1 b1 b3' 'b4 b5 b3' 'b4 b6 b6';
    grid-template-columns: 30% 1fr 37%;
    grid-template-rows: 37vh 30vh 1fr  30vh;
    gap: 2px;
}
.textStyle{
  font-size:1.5rem;
  color : black;
  text-shadow:unset;
}
.nav{
}
  .img1{
    width:20rem;
    height:10rem;
  }
  .img2{
    width:11rem;
    height:11rem;
  }
  .img3{
    width:15rem;
    height:15rem;

  }
  .img4{
    width:15rem;
    height:15rem;
  }
  .img5{
    width:10rem;
    height:10rem;
  }
  .img6{
    width:18rem;
    height:13rem;
  }
    
}
`