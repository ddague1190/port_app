import {Html} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react';
import Sohail from "../../components/three/Sohail";
import React from 'react'
import GatbsyStars from "../../components/three/gatsbystarts";

const Practice = () => {
  return (
    <div className="w-screen h-screen">
      <GatbsyStars/>

    </div>
  )
}

export default Practice