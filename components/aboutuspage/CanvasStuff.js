import { useFrame } from "@react-three/fiber"
import React from 'react'
import { Scroll } from "@react-three/drei"
import lerp from 'lerp'

const AboutMesh = ({ position }) => {

    useFrame((state) => {
        state.camera.position.x = lerp(state.camera.position.x, position.x, 0.01)
        state.camera.position.y = lerp(state.camera.position.y, position.y, 0.01)
        state.camera.zoom = lerp(state.camera.zoom, position.zoom, 0.01)
        state.camera.fov = lerp(state.camera.fov, position.fov, 0.01)
        state.camera.updateProjectionMatrix()
        
    })
    return (
        <Scroll>
            <gridHelper args={[100, 100,]} rotation={[Math.PI / 2, 0, 0]} />
            <group>
                <mesh onClick={() => dispatch({ type: 'CHANGE' })}
                >
                    <sphereBufferGeometry />
                    <meshPhongMaterial color='#0ff0f0' />

                </mesh>

                <ambientLight intensity={0.1} />

                <directionalLight intensity={4} color={'#f0f0f0'} position={[10, 1, 1]} />

            </group>

        </Scroll>
    )
}

export default AboutMesh