import styled from "styled-components";
import CardBox from "./CardBox"; 
import { COLOR } from "../../data/Constantes";
import design1 from '../../assets/images/forDesign1.jpg'

export const StyledCardBox=styled(CardBox)`

  --gradient: linear-gradient(
    45deg,#845ec2,#d65db1,#ff6f91,#ff9671,#ffc75f,#f9f871
  );
    position: absolute;
    width: 100%;
    top: 70vh;
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 25rem 25rem 25rem;
    height: 20rem;
    overflow:hidden;
    gap:1rem;

    place-content: center;

            .first,.second,.third{
            font-size:2.5rem;


        }
    @media screen and ((width>=1100px)and (width<1270px)){
        grid-template-columns: 23rem 23rem 23rem;

        gap:0px;
        .first,.second,.third{
            scale: 0.9;
            font-size:2rem;

        }
        
    }
    @media screen and ((width>=845px)and (width<1100px)){
        grid-template-columns: 33% 33% 33%;
        justify-content: center;

        gap:0px;
        .first,.second,.third{
            scale: 0.78;
            min-width:19rem;
            font-size:1.7rem;


        }
        
    }
    @media screen and ((width>=655px)and (width<845px)){
        grid-template-columns: 32% 32% 32%;
        justify-content: center;
                    width:100%;

        .first,.second,.third{
            scale: 0.9;
            font-size:1.4rem;

            min-width:15rem;


        }
        
    }
    @media screen and ((width>=200px)and (width<655px)){

        grid-template-columns: 100%;
        grid-template-rows:100%;
        justify-content: center;
        width:100%;
        gap:0px;



        .phoneStyle>div:nth-child(1){
            height:100%;
            width:100%;
            background-image:url(${design1});
            background-position:0 0;
            background-repeat:no-repeat;
            background-size:cover;

        }
        .phoneStyle>div:nth-child(2){
            position: absolute;
            bottom:88px;
            right: 0;
            font-size:20px;
            line-height:25px;
            font-weight:600;
            letter-spacing:1.5px;
            height:90px;
            padding:0 10px;
            width:150px;
            display: flex;
            align-items:center;
            background-color:#00CEFD;
        }
        .forColor{
            position: absolute;
            left:0;
            bottom:0;
            height:40px;
            width:60px;
            background-color:#00CEFD;
        }
        .first{
            transform:translateX(20%);
        }
        .second{
            animation: animation2 10s infinite;
            animation-delay:4s;
            border-left: double 1px white;
            font-size:unset;
            font-family:unset;
            line-height:25px;
            font-size : 16px;
            font-weight:0;
            padding-left:0.5rem;
            text-align:justify;
            display : block;
            color :  white;
        }
        .third{
            /* animation: animation3 12s infinite;
            animation-delay:6s; */
            display:none;
        }
        .first,.second,.third{
            font-size:1rem;
            min-width:15rem;
        }
    }
   
@keyframes animation1 {
    0%{
        z-index:1000;
    }
    10%{
        z-index:1000;
    }
    50%{
        z-index:1000;
        transition: z-index ease-out;
    }

    
}
@keyframes animation2 {
    0%{
        opacity:1;
    }

    50%{
        opacity:1;
        transform: translateX(-30%)
    }
    60%{
        opacity:1;    }

    
}
@keyframes animation3 {
    0%{
        z-index:1000;
    }
    75%{
        z-index:1000;
        opacity:0.8;
    }

    100%{
        z-index:-1000;
        opacity:1;
    }
    

}


`