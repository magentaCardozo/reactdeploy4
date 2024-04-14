import React, { useState } from 'react'
import { RoutesList } from '../../data/Routes';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const MenuIcon = ({className}) => {
  const [active, setActive]=useState(false)
  function changeState(){
    setActive(current=>!current)
    console.log(active)
  }
  return (
    <div className={className}>
      <div className={active && "menu-down"} onClick={()=>changeState()}>
        <span></span><span></span><span></span>
        <div>
          <ul>
            <li>
              <Link to={`${RoutesList.Categorie}cosmetique`}>
                  Cosmetique
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

          </ul>
        </div>
      </div>
    </div>
  )
}

export default MenuIcon
