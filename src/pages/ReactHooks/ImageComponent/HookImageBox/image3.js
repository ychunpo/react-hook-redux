import React from 'react';
import image3 from '../../../../assets/image3.jpeg';
import '../hook-image.css';

const Image3 = () => {
  return (
    <div className='image-card'>
      <img width={500} src={image3} alt='hannah-lin.medium.com' />
      <p>圖來自 hannah-lin.medium.com</p>
    </div>
  )
}

export default Image3;