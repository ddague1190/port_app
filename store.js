import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  sections: 5,
  pages: 5,
  zoom: 50,
  paragraphs: [
    {
      offset: 1,
      factor: 1.75,
      header: "Capstone Project",
      image: "/images/asdf.jpg",
      aspect: 1.5,
      text: "An e-commerce platform built for local tackle supply company. Built with Django and React."
    },
    {
      offset: 1.9,
      factor: 2.0,
      header: "Hard skills",
      image: "/langicons.png",
      aspect: 1.5,
      text:
        ""
    },
    {
      offset: 2.8,
      factor: 3,
      header: "Other skills",
      image: "/images/calculator.png",
      aspect: 1.5037,
      text:
        ""
    },
    {
      offset: 4,
      factor: 2.0,
      header: "Other projects",
      image: "/images/calculator.png",
      aspect: 0.665,
      text:
        ""
    },
    {
      offset: 5,
      factor: 1.75,
      header: "Contact Me",
      image: "/images/calculator.png",
      aspect: 1.55,
      text:
        ""
    }
  ],
  stripes: [
    { offset: 0, color: "#a1a1a1", height: 5 },
    { offset: 3, color: "white", height: 20 }
  ],
  diamonds: [
    // { x: 0, offset: 0.15, pos: new Vector3(), scale: 14, factor: 4 },
    { x: 2.5, offset: 2, pos: new Vector3(), scale: 6, factor: 2},
    // { x: -5, offset: 2, pos: new Vector3(), scale: 1.8, factor: 2.5 },
  ],
  top: createRef()
}

export default state
