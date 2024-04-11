import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { ArticleContext } from '../App'
import Error from './Error';
import { COLOR,TEXT_COLOR } from "../data/Constantes";


const DetailsPage = ({className}) => {

      const { pathname } = useLocation();



    const [imgCount, setImgCount]=useState(0);
    const {articles}=useContext(ArticleContext)
    const {id}=useParams()
    const article= articles.filter(article=> article.id===Number(id))[0];

    if (!article){
       return  <Error/>
    }
    const {name,image,price,pricePromo,longName, slug}=article;

      useEffect(() => {
    window.scrollTo(0, 0);
    setImgCount(0);
  }, [pathname]);

  return (
    <div className={`${className} `} >
        <div className=''>
            <div>
                {
                    article.image.map((image,index,images)=>(
                        <div key={index} className={`${index==imgCount && 'activate'} imageBox`} onClick={()=> setImgCount(index)}>
                            <img src={image} alt="" />
                        </div>
                    ))
                }
            </div>
            <div className='grid-center'><img src={image[imgCount]} alt=""/> </div>
        </div>


        <div >
        <span className='price'>{price} <span className='dollarSign'>$</span> {!pricePromo || <span className='promo-1'>{pricePromo} <span className='dollarSign2'>$</span></span>} </span>
        <span className='maincolor'>{name} </span>
        <span className='maincolor'> {longName} </span>
        <span className='maincolor'> {slug} </span>
        </div>
        <div className="_button">
            <a  href="https://wa.me/message/UNKT6MU5OODWI1">
            Acheter maintenant

            </a>
        </div>

    </div>
  )
}

export default DetailsPage
