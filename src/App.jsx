import React,{useContext,useState,useEffect, createContext} from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { StyledNavbar } from './components/navbar.style'
import {  categories,infos } from './data/data-objects'
import useGetApi from './utils/functions'
import Headroom from 'react-headroom'
export const ArticleContext = createContext();
// import { pathUrl,setPathUrl } from './data/global_variable'

const App=()=> {
  // setPathUrl()

  const {isError,isLoading,articles}=useGetApi("http://localhost:3000/articles/")

  if (isError){
    return (<>Error</>)
  } 
  if (isLoading){
    return (<>isloading</>)
  } 
  // return(
  //   <>{articles[0].categorie}</>
  // )
  return (
    <ArticleContext.Provider value={{articles,categories,infos}}>
    <div className='theApp' >

 
        <StyledNavbar></StyledNavbar>
        <div className='space'></div>
  
        <div className={`container-fluid-css`}>

            <Outlet key={Date.now()}></Outlet>
        </div>
        <div>
        <Footer></Footer>

        </div>

    </div>    
    </ArticleContext.Provider>
  )
}


export default App
