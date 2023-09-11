import React from 'react'
import loaderImg from '../../assets/images/Walk.gif'
const Loader = () => {
  return (
    <div className="loader-container">
    <div className="loader-container-inner">
      <img src={loaderImg} alt="loader" className="spin-loader" />
    </div>
  </div>
  )
}

export default Loader