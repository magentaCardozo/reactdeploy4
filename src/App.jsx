import React,{useContext} from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { StyledNavbar } from './components/navbar.style'
import { articles, categories } from './data/data-objects'

export const ArticleContext = React.createContext()

const App=()=> {
  const data={
  articles,categories
}
  return (
    <ArticleContext.Provider value={data}>
    <div className='theApp'>

        <StyledNavbar></StyledNavbar>
        <div className='container-fluid-css'>

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
