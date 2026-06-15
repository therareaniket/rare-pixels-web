'use client'

import React, { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useGLTF, useTexture, useAnimations } from '@react-three/drei' 
import { useThree, useFrame } from '@react-three/fiber'
import gsap from 'gsap'

interface Model3DProps {
  activeIndex: number
}

// One matcap per service — add/replace paths as needed
const MATCAP_PATHS = [
//   '/matcap/mat-1.png',
//   '/matcap/mat-2.png',
//   '/matcap/mat-3.png',
//   '/matcap/mat-4.png',
]

const Model3D = ({ activeIndex }: Model3DProps) => {
  const { scene, animations } = useGLTF('/models/eye.element.glb')
  const { actions } = useAnimations(animations, scene)

  useThree(({ camera, gl }) => {
    camera.position.z = 0.55
    gl.toneMapping = THREE.ReinhardToneMapping
    gl.outputColorSpace = THREE.SRGBColorSpace
  })

  // Play first available animation, if any
  useEffect(() => {
    const firstAction = Object.values(actions)[0]
    firstAction?.play()
  }, [actions])

  const matcaps = useTexture(MATCAP_PATHS) as THREE.Texture[]

  useEffect(() => {
    matcaps.forEach((tex) => {
      tex.colorSpace = THREE.SRGBColorSpace
    })
  }, [matcaps])

  // Shared uniform refs so GSAP can animate them directly
  const uniforms = useRef({
    uMatcap1: { value: matcaps[0] },
    uMatcap2: { value: matcaps[0] },
    uProgress: { value: 1.0 },
  })

  const material = useMemo(() => {
    const mat = new THREE.MeshMatcapMaterial({
      matcap: matcaps[0],
    })

    mat.onBeforeCompile = (shader) => {
      shader.uniforms.uMatcapTexture1 = uniforms.current.uMatcap1
      shader.uniforms.uMatcapTexture2 = uniforms.current.uMatcap2
      shader.uniforms.uProgress = uniforms.current.uProgress

      shader.fragmentShader = shader.fragmentShader.replace(
        'void main() {',
        `
        uniform sampler2D uMatcapTexture1;
        uniform sampler2D uMatcapTexture2;
        uniform float uProgress;

        void main() {
        `
      )

      shader.fragmentShader = shader.fragmentShader.replace(
        'vec4 matcapColor = texture2D( matcap, uv );',
        `
        vec4 matcapColor1 = texture2D( uMatcapTexture1, uv );
        vec4 matcapColor2 = texture2D( uMatcapTexture2, uv );
        float transitionFactor = 0.2;

        float progress = smoothstep(uProgress - transitionFactor, uProgress, (vViewPosition.x + vViewPosition.y) * 0.5 + 0.5);

        vec4 matcapColor = mix(matcapColor2, matcapColor1, progress);
        `
      )
    }

    return mat
  }, [matcaps])

  // Apply material to every mesh in the model
  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        ;(child as THREE.Mesh).material = material
      }
    })
  }, [scene, material])

  // Crossfade matcap whenever the active service changes
  useEffect(() => {
    const nextMatcap = matcaps[activeIndex % matcaps.length]
    uniforms.current.uMatcap1.value = nextMatcap

    gsap.to(uniforms.current.uProgress, {
      value: 0.0,
      duration: 0.5,
      ease: 'power2.inOut',
      onComplete: () => {
        uniforms.current.uMatcap2.value = uniforms.current.uMatcap1.value
        uniforms.current.uProgress.value = 1.0
      },
    })
  }, [activeIndex, matcaps])

    const groupRef = useRef<THREE.Group>(null)
    const mouse = useRef({ x: 0, y: 0 })

    useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        // Normalize between -1 and +1
        mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
        mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
        window.removeEventListener('mousemove', handleMouseMove)
    }
    }, [])

    useFrame((_, delta) => {
        if (!groupRef.current) return

        const targetX = mouse.current.x
        const targetY = mouse.current.y

        // 👉 POSITION (move model)
        groupRef.current.position.x = THREE.MathUtils.lerp(
            groupRef.current.position.x,
            targetX * 0.2,
            0.05
        )

        groupRef.current.position.y = THREE.MathUtils.lerp(
            groupRef.current.position.y,
            targetY * 0.2 - 0.4, // keep your base offset
            0.05
        )

        // 👉 ROTATION (tilt model)
        groupRef.current.rotation.y = THREE.MathUtils.lerp(
            groupRef.current.rotation.y,
            Math.PI / 2 + targetX * 0.4, // base rotation + mouse
            0.05
        )

        groupRef.current.rotation.x = THREE.MathUtils.lerp(
            groupRef.current.rotation.x,
            targetY * 0.3,
            0.05
        )
    })


    return (
        <primitive ref={groupRef} object={scene} position={[0, -0.4, 0]} scale={1} />
    );
}

useGLTF.preload('/models/eye.element.glb')

export default Model3D