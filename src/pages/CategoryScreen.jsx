import React, { useContext, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { ArticleContext } from '../App'
import Error from './Error'
import { COLOR, TEXT_COLOR } from '../data/Constantes'
import { Link } from 'react-router-dom';
import { RoutesList } from '../data/Routes';

const CategoryScreen = ({className}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

    const {articles,categories}=useContext(ArticleContext)
    const {categorie}=useParams()


    if(articles.filter(article=>(article.categorie==categorie)).length==0){
               return  (
                <Error>
                </Error>

               )

    }
  return (
    <div style={{paddingTop:"3.4rem",backgroundColor:COLOR.MAIN}}>
        <div style={{fontSize:'22px',textTransform:'uppercase', fontWeight:'500', textAlign:'center',lineHeight:"35px",marginBottom:"10px",color:`${TEXT_COLOR.SECOND}`,textDecoration:"underline white 1px"}}>{categorie}</div>
        <div className={className} >
        {
            articles.filter(article=>(article.categorie==categorie))
            .map(article=>(
                                <div className="square-box">
                                    <Link className="link" to={`${RoutesList.Details}${article.id}`}  onClick={()=>active()}>
                                      <img src={article.image[0]} width="100%" alt="" className='w-100' />
                                    </Link>
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
