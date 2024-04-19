import React from 'react'
import Card from '../ui/Card'
import img1 from '../../assets/images/img_5.png'
import img2 from '../../assets/images/img_6.png'
import { COLOR } from '../../data/Constantes'

const CardBox = ({className}) => {
    const text='Livraison gratuite à partir de 50$'

  return (
    <div className={className}>
        <div className="first">
            <Card image={img2} ></Card>

        </div>
        <div className="second">
          <Card text={text} style={{backgroundColor:COLOR.FIFTH}}></Card>
        </div>
        <div className="third">
          <Card image={img1} ></Card>
        </div>
    </div>
  )
}

export default CardBox
