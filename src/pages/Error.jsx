import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom';

const Error = () => {
    const { pathname } = useLocation();

      useEffect(() => {
    window.scrollTo({top:0, behavior:'instant'});
  }, [pathname]);
  return (
    <div className='' style={{marginTop:'3.3rem', height:"60rem"}}>
        <p style={{fontSize:'60px', textAlign:'center'}}>404</p>
    </div>
  )
}

export default Error
