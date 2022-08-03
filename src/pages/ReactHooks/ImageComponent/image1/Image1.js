import React from 'react';
import image1 from '../../../../assets/S89Nk.png';
import './image1.css';

const Image1 = () => {
  return (
    <div className='image-card'>
      <img width={500} src={image1} alt='kevinwkds.medium.com' />
      <p>圖改編自 kevinwkds.medium.com</p>
    </div>
  )
}

export default Image1;