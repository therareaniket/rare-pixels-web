// 'use client'

// import gsap from 'gsap'
// import React, { useEffect, useMemo, useRef } from 'react'
// import * as THREE from 'three'
// import { useGLTF, useTexture, useAnimations } from '@react-three/drei'
// import { useThree, useFrame } from '@react-three/fiber'

// interface Model3DProps { activeIndex: number }

// const Model3D = ({ activeIndex }: Model3DProps) => {
//     const { scene, animations } = useGLTF('/models/eye.element.glb')
//     const { actions } = useAnimations(animations, scene)

//     useThree(({ camera, gl }) => {
//         camera.position.z = 0.55;
//         gl.toneMapping = THREE.ReinhardToneMapping;
//         gl.outputColorSpace = THREE.SRGBColorSpace;

//         gl.toneMapping = THREE.ACESFilmicToneMapping
//         gl.toneMappingExposure = 1.3

//     });

//     // Play first available animation, if any
//     useEffect(() => {
//         const firstAction = Object.values(actions)[0]
//         firstAction?.play()
//         const iridescentMaterial = createIridescentMaterial()

//         scene.traverse((child: any) => {
//             if (child.isMesh) {

//                 if (child.name.toLowerCase().includes('sphere')) {
//                     // ✅ Chrome spheres
//                     child.material = new THREE.MeshStandardMaterial({
//                         color: '#ffffff',
//                         metalness: 1,
//                         roughness: 0.05,
//                     })
//                 } else {
//                     // ✅ Main body → shader
//                     child.material = iridescentMaterial
//                 }
//             }
//         })

//     }, [actions, scene])

//     // Shared uniform refs so GSAP can animate them directly
//     const uniforms = useRef({
//         // uMatcap1: { value: matcaps[0] },
//         // uMatcap2: { value: matcaps[0] },
//         uProgress: { value: 1.0 },
//     })

//     const groupRef = useRef<THREE.Group>(null)
//     const mouse = useRef({ x: 0, y: 0 })

//     useEffect(() => {
//         const handleMouseMove = (e: MouseEvent) => {
//             // Normalize between -1 and +1
//             mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
//             mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
//         }

//         window.addEventListener('mousemove', handleMouseMove)

//         return () => { window.removeEventListener('mousemove', handleMouseMove) } 
//     }, [])

//     useFrame((state) => {
//         if (!groupRef.current) return

//         const targetX = mouse.current.x
//         const targetY = mouse.current.y

//         // 👉 2D FLOATING MOVEMENT — model drifts toward cursor
//         groupRef.current.position.x = THREE.MathUtils.lerp(
//             groupRef.current.position.x,
//             targetX * 0.4,        // was 0.2 — increase for wider horizontal drift
//             0.08                  // was 0.05 — snappier follow
//         )

//         groupRef.current.position.y = THREE.MathUtils.lerp(
//             groupRef.current.position.y,
//             targetY * 0.3 - 0.4,    // was 0.2 — increase for taller vertical drift
//             0.08
//         )
        
//         groupRef.current.position.z = THREE.MathUtils.lerp(
//             groupRef.current.position.z,
//             targetX * 1,
//             0.08
//         )

//         // 👉 ROTATION stays the same
//         groupRef.current.rotation.y = THREE.MathUtils.lerp(
//             groupRef.current.rotation.y,
//             Math.PI / 2 + targetX * 0.4,
//             0.05
//         )

//         groupRef.current.rotation.x = THREE.MathUtils.lerp(
//             groupRef.current.rotation.x,
//             targetY * 0.3,
//             0.05
//         )
//     })

//     const createIridescentMaterial = () => {
//         return new THREE.ShaderMaterial({
//             uniforms: {
//                 uColor1: { value: new THREE.Color('#ff4ecd') }, // pink
//                 uColor2: { value: new THREE.Color('#7b5cff') }, // purple
//                 uColor3: { value: new THREE.Color('#ff8a3d') }, // orange
//             },

