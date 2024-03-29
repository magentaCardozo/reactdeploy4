import React ,{useState,useContext}from 'react'
import { FaSearch } from 'react-icons/fa';
import { ArticleContext } from '../../App';
import { Link } from 'react-router-dom';
import { RoutesList } from '../../data/Routes';




const SeachIcon = ({className}) => {
  const {articles,categories} =useContext(ArticleContext)

  const [listArticle, setListArticle]=useState([]);
  const [activated, setActivated]=useState(false)
  const [text, setText]=useState("")

  const active=()=>{
    setActivated(state=>!state)
  }
  return (
    <div className={className}>
      <FaSearch  onClick={()=>active()}/>
      <div className={activated && 'activated'}>
        <div className='head'>
          <input type='text' value={text} className='searchField' onChange={(e)=>setText(e.target.value)} />
          <div className='cross' onClick={()=>active()}>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className='result'>
          {
            articles.filter(article=>(article.name.includes(text) ||article.longName.includes(text))).length!=0?
            articles.filter(article=>(article.name.includes(text) ||article.longName.includes(text))).map(article=>{
              return(
                <Link className="link" to={`${RoutesList.Details}${article.id}`}  onClick={()=>active()}>
                      <div key={article.id} className='article'>
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
            }) : <div style={{color:'red', textAlign:"center", fontSize:"20px"}}>Aucun Article correstondant</div>

          }

          

        </div>
      </div>
    </div>
  )
}

export default SeachIcon
