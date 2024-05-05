import React,{useContext,useState,useEffect, createContext} from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { StyledNavbar } from './components/navbar.style'
import {  categories,infos } from './data/data-objects'
import useGetApi from './utils/functions'
import Headroom from 'react-headroom'
import axios from 'axios'
export const ArticleContext = createContext();
// import { pathUrl,setPathUrl } from './data/global_variable'

const App=()=> {
  // setPathUrl()

  const [look, setLook]=useState(false)
  const [lookCon, setLookCon]=useState(false)
  const [isError, setIsError]=useState(false)
  const [articles, setArticles]=useState([])
  const [isLoading, setIsLoading]=useState(true)
  const [isConnected, setIsConnected]=useState(false)

    useEffect(()=>{
        axios.get("https://chez-ardi.onrender.com/articles")
        .then(response=>{
            if (response.status>=400 && response.status<500){

                setIsError(true)
                setIsLoading(false)
                return
            }
            return response.data

        })
        .then(data=>{
            if (data){
                setArticles(data);

                setIsLoading(false)
            }else{
              setIsLoading(false)

            }
        })
        .catch(err=>{
                setIsError(true)
                setIsLoading(false)
                console.error(err)
        })
    },[look])

    

      const check=  localStorage.getItem("credential");
      console.log("+"+check)

    useEffect(() => {
    axios.post("https://chez-ardi.onrender.com/users/admin/check", { check: localStorage.getItem("credential") })
  .then(response => {
    const data = response.data;
    if (data && data.status === "allowed") {
      setIsConnected(true);
      console.log('Connected');
    } else {
      setIsConnected(false);
      console.log('Not allowed');
    }
  })
  .catch(error => {
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized');
    } else {
      console.error('An error occurred:', error.message);
    }
    setIsConnected(false);
  })
  .finally(() => {
  });
    }, [lookCon]);

  
  if (isError){
    return (<>Error</>)
  } 

 
  // return(
  //   <>{articles[0].categorie}</>
  // )
  return (
    <ArticleContext.Provider value={{isError,setIsError, articles,categories,infos,setArticles,look,setLook,lookCon,setLookCon,isLoading, isConnected,setIsConnected}}>
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
