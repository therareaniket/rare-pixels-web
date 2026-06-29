'use client'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { MODEL_CONFIG } from './modelConfig'

MODEL_CONFIG.forEach(({ modelPath }) => useGLTF.preload(modelPath))

interface Model3DProps {
  	config: (typeof MODEL_CONFIG)[number]
}

// How far right the model starts (in world units) — tune this to taste
const ENTRY_OFFSET_X = 6
const ENTRY_SCALE    = 2

const Model3D = ({ config }: Model3DProps) => {
	const groupRef = useRef<THREE.Group>(null)
	const mouse = useRef<{ x: number; y: number } | null>(null)
	const lastMouseMove = useRef<number | null>(null)

	const { scene, animations } = useGLTF(config.modelPath)
	const { actions } = useAnimations(animations, scene)

	useEffect(() => {
		const first = Object.values(actions)[0]
		first?.reset().play()
	}, [actions])

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
		lastMouseMove.current = Date.now()
		mouse.current = {
			x: (e.clientX / window.innerWidth) * 2 - 1,
			y: -(e.clientY / window.innerHeight) * 2 + 1,
		}
		}
		window.addEventListener('mousemove', handleMouseMove)
		return () => window.removeEventListener('mousemove', handleMouseMove)
	}, [])

	useEffect(() => {
		const group = groupRef.current
		if (!group) return

		// Reset mouse so useFrame doesn't fight GSAP mid-animation
		mouse.current = null
		lastMouseMove.current = null
		idleClock.current = 0

		// Kill any running GSAP tweens on this object to avoid conflicts
		gsap.killTweensOf(group.position)
		gsap.killTweensOf(group.scale)
		gsap.killTweensOf(group.rotation)

		// Hard-set the START state immediately (right side, big)
		group.position.set(
		config.position[0] + ENTRY_OFFSET_X,
		config.position[1],
		config.position[2] + ENTRY_OFFSET_X
		)
		group.scale.set(ENTRY_SCALE, ENTRY_SCALE, ENTRY_SCALE)
		group.rotation.y = Math.PI * 2

		// Animate INTO the resting position
		gsap.to(group.position, {
		x: config.position[0],
		y: config.position[1],
		z: config.position[2],
		duration: 0.9,
		ease: 'power3.out',
		})

		gsap.to(group.scale, {
		x: config.scale,
		y: config.scale,
		z: config.scale,
		duration: 0.9,
		ease: 'power3.out',
		})

		gsap.to(group.rotation, {  // ← add this block
		y: 0,
		duration: 3,
		ease: 'power3.out',
		})

	}, [config.modelPath]) // ← modelPath is unique per model, always fires

  	const idleClock = useRef(0)

	// useFrame(({ camera, size }) => {
	// 	if (!groupRef.current || mouse.current === null) return
		
	// 	// Sine wave on Z axis = zoom in/out (adjust * 0.5 for breath depth)
	// 	const isIdle = lastMouseMove.current !== null && Date.now() - lastMouseMove.current > 50
		
	// 	if (isIdle) {
	// 		idleClock.current += 0.02
	// 		const breathZ = Math.sin(idleClock.current) * 0.5  // ← 0.5 = how far it zooms

	// 		// Snap back to rest position when mouse stops
	// 		groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, config.position[0], 0.05)
	// 		groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, config.position[1], 0.05)
	// 		groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, config.position[2] + breathZ, 0.05)

	// 		groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, 0, 0.05)
	// 		groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, 0, 0.05)
	// 		groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, 0, 0.05)
			
	// 	} else {
	// 		const { x: mouseX, y: mouseY } = mouse.current
	// 		idleClock.current = 0

	// 		// Unproject mouse NDC coords into world space at the model's Z depth
	// 		const worldTarget = new THREE.Vector3(mouseX, mouseY, 0.5)
	// 		worldTarget.unproject(camera)

	// 		// Direction from camera to that world point
	// 		const dir = worldTarget.sub(camera.position).normalize()

	// 		// Travel along that ray to reach the model's Z plane
	// 		const distance = (config.position[2] - camera.position.z) / dir.z
	// 		const targetPos = camera.position.clone().add(dir.multiplyScalar(distance))

	// 		// LEASH — clamp how far from rest position the model can drift
	// 		const leashRadius = 3  // ← tune this: higher = follows further
	// 		const offset = new THREE.Vector2(
	// 			targetPos.x - config.position[0],
	// 			targetPos.y - config.position[1]
	// 		)
	// 		if (offset.length() > leashRadius) {
	// 			offset.setLength(leashRadius)
	// 		}

	// 		// Smooth follow (towing van lag — lower = more lag, higher = snappier)
	// 		const followSpeed = 0.09  // ← tune this
	// 		groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, config.position[0] + offset.x, followSpeed)
	// 		groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, config.position[1] + offset.y, followSpeed)
	// 		groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, config.position[2], followSpeed)

	// 		// Tilt to face direction of travel
	// 		groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, offset.x * 0.4, 0.05)
	// 		groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -offset.y * 0.3, 0.05)
	// 		groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, offset.y * 0.2, 0.05)
	// 	}
	// })

	// Don't pass position/scale as props — GSAP and useFrame own those now
	
	useFrame(({ camera }) => {
		if (!groupRef.current) return  // ← removed mouse.current === null check

		const isIdle =
			mouse.current === null ||     // ← null mouse = always idle (model just swapped)
			(lastMouseMove.current !== null && Date.now() - lastMouseMove.current > 50)

		if (isIdle) {
			idleClock.current += 0.01

			const breathZ = Math.sin(idleClock.current) * 0.5

			groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, config.position[0], 0.05)
			groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, config.position[1], 0.05)
			groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, config.position[2] + breathZ, 0.05)

			groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, 0, 0.05)
			groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, 0, 0.05)
			groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, 0, 0.05)
		} else {
			idleClock.current = 0  // reset so breath always starts from 0 when idle resumes

			const { x: mouseX, y: mouseY } = mouse.current!

			const worldTarget = new THREE.Vector3(mouseX, mouseY, 0.5)
			worldTarget.unproject(camera)

			const dir = worldTarget.sub(camera.position).normalize()
			const distance = (config.position[2] - camera.position.z) / dir.z
			const targetPos = camera.position.clone().add(dir.multiplyScalar(distance))

			const leashRadius = 3
			const offset = new THREE.Vector2(
			targetPos.x - config.position[0],
			targetPos.y - config.position[1]
			)
			if (offset.length() > leashRadius) offset.setLength(leashRadius)

			const followSpeed = 0.09
			groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, config.position[0] + offset.x, followSpeed)
			groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, config.position[1] + offset.y, followSpeed)
			groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, config.position[2], followSpeed)

			groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, offset.x * 0.4, 0.05)
			groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -offset.y * 0.3, 0.05)
			groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, offset.y * 0.2, 0.05)
		}
	})

	return <primitive ref={groupRef} object={scene} />
}

export default React.memo(Model3D)