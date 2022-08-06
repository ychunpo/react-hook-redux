import React from 'react';
import image2 from '../../../../assets/image2.jpeg';
import '../hook-image.css';

const Image2 = () => {
  return (
    <div className='image-card'>
      <img width={500} src={image2} alt='hannah-lin.medium.com' />
      <p>圖來自 hannah-lin.medium.com</p>
    </div>
  )
}

export default Image2;