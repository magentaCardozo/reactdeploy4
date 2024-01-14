import MenuIcon from "./MenuIcon";
import styled from "styled-components";

export const StyledMenuIcon=styled(MenuIcon)`
        display:none;


        @media screen and (max-width: 767px) {
        width:17px;
        height:22px;
    
        &>div{
            height:100%;
            width:100%;

        }
        &>div>div{
            background-color:grey;
            border-right: solid 1px black;
            position: absolute;
            width:70vw;
            height:100vh;
            position: absolute;
            top:2rem;
            opacity:0.2;
            left :-100%;
            transform: translateX(-100%);
            display: none;
            transition: display 2s ease-in;
            display	: flex;
        }
        &>div>div>div{

            display: block;
        }
        span{
            transition: all .2s;
            overflow:hidden;

        }
        span:nth-child(1),span:nth-child(3){
            display: block;
            height:2px;
            margin-top:3px;
            width:100%;
            background-color: black;   

        }

        span:nth-child(2){
            display: block;
            height:2px;
            margin-top:3px;
            width:100%;
            background-color: black;   
        }
        .menu-down>span:nth-child(2){
            display:none;
        }
        .menu-down>span:nth-child(1){
            width:80%;
            transform: translateX(20%) translateY(5px) rotate(45deg) ;


        }
        .menu-down>span:nth-child(3){
            width:80%;
            transform:  translateX(20%) translateY(0px) rotate(-45deg);
        }
        .menu-down{
            display: block;
            width:100%;
            height:100%;
            position: relative;
        }
        .menu-down>div{
            display: block;
            animation: right 1.3s;
            animation-fill-mode:forwards;


        }
        .menu-down ul li:nth-child(1){
            animation: liSlide .4s ;
            animation-fill-mode:forwards;
            animation-delay:.7s;
        }
        .menu-down li:nth-child(2){
            animation: liSlide .4s ;
            animation-fill-mode:forwards;
            animation-delay:.8s;
        }
        .menu-down li:nth-child(3){
            animation: liSlide .4s ;
            animation-fill-mode:forwards;
            animation-delay:1s;
        }
        .menu-down li:nth-child(4){
            animation: liSlide .4s ;
            animation-fill-mode:forwards;
            animation-delay:1.2s;
        }
        .menu-down li:nth-child(5){
            animation: liSlide .5s ;
            animation-fill-mode:forwards;
            animation-delay:2s;
        }

        @keyframes liSlide {
                                    100%{
                transform : translateX(0%);
                opacity:1;

            }
        }

        display:block;
        transform:translateY(50%);
        ul{
            height:100%;
            list-style-type:none;
        }
        ul>li:last-child{
            float: bottom;
        }
        li{
            font-weight: 400;
            font-size: 16px;
            font-family: Arial, Helvetica, sans-serif !important;
            transform: translateX(-100%);
            opacity: 0.5;
        }

        @keyframes right {

            
                        100%{
                transform : translateX(0%);
                opacity:1;

            }
            
        }
        
    }
`