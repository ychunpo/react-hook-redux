import React from 'react';
import image5 from '../../../../assets/image5.png';
import '../hook-image.css';

const Image4 = () => {
  return (
    <div className='image-card'>
      <img width={500} src={image5} alt='hannah-lin.medium.com' />
      <p>圖來自 hannah-lin.medium.com</p>
    </div>
  )
}

export default Image4;