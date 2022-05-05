import { useBlock } from "../../utilities/Blocks"
import { useRef } from "react"
import { useStore } from "@react-three/fiber"
import { useFrame } from "@react-three/fiber"
import Plane from "./Plane"
import * as THREE from 'three'
export default function Cross() {
    const ref = useRef()
    const { viewportHeight } = useBlock()

    useFrame(() => {
        const { top, zoom, pages } = useStore()

        const curY = ref.current.rotation.z
        const nextY = (top / ((pages - 1) * viewportHeight * zoom)) * Math.PI
        ref.current.rotation.z = THREE.MathUtils.lerp(curY, nextY, 0.1)
    })
    return (
        <group ref={ref} scale={[2, 2, 2]}>
            <Plane scale={[1, 0.2, 0.2]} color="#e2bfca" />
            <Plane scale={[0.2, 1, 0.2]} color="#e2bfca" />
        </group>
    )
}