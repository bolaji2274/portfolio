import React from 'react'

const HeroLights = () => {
  return (
    <>
       {/* <ambientLight intensity={0.2} color="#1a1a40" />
          <directionalLight position={[5, 5, 5]} intensity={2} /> */}
          <spotLight 
          position={[2, 5, 6]}
          angle={0.15}
          intensity={100}
          penumbra={0.2}
          />
    </>
  )
}

export default HeroLights
