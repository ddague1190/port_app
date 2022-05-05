import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Stars />
    </Canvas>
  )
}

function Stars(props) {
  const ref = useRef()
  const [sphere] = useState(() => rew Float32Array(5000), { radius: 1.5 }))
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}
function Overlay() {
    return (
      <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
        <a href="https://pmnd.rs/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
          pmnd.rs
          <br />
          dev collective
        </a>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate3d(-50%,-50%,0)' }}>
          <h1 style={{ margin: 0, padding: 0, fontSize: '15em', fontWeight: 500, letterSpacing: '-0.05em' }}>hello</h1>
        </div>
        <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>pretty bad —</div>
        <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>25/02/2022</div>
      </div>
    )
  }



export default function GatbsyStars () {
    return(
    <App/>)
}