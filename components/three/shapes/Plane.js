export default function Plane({ color = "white", ...props }) {
    return (
      <mesh {...props}>
        <planeGeometry />
        <meshBasicMaterial color={color} />
      </mesh>
    )
  }
  