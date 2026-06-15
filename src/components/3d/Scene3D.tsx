'use client'

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Model3D from './Model3D'

interface Scene3DProps { activeIndex: number }

const Scene3D = ({ activeIndex }: Scene3DProps) => {
    return (
        <Canvas camera={{ position: [16, -2, 8], fov: 26 }} dpr={[1, 2]}>
            <ambientLight intensity={0.5} />

            <directionalLight position={[0, 5, 5]} color={0xffffff} intensity={10} />

            <Suspense fallback={null}>
                <Model3D activeIndex={activeIndex} />
            </Suspense>

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                // remove this line if you want full free rotation including up/down past the poles
                // maxPolarAngle={Math.PI / 1.5}
                // minPolarAngle={Math.PI / 3}
            />
        </Canvas>
  )
}

export default Scene3D