import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { ArticleContext } from '../App'
import Error from './Error';
import { FaWhatsapp } from 'react-icons/fa';
import { COLOR,TEXT_COLOR } from "../data/Constantes";
import { _url } from '../data/Constantes';
import useGetApi from '../utils/functions';


const DetailsPage = ({className}) => {

      const { pathname } = useLocation();



    const [imgCount, setImgCount]=useState(0);
    const {id}=useParams()
    const {isError,isLoading,articles} = useGetApi(`http://localhost:3000/articles/${id}`)
    const article= articles;

    const {name,image,price,pricePromo,longName, slug}=article;
    
    useEffect(() => {
      window.scrollTo({top:0, behavior:'instant'});
      setImgCount(0);
    }, [pathname]);
    
    if (isError){
       return  <Error/>
    }
  if (isLoading){
    return (<>isloading</>)
  } 
  return (
    <div className={`${className} `} >
            <div>
                {
                    article.image.map((image,index,images)=>(
                        // <div key={index} className={`${index==imgCount && 'activate'} imageBox`} onClick={()=> setImgCount(index)}>
                        <div key={index} className={` imageBox`} onClick={()=> setImgCount(index)}>
                            <img   src={_url.MAIN+image} alt="" width="100%" height="100%" />
                        </div>
                    ))
                }
            </div>


        <div >
        <div className="_button">
        <a target='_blank' href={`https://wa.me/243840199718?text=Bonjour,%20je%20suis%20interessé%20par%20le%20produit%20${name}.%20Merci`}>
            Acheter maintenant 
            <span className="span1"> 
            <span>

            Discuter avec nous sur whatsapp
                <span>

              <FaWhatsapp></FaWhatsapp>
                </span>
            </span>
              
              
            </span>

            </a>
        </div>
        <span className='price'>{price} <span className='dollarSign'>$</span> {!pricePromo || <span className='promo-1'>{pricePromo} <span className='dollarSign2'>$</span></span>} </span>
        <span className='maincolor'>{name} </span>
        <span className='maincolor'> {longName} </span>
        <span className='maincolor slug'> {slug} </span>
        </div>

    </div>
  )
}

export default DetailsPage
