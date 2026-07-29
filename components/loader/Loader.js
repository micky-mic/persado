
import React from 'react';

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <video autoPlay muted loop playsInline>
        <source src="/new2/optimizevid.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default Loader