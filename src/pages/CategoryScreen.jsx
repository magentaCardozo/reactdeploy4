import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArticleContext } from '../App'

const CategoryScreen = ({className}) => {
    const {articles,categories}=useContext(ArticleContext)
    const {categorie}=useParams()
        const navigate=useNavigate()
    const redirect=()=>{
        navigate('/error')
    }

    if(articles.filter(article=>(article.categorie==categorie)).length==0){
               return  redirect

    }
  return (
    <div style={{paddingTop:"3.4rem"}}>
        <div style={{fontSize:'22px',textTransform:'uppercase', fontWeight:'400',backgroundColor:'yellow', textAlign:'center'}}>{categorie}</div>
        <div className={className} >
        {
            articles.filter(article=>(article.categorie==categorie))
            .map(article=>(
                                <div className="square-box">
                                    <img src={article.image[0]} width="100%" alt="" className='w-100' />
                                    <div>
                                        <span>{article.name}</span>
                                        <span>{article.price} <span className='dollarSign'>$</span> {!article.pricePromo || <span className='promo-1'>{article.pricePromo} <span className='dollarSign'>$</span></span>} </span>
                                        <p></p>
                                        <div >
                                            <a target='_blank' href="https://wa.me/message/UNKT6MU5OODWI1">
                                            Acheter maintenant

                                            </a> 
                                       </div>
                                    </div>
                                </div>
            ))
        }
    </div>
    </div>

  )
}


export default CategoryScreen