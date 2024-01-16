import React, { useContext, useEffect, useState } from 'react'
import {  BrowserRouter, Route, Routes, redirect, useLocation, useNavigate, useParams } from 'react-router-dom'
import { ArticleContext } from '../App'

const DetailsPage = ({className}) => {

      const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


    const [imgCount, setImgCount]=useState(0);
    const {articles}=useContext(ArticleContext)
    const {id}=useParams()
    console.log("°°°°°°"+id)
    const article= articles.filter(article=> article.id===Number(id))[0];
    // useNavigate
    // Routes
    // BrowserRouter
    // Route
    const navigate=useNavigate()
    const redirect=()=>{
        navigate('/error')
    }
    if (!article){
       return  redirect
    }
    const {name,image,price,pricePromo,longName, slug}=article;
  return (
    <div className={`${className} `} >
        <div className=''>
            <div>
                {
                    article.image.map((image,index,images)=>(
                        <div key={index} className={`${index==imgCount%images.length && 'activate'} imageBox`} onClick={()=> setImgCount(index)}>
                            <img src={image} alt="" />
                        </div>
                    ))
                }
            </div>
            <div className='grid-center'><img src={image[imgCount%image.length]} alt=""/> </div>
        </div>


        <div >
        <span className='price'>{price} <span className='dollarSign'>$</span> {!pricePromo || <span className='promo-1'>{pricePromo} <span className='dollarSign'>$</span></span>} </span>
        <span>{name} </span>
        <span> {longName} </span>
        <span> {slug} </span>
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
