import React, { useContext, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { ArticleContext } from '../App'
import Error from './Error'


const InfoScreen = ({className}) => {
  const {infos}=useContext(ArticleContext)
      const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({top:0, behavior:'instant'});
  }, [pathname]);
const {information}=useParams()
const info= infos.filter(info=> info.title===information)[0];
// const article= articles.filter(article=> article.id===Number(id))[0];


  return (
    <div className={`${className}`}>
        <div>{info.title2}</div>
        <div>
            {info.slug}
        </div>
    </div>
  )
}

export default InfoScreen
