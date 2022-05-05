import Images from "./Images"
import { Suspense, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Preload, ScrollControls, Scroll, useScroll, Image, useFBO, PerspectiveCamera } from '@react-three/drei'
import Box from "../shapes/Box"

export default function VerticalScrollCanvas() {
    return (
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
          
          {/* <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} /> */}
        <Suspense fallback={null}>
          <ScrollControls damping={4} pages={3}>
            <Scroll>
              <Images />
            </Scroll>
            <Scroll html>
              <h1 style={{ position: 'absolute', top: '60vh', left: '0.5em' }}>to</h1>
              <h1 style={{ position: 'absolute', top: '120vh', left: '60vw' }}>be</h1>
              <h1 style={{ position: 'absolute', top: '198.5vh', left: '0.5vw', fontSize: '40vw' }}>home</h1>
            </Scroll>
          </ScrollControls>
          <Preload />
        </Suspense>
      </Canvas>
    )
  }