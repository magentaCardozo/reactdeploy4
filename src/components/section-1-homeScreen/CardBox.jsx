import React from 'react'
import Card from '../ui/Card'
import img1 from '../../assets/images/img_5.png'
import img2 from '../../assets/images/img_6.png'

const CardBox = ({className}) => {
    const text='Livraison gratuite à partir de 50$'

  return (
    <div className={className}>
        {/* <div className="first">
            <Card image={img2} ></Card>

        </div>
        <div className="second">
          <Card text={text} style={{backgroundColor:"#787373"}}></Card>
        </div>
        <div className="third">
          <Card image={img1} ></Card>
        </div> */}
        <div className='phoneStyle'>
          <div className='img'>

          </div>
          <div className='text'>Livraison gratuite à partir de 50$</div>
          <div className='forColor'></div>
        </div>

    </div>
  )
}

export default CardBox
