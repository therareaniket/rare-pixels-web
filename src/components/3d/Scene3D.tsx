'use client'
import React, { Suspense, useEffect } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import gsap from 'gsap'
import Model3D from './Model3D'
import { MODEL_CONFIG } from './modelConfig'
import { useResponsiveCameraZ } from '../../hooks/useResponsiveCamera'

interface Scene3DProps { activeIndex: number }

// Smooth camera transition between models.
// Spread target into primitives so the effect only fires when values actually change.
const CameraController = ({ x, y, z }: { x: number; y: number; z: number }) => {
  	const { camera } = useThree()
    useEffect(() => { gsap.to(camera.position, { x, y, z, duration: 1.2, ease: 'power3.out', }) }, [x, y, z])
  	return null
}

const Scene3D = ({ activeIndex }: Scene3DProps) => {
  	const config = MODEL_CONFIG[activeIndex]
	// const zMultiplier = useResponsiveCameraZ()
	const { zMultiplier, xOffset } = useResponsiveCameraZ()
	
  	const [cx, cy, cz] = config.camera
	const responsiveCx = cx + xOffset
	const responsiveCz = cz * zMultiplier

	// Also scale the initial camera Z for Canvas on first mount
  	const [icx, icy, icz] = MODEL_CONFIG[0].camera
  	const initialCamera: [number, number, number] = [icx + xOffset, icy, icz * zMultiplier]
	
  	return (

		<Canvas camera={{ position:initialCamera, fov: 25 }} dpr={[1, 2]} className='canvas-3d-wrapper'>
			<ambientLight intensity={0.5} />
			<directionalLight position={[0, 5, 5]} intensity={8} />

			<CameraController x={responsiveCx} y={cy} z={responsiveCz} />

			<Suspense fallback={null}>
				{/* key= unmounts/remounts Model3D on switch, triggering the GSAP intro */}
				<Model3D key={activeIndex} config={config} xOffset={xOffset} />
			</Suspense>

			{/* <OrbitControls enableZoom={false} enablePan={false} /> */}
			{/* <Environment preset="studio" /> */}
		</Canvas>
  )
}

export default Scene3D