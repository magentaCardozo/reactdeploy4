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
    window.scrollTo({top:0, behavior:'instant'});
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
    <div style={{paddingTop:"3.3rem",backgroundColor:COLOR.MAIN,minHeight:"75vh"}}>
        <div style={{borderTp:"solid 1px black",fontSize:'22px',textTransform:'uppercase', fontWeight:'400', textAlign:'center',lineHeight:"35px",marginBottom:"10px",color:`${TEXT_COLOR.FIFTH}`,margin:"10px 0",backgroundColor:COLOR.FIFTH}}>{categorie.toUpperCase()==="COSMETIQUE"?"Offre premium":categorie}</div>
        <div className={className} >
        {
            articles.filter(article=>(article.categorie==categorie))
            .map(article=>(
                                <div key={article.id} className="square-box">
                                    <Link className="link" to={`${RoutesList.Details}${article.id}`} >
                                        <img  src={article.image[0]}  width="100%" alt="" className='w-100' />
                                    </Link>
                                    <div>
                                        <span><span className='squarePrice'>{article.price}</span> <span className='dollarSign'>$</span> {!article.pricePromo || <span className='promo-1'>{article.pricePromo} <span className='dollarSign'>$</span></span>} </span>
                                        <span>{article.name}</span>
                                        <div >
                                            <a target='_blank' href={`https://wa.me/243840199718?text=Bonjour,%20je%20suis%20interessé%20par%20le%20produit%20${article.name}.%20Merci`}>
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
