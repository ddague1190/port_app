import { Suspense, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Preload, ScrollControls, Scroll, useScroll, Image, useFBO, PerspectiveCamera } from '@react-three/drei'

export default function Images() {
  const { width, height } = useThree((state) => state.viewport)
  const data = useScroll()
  const group = useRef()
  useFrame(() => { 
    // group.current.children[0].material.zoom = 1 + data.range(5, 1 / 3)
    // group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3
    // group.current.children[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 3
    // group.current.children[3].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2
    // group.current.children[4].material.zoom = 1 + data.range(1.25 / 3, 1 / 3) / 1
    // group.current.children[5].material.zoom = 1 + data.range(1.8 / 3, 1 / 3) / 3
    // group.current.children[5].material.grayscale = 1 - data.range(1.6 / 3, 1 / 3)
    // group.current.children[6].material.zoom = 1 + (1 - data.range(2 / 3, 1 / 3)) / 3
  })
  return (
    <group ref={group}>
      <Image position={[-1, 2, 0]} scale={[1.5, 3, 4]} url="/images/calculator.png" />
      <Image position={[2, 0, 1]} scale={3} url="/images/calculator.png" />
      <Image position={[-2.3, -height, 2]} scale={[1, 3, 1]} url="/images/calculator.png" />
      <Image position={[-0.6, -height, 3]} scale={[1, 2, 1]}url="/images/calculator.png" />
      <Image position={[0.75, -height, 3.5]} scale={1.5} url="/images/calculator.png" />
      <Image position={[0, -height * 1.5, 2.5]} scale={[1.5, 3, 1]} url="/images/calculator.png" />
      <Image position={[0, -height * 2 - height / 4, 0]} scale={[width, height / 2, 1]} url="/images/calculator.png" /> 
    </group>
  )
}
