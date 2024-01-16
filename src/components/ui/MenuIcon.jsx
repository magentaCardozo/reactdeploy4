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
              <Link to={RoutesList.Telephones}>
                  Télephone
              </Link>
            </li>
            <li>
              <Link to={RoutesList.Montres}>
                  Montres
              </Link>
            </li>
            <li>
              <Link to={RoutesList.Accessoires}>
                  Accessoires
              </Link>
              
              </li>
            <li>Mode de paiement</li>
            <li>Comment acheter chez nous ?</li>
            <li>FAQs</li>
          </ul>
          <p >
            chezArdi,,,,,
          </p>
        </div>
      </div>
    </div>
  )
}

export default MenuIcon
