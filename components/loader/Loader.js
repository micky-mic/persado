import Image from 'next/image'
import React from 'react';
import logo from "@/public/new/logo.png";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <video autoPlay muted loop playsInline>
        <source src="/new/optimizevid.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default Loader