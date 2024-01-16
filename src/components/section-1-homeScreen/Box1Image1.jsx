import React from 'react'
import img1 from '../../assets/images/png_4.png'

const Box1Image1 = ({ className}) => {

  return (
    <div className={className}>
        <img src={img1} alt="" style={{width:"100%", aspectRatio:"1/1"}} className='img'/>      
    </div>
  )
}

export default Box1Image1
