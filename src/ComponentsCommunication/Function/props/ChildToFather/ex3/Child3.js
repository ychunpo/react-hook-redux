import React, { useState } from 'react'

const Child3 = ({ captionData, setCaptionData, resetData, handleChange, storeCaption }) => {

  return (
    <div className='ex3-child-container'>
      <p>子組件 - 傳送value給組件和重設資料</p>
      <input
        className='ex3-input-box'
        type="text"
        name="caption"
        value={storeCaption}
        onChange={handleChange}
      />
      <button className='ex3-child-btn' onClick={() => resetData()}>
        Reset
      </button>
    </div>
  )
}

export default Child3
