import React from 'react'
import { PerspectiveCamera } from "three"

const angleToRadians = (angle) => angle * 2 * Math.PI / 180

const Sohail = () => {
  return (
    <>
        <PerspectiveCamera makeDefault />
        <mesh>
            <sphereGeometry args={[1,32,32]}/>
            <meshStandardMaterial color='#0000ff' args={[]} />
        </mesh>

        <mesh rotation={[angleToRadians(90),0,0]}>
            <planeGeometry args={[7,7]} />
            <meshStandardMaterial color='#ffffff' />
        </mesh>

        <ambientLight args={['#ffffff',2]} />
    
    
    </>
  )
}

export default Sohail