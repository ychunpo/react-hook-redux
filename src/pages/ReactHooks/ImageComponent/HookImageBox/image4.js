import React from 'react';
import image4 from '../../../../assets/image4.jpeg';
import '../hook-image.css';

const Image4 = () => {
  return (
    <div className='image-card'>
      <img width={500} src={image4} alt='hannah-lin.medium.com' />
      <p>圖來自 hannah-lin.medium.com</p>
    </div>
  )
}

export default Image4;