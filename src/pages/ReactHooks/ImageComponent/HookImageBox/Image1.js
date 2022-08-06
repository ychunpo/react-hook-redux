import React from 'react';
import image1 from '../../../../assets/image1.jpeg';
import '../hook-image.css';

const Image1 = () => {
  return (
    <div className='image-card'>
      <img width={500} src={image1} alt='kevinwkds.medium.com' />
      <p>圖改編自 kevinwkds.medium.com</p>
    </div>
  )
}

export default Image1;