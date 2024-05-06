import Section2 from "./Section2";
import styled from "styled-components";
import { COLOR } from "../../data/Constantes";
import { TEXT_COLOR } from "../../data/Constantes";


export const StyledSection2=styled(Section2)`
  Link{
    display:block;
    height:100%;
    width:100%;

  }
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

     width:100% !important;
    height:100vw !important;
    margin-bottom:1rem;
  }

    .singleArticle{
      position:relative;
      box-shadow: 7px 0 5px -5px grey, -7px 0 5px -5px grey;
    height:100%;
    width: 90%;
    flex-shrink:0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    
    border-radius:5px;
    padding:5px;
  }

.singlearticle>*{
  padding-left:10px;
  /* max-width:300px !important;
  border: solid red; */
}


    .singleArticle>span:nth-child(2){
      font-size:40px;
      color: ${TEXT_COLOR.MAIN};
      padding-bottom:.1rem;
  }
  .square-box>div>span:nth-child(2) span,.singleArticle>span:nth-child(2) span,.singleArticle2>span:nth-child(3) span{
        display:inline-block;

  }
  .square-box>div>span:nth-child(1) .dollarSign{
    display:inline-block;
    transform: translate(-40%,0%);
    font-size:11px;

  }
  
  .singleArticle>span:nth-child(2)>.dollarSign,.singleArticle2>span:nth-child(3)>.dollarSign{
    display: inline-block;
    transform:translate(-130%,-20%);
    

  }
  .promo-1{
    margin-left:10px;
    text-decoration:line-through ${TEXT_COLOR.SECOND} 1px;
    font-size:14px;
    font-weight:100;
    color: ${TEXT_COLOR.SECOND};
  }
  .square-box .promo-1{
    margin-left:15px;
    text-decoration:line-through ${TEXT_COLOR.SECOND} .5px;
    font-size:11px;
    color: ${TEXT_COLOR.SECOND};
  }
  .dollarSign{
    font-size:13px;
    line-height:14px;
    font-weight:100;
    color :  ${TEXT_COLOR.MAIN};

  }
  .dollarSign2{
    font-size:15px;
    font-weight:0;
    transform:translate(-70%,-10%);
    color :  ${TEXT_COLOR.MAIN};

  }
    .singleArticle2>span:nth-child(3){
      font-size:30px;
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
      font-size:25px;
      text-transform:uppercase;
      font-weight:600;
      letter-spacing:1px;
      line-height:25px;
      text-align:center;
      padding-bottom:5px;
  }
    .singleArticle>span:nth-child(4){
      min-height:40px;
      justify-content:center;
      font-size:14px;
      line-height:15px;
      color:  ${TEXT_COLOR.SECOND};
  }
  .singleArticle2>div:nth-child(2){
    height: 10px;
    width: 100%;
    gap : 0 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom:3px;
  }
  .circle{
    border : solid .5px ${COLOR.FIFTH};
    height: 100%;
    aspect-ratio:1/1;
    border-radius:50%;
    background-color: transparent;
  }
  .imageOn{
    background-color:${COLOR.FIFTH};
  }
    .singleArticle2>span:nth-child(5){
        padding-right: 5px;
      font-size:14px;
      line-height:15px;
      color: ${TEXT_COLOR.SECOND};
      min-height:40px;
      text-align:center;
      margin-bottom:10px;
  }
  ._button a{
    position: relative;
    margin-left: 1rem;
  }
  ._button span{
    position:absolute;
    left:-1.5rem;
    top: 0;
    color: green;
  }
  ._button{
    text-align:center;
    font-weight:600;
    padding:.3rem;
    width:100%;
    max-width:100%;
    border: solid 1px ${COLOR.SEVENTH};
    border-radius:30px/30px;
    margin:0 .1rem;
    color: ${TEXT_COLOR.MAIN}
  }
    ._button:active{
        background-color:${COLOR.SEVENTH} ;
  }
  .link-box a{
    position : relative;
    margin-left :1rem;

  }
  .link-box span{
    position : absolute;
    left :-1rem;
    top: 0;
    color:green;
  }
  .singleArticle2>a{
    display: block;
    margin:0px auto;
    color:  ${TEXT_COLOR.MAIN};


  }


    .singleArticle>div:nth-child(1){
     margin:0;
     width:300px !important;
    height:300px !important;
  }
    .singleArticle>div:nth-child(1) div{
      height:100%;
      width:100%;

  }
    .singleArticle>div:nth-child(1) div img{
      height:100%;
      width:100%;
      object-fit:fill;
      
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
    margin-bottom:10px;
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
    margin:0 0 10px 0;
    padding:0 5px;
  }
  .listImg>div{
    display:flex;
    overflow-x:scroll;
    gap:2px;
    height:100%;
    width:100%;
  }
  .listImg>div>div{
    flex-shrink:0;
    height:100%;
    border-radius:10px/10px;
    overflow:hidden;
    aspect-ratio:1/1;
  }
  .listImg>div>div img{
    width:100%;
    height:100%;
    object-fit:fill;
  }
  .listImg .enSavoirPlus{
    /* #008080 */
    background-color:#FFD1DC;

  }
  .listImg .enSavoirPlus  div{
    display: grid;
    place-items: center;
    height:100%;
    width:100%;
    color: ${TEXT_COLOR.MAIN};
    font-size:18px;
    padding:1rem;
    font-weight:600;
    text-align:center;
    line-height:18px;
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
    min-height:33rem;
    background-color:${COLOR.MAIN};

  }

  .slug{
    /* position: absolute;
    left:0;
    top:35rem; */
    display:block;
    min-height:0rem;
    width:100%;
    background-color:${COLOR.MAIN} ;
  }
  .slug>div:nth-child(1){

  }
  .slug>div:nth-child(2){

    background-color: transparent;
    text-align: left;
    font-size:16px;
    padding:10px 15px;
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

    background-color:transparent;
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
    font-size:20px;
    text-transform:uppercase;
    width:100%;
    text-align: center;
    justify-content:center;
    line-height:25px;
    color :  ${TEXT_COLOR.FIFTH} !important;
    background-color:transparent;
    padding:0.9% 0;
    font-weight:0;


  }

  /* rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr */
  .nav>div{
    border-left: double 1px ${TEXT_COLOR.SECOND};
    margin: 0rem 1rem;

    line-height:25px;
    font-size : 16px;
    font-weight:600;
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
  margin-top:1rem;

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
  border-bottom: solid .5px ${COLOR.FIFTH};
  position: relative;
  min-height:0rem;
  width:100%;
  background-color:${COLOR.MAIN};
  overflow: hidden;
}
.promotion::after{
  content:'Promotion';
  font-size:16px;
  text-align: center;
  padding-bottom:2px 0px;
  width:100%;
  height: 25px;
  top:0;
  position: absolute;
  left:0;
  background-color:grey ;
  transform: rotate(-45deg) translateX(-30%) translateY(-2rem);
}
.square-box img{
  display:block;
  width:100%;
  aspect-ratio:1/1;
  display: block;
  margin:4px 0;
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

  text-decoration:underline black;
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