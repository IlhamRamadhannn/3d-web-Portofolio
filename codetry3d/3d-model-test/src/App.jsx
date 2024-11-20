import { useState, Suspense} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Computer from '../public/Computer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Canvas>
      <Suspense fallback={null}>
        <Computer></Computer>
      </Suspense>
    </Canvas>
    </>
  )
}

export default App
