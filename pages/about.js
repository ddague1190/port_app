import React, { useReducer } from 'react'
import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Preload, ScrollControls, Scroll, useScroll, Image, useFBO, PerspectiveCamera } from '@react-three/drei'
import { useEffect } from "react"
import AboutMesh from "../components/aboutuspage/CanvasStuff"
import Portal from "../components/utilities/Portal"
import { addOverflowHidden, removeOverflowHidden } from "../lib/homeOverflowStyles"
const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            console.log('hi')
            return {
                x: 37.5,
                y: 37.5,
                zoom: 5, 
                fov: 80
            }
        default:
            return state

    }
}



const About = () => {
    useEffect(()=>{
        addOverflowHidden();
        return removeOverflowHidden
    }, [])

    const initial_state = {
        x: 0,
        y: 0,
        zoom: 1,
        fov: 150
    }

    const [position, dispatch] = useReducer(reducer, initial_state)
    useEffect(() => {
        console.log(position)
    }, [position])


    return (
        <>
    
        <Canvas gl={{ antialias: false }} dpr={[1, 1.5]} camera={{ fov: position.fov  , zoom: position.zoom, position: [position.x, position.y, 10] }}>
            <Suspense fallback={null}>
                <ScrollControls damping={4} pages={3}>
                    <AboutMesh position={position} />
                    <Scroll html>

                        <h1 onClick={() => dispatch({ type: 'CHANGE' })} className="font-extrabold text-4xl" style={{ position: 'absolute', top: '60vh', left: '0.5em' }}>Legend</h1>
                        {/* <h1 style={{ position: 'absolute', top: '120vh', left: '60vw' }}>be</h1>
                        <h1 style={{ position: 'absolute', top: '198.5vh', left: '0.5vw', fontSize: '40vw' }}>home</h1> */}
                    </Scroll>
                </ScrollControls>
                <Preload />
            </Suspense>
        </Canvas>
        <Portal>
           <ul className="right-5 top-5 fixed flex flex-col gap-1 rounded-md  text-white">
               <li className="px-2 py-1 bg-red-500 cursor-pointer">About me</li>
               <li className="px-2 py-1 bg-red-500 ">Work history</li>
               <li className="px-2 py-1 bg-red-500 ">Education</li>
               <li className="px-2 py-1 bg-red-500 ">Publications</li>

           </ul>
        </Portal>
        </>
    )
}

export default About