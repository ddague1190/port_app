import ReactDOM from "react-dom"
import { useRouter } from 'next/router'

import React, { Suspense, useEffect, useRef, useMemo } from "react"
import { Canvas, useLoader, useFrame } from "@react-three/fiber"
import { Html, Sky } from "@react-three/drei"
import { TextureLoader, LinearFilter } from "three"
import lerp from "lerp"
import { Text, MultilineText } from "./Text"
import Plane from "./Plane"
import Plane2 from "./Plane2"
import { Block, useBlock } from "../utilities/Blocks"
import state from "../../store"
import Paragraph from "./Paragraph"
import * as THREE from 'three'
import VideoParagraph from "./VideoParagraph"
import Soft from "./Soft";
import Hard from "./Hard"
import LearnerProjects from "./LearnerProjects"

export default function Content() {
  const router = useRouter()

  const goToBuildPage = (e) => {
    if (e.target.id === '01') {
      console.log('hi')
      router.push('/projects/fishnstik')
    }
  }

  useEffect(()=>{
    document.addEventListener('click', goToBuildPage)


    return ()=>{
      removeEventListener('click', goToBuildPage)
    }
  }, [])
  const images = useLoader(
    TextureLoader,
    state.paragraphs.map(({ image }) => image)
  )

  const heroPic = useLoader(TextureLoader, '/genericcodingpic.jpg')

  useMemo(() => {
    heroPic.minFilter = LinearFilter
  }, [heroPic])

  useMemo(() => images.forEach((texture, index) => {
    if (index == 0) {
      texture.generateMipmaps = false
      // texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping
      texture.needsUpdate = true
    }
    (texture.minFilter = LinearFilter)
  }, [images]))
  const { contentMaxWidth: w, canvasWidth, canvasHeight, mobile } = useBlock()
  return (
    <>
      <Sky
        scale={50}
        distance={450}
        sunPosition={[2, 1, 8]}
        inclination={0}
        azimuth={0.25}
      />
      <Block factor={1} offset={0}>
        <Block factor={1.2} >
          <MultilineText top left size={w * 0.04} lineHeight={w / 10} position={[-w / 1.5, 0.5, -1]} color="white" text={"Dear Hiring Manager\nI am an aspiring web developer\n&\nsecond line of text"} />
        </Block>

        <Block factor={1.0}>
          <Html className="pointer-events-none pt-0 pr-0 pb-8 pl-14 w-max tracking-wider text-2xl flex flex-col gap-1" style={{ color: "white" }} position={[-canvasWidth / 2, -canvasHeight / 2, 0]}>
            <dl>
              <div className='flex gap-3 items-center '>
                <dt className='p-2'>🌇</dt>
                <dd>
                  a voratious appetite for building and learning
                </dd>
              </div>
              <div className='flex gap-3 items-center '>


                <dt className='p-2'>
                  👁️
                </dt>
                <dd>
                  an eye for detail
                </dd>
              </div>
              <div className='flex gap-3 items-center '>


                <dt className='p-2'>
                  🧑‍🚒
                </dt>
                <dd>
                  a respect for the programmers who paved the way
                </dd>
              </div>

            </dl>
          </Html>
        </Block>
      </Block>

      <VideoParagraph index={0} {...state.paragraphs[0]} image={images[0]} onClick={() => { alert('asdf') }} />

      <Hard index={1} {...state.paragraphs[1]} image={images[1]} />

      <Soft index={2} {...state.paragraphs[2]} image={images[2]} />

      {/* <LearnerProjects index={2} {...state.paragraphs[2]} image={images[2]} /> */}

      {/* {state.paragraphs.map((props, index) => (
        <Paragraph key={index} index={index} {...props} image={images[index]} />
      ))} */}

      <Block key={0} factor={-1.5} offset={0}>
        <Plane map={heroPic} args={[50, 5, 32, 32]} shift={-4} color='white' rotation={[0, 0, Math.PI / 8]} position={[0, 0, -10]} />
      </Block>

      <Block key={1} factor={-1.5} offset={3.2}>


        <Plane2 args={[50, 50, 32, 32]} shift={-4} color='white' rotation={[0, 0, Math.PI / 8]} position={[0, 0, -10]} />
      </Block>



    </>
  )
}