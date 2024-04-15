import React,{useContext,useState,useEffect} from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { StyledNavbar } from './components/navbar.style'
import { articles, categories } from './data/data-objects'
import useScrollUp,{isScrollUp,setIsScrollUp} from './utils/functions'
export const ArticleContext = React.createContext()

const App=()=> {
  const data={
  articles,categories
}
useScrollUp()

  return (
    <ArticleContext.Provider value={data}>
    <div className='theApp'>

        <StyledNavbar></StyledNavbar>
        <div className={isScrollUp&&'space'}></div>
        <div className={`container-fluid-css`}>

            <Outlet></Outlet>
        </div>
        <div>
        <Footer></Footer>

        </div>

    </div>    
    </ArticleContext.Provider>
  )
}


export default App
