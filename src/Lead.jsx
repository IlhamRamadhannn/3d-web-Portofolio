import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { Environment, OrbitControls } from '@react-three/drei';
import { Leva } from 'leva';
import './index.css';
import Computer from '../public/Computer';
import CanvasLoader from './components/CanvasLoader';
import { useMediaQuery } from 'react-responsive';

const Lead = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section className="min-h-screen flex flex-col relative">
      <div className="flex w-full h-full items-center justify-between p-6 sm:flex-row flex-col">
        
        {/* Left Side: Text Section */}
        <div className="flex flex-col sm:items-start items-center sm:w-1/2 w-full sm:mb-0 mb-10">
          <p className="font-semibold sm:text-4xl text-2xl text-white text-center font-generalisans">
            Hi, I am Ilham Syahrul Ramadhan! <span className="waving-hand">👋</span>
          </p>
          <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl text-center">
            I’m a Computer Science Major at Binus University. <br />
            I specialize in front-end web development and UI/UX design.
          </p>

          <Leva />
        </div>

        {/* Right Side: 3D Computer Model */}
        <div className="sm:w-1/2 w-full h-full relative">
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera/>
              <ambientLight intensity={1} />
              <OrbitControls />
              <Computer
                rotation={[0, -0.5, 0]}
                position={[2, -1, -2.5]} // Adjusted for right-side alignment
                scale={0.5}
              />
            </Suspense>
            <Environment preset="sunset" />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Lead;