//             vertexShader: `
//                 varying vec3 vNormal;
//                 varying vec3 vViewPosition;

//                 void main() {
//                     vNormal = normalize(normalMatrix * normal);

//                     vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
//                     vViewPosition = -mvPosition.xyz;

//                     gl_Position = projectionMatrix * mvPosition;
//                 }
//             `,

//             fragmentShader: `
//                 uniform vec3 uColor1;
//                 uniform vec3 uColor2;
//                 uniform vec3 uColor3;

//                 varying vec3 vNormal;
//                 varying vec3 vViewPosition;

//                 void main() {
//                     vec3 normal = normalize(vNormal);
//                     vec3 viewDir = normalize(vViewPosition);

//                     float gradientX = normal.x * 0.5 + 0.5;
//                     float gradientY = normal.y * 0.5 + 0.5;

//                     vec3 color = mix(uColor1, uColor2, gradientY);
//                     color = mix(color, uColor3, gradientX * 0.6);

//                     float fresnel = pow(1.0 - dot(normal, viewDir), 3.0);
//                     color += fresnel * 0.6;

//                     gl_FragColor = vec4(color, 1.0);
//                 }
//             `
//         })
//     }

//     return (
//         <primitive ref={groupRef} object={scene} position={[0, -0.4, 0]} scale={1} />
//     );
// }

// useGLTF.preload('/models/eye.element.glb')

// export default Model3D




// ALL MODELS ADD

'use client'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { MODEL_CONFIG } from './modelConfig'

// Preload all models upfront so switches feel instant
MODEL_CONFIG.forEach(({ modelPath }) => useGLTF.preload(modelPath))

interface Model3DProps {
  config: (typeof MODEL_CONFIG)[number]
}

const Model3D = ({ config }: Model3DProps) => {
  const groupRef = useRef<THREE.Group>(null)

  // null = no mouse event received yet → useFrame stays idle until user actually moves mouse
  const mouse = useRef<{ x: number; y: number } | null>(null)

  const { scene, animations } = useGLTF(config.modelPath)
  const { actions } = useAnimations(animations, scene)

  // Play the first baked animation if the GLB has one
  useEffect(() => {
    const first = Object.values(actions)[0]
    first?.reset().play()
  }, [actions])

  // Only start tracking after the first real mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Smooth scale + spin intro on every model swap
  useEffect(() => {
    if (!groupRef.current) return

    // Reset mouse so the new model also holds its position until user moves
    mouse.current = null

    gsap.fromTo(
      groupRef.current.scale,
      { x: 0.6, y: 0.6, z: 0.6 },
      { x: config.scale, y: config.scale, z: config.scale, duration: 0.9, ease: 'power3.out' }
    )

    gsap.fromTo(
      groupRef.current.rotation,
      { y: -1 },
      { y: Math.PI * 2, duration: 1.3, ease: 'power2.out' }
    )
  }, [config.scale])

  // Mouse interaction — skipped entirely until user moves the mouse
  useFrame(() => {
    if (!groupRef.current || mouse.current === null) return

    const { x: targetX, y: targetY } = mouse.current

    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      config.position[0] + targetX * 0.4,
      0.08
    )

    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      config.position[1] + targetY * 0.3,
      0.08
    )

    groupRef.current.position.z = THREE.MathUtils.lerp(
      groupRef.current.position.z,
      config.position[2] + targetX * 1,
      0.08
    )

    // groupRef.current.rotation.y = THREE.MathUtils.lerp(
    //   groupRef.current.rotation.y,
    //   targetX * 0.4, 0.05
    // )

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetX * 0.5,
      0.05
    )

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -targetY * 0.5,
      0.05
    )

    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      targetY * 0.5,
      0.05
    )
  })

  return (
    	<primitive ref={groupRef} object={scene} position={config.position} scale={config.scale} />
  	)
}

export default React.memo(Model3D)