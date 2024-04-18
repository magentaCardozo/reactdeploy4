import React, { useEffect } from 'react'
import Section1 from '../components/section-1-homeScreen/Section1'
import Section2 from '../components/section-2-homeScreen/Section2'
import { StyledSection2 } from '../components/section-2-homeScreen/section2.style'
import { StyledSection1 } from '../components/section-1-homeScreen/section1.style'
import { useLocation } from 'react-router-dom'
import { COLOR } from '../data/Constantes'

const HomeScreen = () => {
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({top:0, behavior:'instant'});
  }, [pathname]);

  return (
    // #DADAD6
    <div className="home-screen"style={{backgroundColor:COLOR.MAIN}}>
        <Section1></Section1>
          <StyledSection2></StyledSection2>
    </div>
  )
}

export default HomeScreen
