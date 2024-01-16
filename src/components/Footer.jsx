import Button  from './ui/Button'
import React from 'react'
import styled from 'styled-components'
import { StyledButton } from './footer.style'






const Footer = () => {
  return (
    <div className='' style={{backgroundColor:'black'}}>
        <div class="" style={{backgroundColor:'black'}}>

            <footer style={{backgroundColor:"grey"}}className="text-center text-lg-start">
            <div className="container p-4">
            <div className="row">
                <h5 className="text-uppercase mb-4 text-white">Nous contacter</h5>

                <ul className="list-unstyled mb-4">
                    <li>
                    <a href="#!" className="text-white">ardi@gmail.com</a>
                    </li>
                    <li>
                    <a href="#!" className="text-white">ardi2@gmail.com</a>
                    </li>

                </ul>
                
            </div>
            </div>

            <div class="text-center p-3 border-top border-black text-white">
            © 2024 Copyright
            </div>
        </footer>
        
        </div>
    </div>
  )
}

export default Footer
