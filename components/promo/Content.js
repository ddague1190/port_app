import ReactDOM from "react-dom"
import React, { Suspense, useEffect, useRef, useMemo } from "react"
import { Canvas, useLoader, useFrame } from "@react-three/fiber"
import { Html } from "@react-three/drei"
import { TextureLoader, LinearFilter } from "three"
import lerp from "lerp"
import { Text, MultilineText } from "./Text"
import Plane from "./Plane"
import { Block, useBlock } from "../utilities/Blocks"
import state from "../../store"
import Paragraph from "./Paragraph"
import * as THREE from 'three'

export default function Content() {
  const images = useLoader(
    TextureLoader,
    state.paragraphs.map(({ image }) => image)
  )

  console.log(images)
  useMemo(() => images.forEach((texture, index) => {
    if(index==0) {
      texture.generateMipmaps = false
      // texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping
      texture.needsUpdate = true
    }
    (texture.minFilter = LinearFilter)
  }, [images]))
  const { contentMaxWidth: w, canvasWidth, canvasHeight, mobile } = useBlock()
  return (
    <>
      <Block factor={1} offset={0}>
        <Block factor={1.2}>
          <Text left size={w * 0.05} position={[-w / 1.5, 0.5, -1]} color="#2fe8c3">
            Dear Hiring Manager,
          </Text>
          <Text left size={w * 0.05} position={[-w / 2, -1.2, -1]} color="#2aa8c3">
            I am an aspiring
          </Text>
          <Text left size={w * 0.05} position={[-w / 2, -2.5, -1]} color="#2feaa3">
            web develepor
          </Text>
        </Block>
        <Block factor={1.0}>
          <Html className="pt-0 pr-0 pb-8 pl-14 md:w-max tracking-wider text-2xl flex flex-col gap-1" style={{ color: "white" }} position={[-canvasWidth / 2, -canvasHeight / 2, 0]}>
            <ul>
              <li>🌇 a voratious appetite for building and learning</li>
              <li>👁️ an eye for detail </li>
              <li>🧑‍🚒 a respect for the programmers who paved the way</li>
            </ul>
          </Html>
        </Block>
      </Block>
      <Block factor={1.2} offset={2.7}>
        <MultilineText top left size={w * 0.15} lineHeight={w / 5} position={[-w / 3.5, 0, -1]} color="#2fe8c3" text={"four\nzero\nzero"} />
      </Block>
      {state.paragraphs.map((props, index) => (
        <Paragraph key={index} index={index} {...props} image={images[index]} />
      ))}
      {state.stripes.map(({ offset, color, height }, index) => (
        <Block key={index} factor={-1.5} offset={offset}>
          <Plane args={[50, height, 32, 32]} shift={-4} color={color} rotation={[0, 0, Math.PI / 8]} position={[0, 0, -10]} />
        </Block>
      ))}
      <Block factor={1.25} offset={8}>
        <Html style={{ color: "white" }} className="pt-0 pr-0 pb-8 pl-14" position={[-canvasWidth / 2, -canvasHeight / 2, 0]}>
          Culture is not your friend.
        </Html>
      </Block>
    </>
  )
}