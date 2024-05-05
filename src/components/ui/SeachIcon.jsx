import React ,{useState,useContext}from 'react'
import { FaSearch } from 'react-icons/fa';
import { ArticleContext } from '../../App';
import { Link } from 'react-router-dom';
import { RoutesList } from '../../data/Routes';
import LoadingPage from '../LoadingPage';




const SeachIcon = ({className}) => {
      if(!useContext(ArticleContext)){
      return
  }
  const {articles,categories,isLoading} =useContext(ArticleContext)
  const [listArticle, setListArticle]=useState([]);
  const [activated, setActivated]=useState(false)
  const [text, setText]=useState("")


  const active=()=>{
    setActivated(state=>!state)
  }
  return (

    <div className={className}>
      <FaSearch  onClick={()=>active()}/>
      <div className={`${activated && "activated"}`}>
        <div className='head'>
          <input type='text' value={text} className='searchField' onChange={(e)=>setText(e.target.value)} />
          <div className='cross' onClick={()=>active()}>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className='result'>
      {isLoading && <LoadingPage></LoadingPage>}
          {
            articles.filter(article=>(article.name.toUpperCase().includes(text.toUpperCase()) ||article.longName.toUpperCase().includes(text.toUpperCase()))).length!=0?
            articles.filter(article=>(article.name.toUpperCase().includes(text.toUpperCase()) ||article.longName.toUpperCase().includes(text.toUpperCase()))).map(article=>{
              return(
                <Link key={article.id+parseInt(Date.now())} className="link" to={`${RoutesList.Details}${article.id}`}  onClick={()=>active()}>
                  <div  className='article'>
                  <div>
                    <img src={article.image[0]} alt="" />
                  </div>
                  <div>
                    <div>{article.name}</div>
                    <div>{article.longName}</div>
                      

                  </div>

                </div>
                </Link>

              )
            }) : !isLoading && <div style={{color:'red', textAlign:"center", fontSize:"20px"}}>Aucun Article correstondant</div>

          }

          

        </div>
      </div>
    </div>
  )
}

export default SeachIcon
