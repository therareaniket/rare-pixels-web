// 'use client'

// import React, { Suspense } from 'react'
// import { Canvas } from '@react-three/fiber'
// import { OrbitControls, Environment } from '@react-three/drei'
// import Model3D from './Model3D'

// interface Scene3DProps { activeIndex: number }

// const Scene3D = ({ activeIndex }: Scene3DProps) => {
//     return (
//         <Canvas camera={{ position: [17, -2, 14], fov: 25 }} dpr={[1, 2]}>
//             <ambientLight intensity={0.5} />

//             <directionalLight position={[0, 5, 5]} color={0xffffff} intensity={10} />

//             <Suspense fallback={null}>
//                 <Model3D activeIndex={activeIndex} />
//             </Suspense>

//             <OrbitControls
//                 enableZoom={false}
//                 enablePan={false}
//                 // remove this line if you want full free rotation including up/down past the poles
//                 // maxPolarAngle={Math.PI / 1.5}
//                 // minPolarAngle={Math.PI / 3}
//             />
//             <Environment preset="studio" />
//         </Canvas>
//   )
// }

// export default Scene3D



'use client'
import React, { Suspense, useEffect } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import gsap from 'gsap'
import Model3D from './Model3D'
import { MODEL_CONFIG } from './modelConfig'

interface Scene3DProps {
  activeIndex: number
}

// Smooth camera transition between models.
// Spread target into primitives so the effect only fires when values actually change.
const CameraController = ({ x, y, z }: { x: number; y: number; z: number }) => {
  const { camera } = useThree()

  useEffect(() => {
    gsap.to(camera.position, {
      x,
      y,
      z,
      duration: 1.2,
      ease: 'power3.out',
    })
  }, [x, y, z])

  return null
}

const Scene3D = ({ activeIndex }: Scene3DProps) => {
  const config = MODEL_CONFIG[activeIndex]
  const [cx, cy, cz] = config.camera

  return (
    <Canvas camera={{ position: MODEL_CONFIG[0].camera, fov: 25 }} dpr={[1, 2]} >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} intensity={8} />

      <CameraController x={cx} y={cy} z={cz} />

      <Suspense fallback={null}>
        {/* key= unmounts/remounts Model3D on switch, triggering the GSAP intro */}
        <Model3D key={activeIndex} config={config} />
      </Suspense>

      <OrbitControls enableZoom={false} enablePan={false} />
      {/* <Environment preset="studio" /> */}
    </Canvas>
  )
}

export default Scene3D