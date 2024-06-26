import Button  from './ui/Button'
import React from 'react'
import styled from 'styled-components'
import { StyledButton } from './footer.style'
import { COLOR, TEXT_COLOR } from '../data/Constantes'
import { useNavigate } from "react-router-dom";






const Footer = () => {
    let navigate = useNavigate();
    const openWin=()=>{
        navigate("/admin/login");
  }
   const handleMailToClick = () => {
    const email = 'mbuyiarsen095@gmail.com';
    const subject = 'ChezArdi';
    const body = '';

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };
  return (
    <div  style={{backgroundColor:'black'}}>
        <div className="" style={{backgroundColor:'black'}}>

            <footer style={{backgroundColor:COLOR.FIFTH}}className="text-center text-lg-start">
            <div className="container p-4">
            <div className="row">
                <h5 className="text-uppercase mb-4 text-white">Contacts</h5>

                <ul className="list-unstyled mb-4">
                    <li style={{color: TEXT_COLOR.FIFTH}}>
                    +243840199718
                    </li>
                    <li>
                    <span onClick={handleMailToClick} className="text-white">mbuyiarsen095@gmail.com</span>
                    {/* <a mailTo="mbuyiarsen095@gmail.com" className="text-white">mbuyiarsen095@gmail.com</a> */}
                    </li>

                </ul>
                
            </div>
            </div>

            <div className="text-center p-3 border-top border-black text-white" onDoubleClick={openWin}>
            © 2024 Copyright
            </div>
        </footer>
        
        </div>
    </div>
  )
}

export default Footer
