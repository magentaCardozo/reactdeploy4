import React,{useContext} from 'react'
import Button from './ui/Button'
import { Link } from 'react-router-dom'
import Panier from './Panier'

import Logo from '../assets/images/logo.jpg'
import whatsapp from '../assets/whatsapp.svg'
import { StyledInput } from './ui/input.style'
import { StyledSearchIcon } from './ui/searchIcon.style'
import { StyledLogoWhatsapp } from './logoWhatsapp.style'
import { StyledMenuIcon } from './ui/menuIcon.style'
import { StyledPanier } from './panier.style'
import { RoutesList } from '../data/Routes'
import Headroom from 'react-headroom'
import { ArticleContext } from '../App'

const Navbar = ({className}) => {
  if(!useContext(ArticleContext)){
    return
  }
  const {isConnected}=useContext(ArticleContext)

  return (
<div>
{ 
  <>
    <nav className={`navbar-css ${className}`} >
      <Headroom>
      <div className={` navbar  row container-fluid-css-2`}>
        <div className='first-col col-md-8 col-lg-9 col-12 d-flex align-items-center flex-row justify-content-between' >

          <div style={{display:"flex", flexDirection:'row'}} >
              <StyledMenuIcon></StyledMenuIcon>
          <div style={{ marginRight:"6px"}}>
            
          </div>
          <Link to={RoutesList.Home} className='link-css title-css navbar-brand  d-block'>
            <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
            ChezArdi         
          {isConnected && <div style={{marginLeft:"10px", marginTop:"10px",display:'inline-block', height:"1rem", width:"1rem", borderRadius:"50%", overflow:"hidden", backgroundColor:"green"}}>
            </div> }  
          </Link>

          </div>


          <StyledInput/>
          <div className='d-flex flex-row flex-row justify-content-between'>
            <StyledSearchIcon ></StyledSearchIcon>
              <div style={{marginLeft:'12px'}}></div>

          </div>

        </div>

      </div>
      <div className='moreInfo'>
          <div>
            Livraison rapide
          </div>
          <div>
            Paiement cash à la livraison à Kinshasa, Lubumbashi et Kolwezi
          </div>
      </div>
      </Headroom>
  </nav> 

  </>

}
    </div>
  )
}


export default Navbar
