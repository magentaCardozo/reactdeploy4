import React, { useContext, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { ArticleContext } from '../App'
import Error from './Error'
import { COLOR, TEXT_COLOR } from '../data/Constantes'
import { Link } from 'react-router-dom';
import { RoutesList } from '../data/Routes';
import { base2 } from '../data/Routes'

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
    <div style={{paddingTop:"3.2rem",backgroundColor:COLOR.MAIN,minHeight:"75vh"}}>
        <div style={{fontSize:'22px',textTransform:'uppercase', fontWeight:'500', textAlign:'center',lineHeight:"35px",marginBottom:"10px",color:`${TEXT_COLOR.SECOND}`,padding:"0.9% 0",backgroundColor:"grey"}}>{categorie}</div>
        <div className={className} >
        {
            articles.filter(article=>(article.categorie==categorie))
            .map(article=>(
                                <div className="square-box">
                                    <Link className="link" to={`${RoutesList.Details}${article.id}`} >
                                      <img src={article.image[0]} width="100%" alt="" className='w-100' />
                                    </Link>
                                    <div>
                                        <span>{article.name}</span>
                                        <span>{article.price} <span className='dollarSign'>$</span> {!article.pricePromo || <span className='promo-1'>{article.pricePromo} <span className='dollarSign'>$</span></span>} </span>
                                        <p></p>
                                        <div >
                                            <a target='_blank' href={`https://wa.me/243840199718?text=${base2+RoutesList.Details}${article.id}Bonjour,%20je%20suis%20interessé%20par%20le%20produit%20${article.name}.%20Merci`}>
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
