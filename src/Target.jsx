import { meshBounds, useGLTF } from '@react-three/drei'
import React from 'react'

const Target = (props) => {
    const targetref = useRef();
    const{ scene } = useGLTF("/cursor.glb")
  return (
    <mesh{...props} ref={targetRef}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Target