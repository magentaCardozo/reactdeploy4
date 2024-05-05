import React, { useState, useContext, useEffect } from 'react'
import { RoutesList } from '../../data/Routes';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { ArticleContext } from '../../App';
import { useCookies } from 'react-cookie';

const MenuIcon = ({className}) => {
  const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
  const [active, setActive]=useState(false)
  const {isConnected,setLookCon}=useContext(ArticleContext)

  const removeCoockie=()=>{
     removeCookie('jwt', { path: '/' });
    console.log(cookies)
    setLookCon(previous=>!previous)

  }


  function changeState(){
    setActive(current=>!current)
    console.log(active)
  }
  return (
    <div className={className}>
      <div className={`${active && "menu-down"}`} onClick={()=>changeState()}>
        <span></span><span></span><span></span>
        <div>
          <ul>
            <li>
              <Link to={`${RoutesList.Categorie}cosmetique`}>
                  Offre premium
              </Link>
            </li>
            <li>
              <Link to={`${RoutesList.Categorie}telephone`}>
                  Télephone
              </Link>
            </li>
            <li>
              <Link to={`${RoutesList.Categorie}montre`}>
                  Montres
              </Link>
            </li>
            <li>
              <Link to={`${RoutesList.Categorie}accessoire`}>
                  Accessoires
              </Link>
            </li>
            <li>
              <Link to={`${RoutesList.Info}modePaiement`}>
                  Mode de paiement
              </Link>
            </li>
            <li>
              <Link to={`${RoutesList.Info}commentAcheter`}>
                  Comment acheter chez nous ?
              </Link>
            </li>
            <li>
              <Link to={`${RoutesList.Info}aPropos`}>
                  A propos
              </Link>
            </li>
            {isConnected && <li>
              <Link to={`${RoutesList.ARTICLESPAGE}`}>
                  Admin
              </Link>
            </li>}
            {isConnected && <li onClick={removeCoockie}>
                  Deconnection
            </li>}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MenuIcon
