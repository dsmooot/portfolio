'use client'

import { ScrollScene, UseCanvas } from '@14islands/r3f-scroll-rig'
import { useFrame, useThree } from '@react-three/fiber'
import { MutableRefObject, useEffect, useLayoutEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import Gramps from '@/components/canvas/models/Gramps'
import {
  CameraControls,
  CloudInstance,
  Clouds,
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  OrbitControls,
  Sphere,
  useTexture,
} from '@react-three/drei'
import { Plane } from '@react-three/drei'
import MarbleShader from '@/components/canvas/shaders/MarbleShader/MarbleShader'
import { usePathname } from 'next/navigation'
import ProjectPlane from './pages/projects/ProjectPlane'
import Me from './models/Me'
import Me2 from './models/Me2'
import Me3 from './models/Me3'
import { easing } from 'maath'
import { useDeviceType } from '@/core/hooks/useDeviceType'
import Me4 from './models/Me4'
import gsap from '@/core/lib/gsap'

const Scene = ({ scrollState, ...props }) => {
  const pathname = usePathname()
  const { controls, viewport } = useThree()
  const character = useRef(null)
  const shader = useRef(null)
  const bubbleRef = useRef(null)
  const sphereRef = useRef(null)
  const { isMobile, isTablet } = useDeviceType()
  const [sphereActive, setSphereActive] = useState(false)

  useEffect(() => {
    if (character.current) {
      const mesh = character.current.children[0]
      mesh.material.opacity = 1
      mesh.material.transparent = true
      mesh.material.needsUpdate = true
    }
  }, [character.current])

  useEffect(() => {
    if (shader.current) {
      shader.current.opacity = 1
      shader.current.transparent = true
      shader.current.needsUpdate = true
    }
  }, [shader.current])

  // useEffect(() => {
  //   if (controls && character.current) {
  //     const { x, y, z } = character.current.position
  //     //@ts-ignore
  //     controls.setOrbitPoint(x, y, z)
  //   }
  // }, [controls, character])

  useFrame(({ camera, clock, pointer, viewport }, delta) => {
    if (pathname === '/') {
      easing.damp3(camera.position, [(pointer.x * viewport.width) / 10, (1 + pointer.y) / 5, 8], 0.5, delta)
      camera.lookAt(0, 0, 0)
    }
    // if (pathname === '/info') {
    //   easing.damp3(camera.position, [(-pointer.x * viewport.width) / 5, 1 + pointer.y * 2, 8], 0.5, delta)
    //   camera.lookAt(0, 0, 0)
    // }

    if (shader.current) {
      shader.current.uniforms.uTime.value = clock.getElapsedTime() * 0.1

      if (bubbleRef.current && !isMobile && !isTablet) {
        const targetY = (pointer.y * viewport.height) / 2
        const targetX = (pointer.x * viewport.width) / 2

        bubbleRef.current.position.y = THREE.MathUtils.lerp(bubbleRef.current.position.y, targetY, 0.005)

        // if (targetX <= 2.8)
        bubbleRef.current.position.x = THREE.MathUtils.lerp(bubbleRef.current.position.x, targetX, 0.005)
      }
    }
  })

  const texDark = useTexture('/img/waves-dark.png')
  const texLight = useTexture('/img/waves.png')

  const toggleSphere = (active: boolean) => {
    if (sphereRef.current) {
      gsap.to(sphereRef.current.scale, {
        x: active ? 0.12 : 0.09,
        y: active ? 0.12 : 0.09,
        z: active ? 0.12 : 0.09,
        duration: 0.3,
        ease: 'ease.inOut',
      })
      gsap.to(sphereRef.current.material, {
        distort: active ? 0.6 : 0.1,
        speed: active ? 30 : 1,
        duration: 0.3,
        ease: 'ease.inOut',
      })
      setSphereActive(!sphereActive)
    }
  }

  return (
    <>
      <OrbitControls makeDefault enabled={pathname === '/' && (isMobile || isTablet)} enableZoom={false} />
      <ambientLight intensity={2} />
      <group visible={pathname === '/'}>
        <Plane args={[60, 20]} position={[10, 0, -20]}>
          <MarbleShader attach='material' ref={shader} transparent />
        </Plane>
        <group position={isMobile ? [0, -1.1, -2] : isTablet ? [1, -3, -3] : [4, -3, -3]} scale={isMobile ? 0.7 : 1}>
          {/* <Me ref={character} {...props} scale={3} position={[0, -3, -3]} rotation={[0, (11 * Math.PI) / 6, 0]} /> */}
          {/* <Me2
            ref={character}
            {...props}
            scale={3}
            position={[0, 0, 0]}
            rotation={isMobile ? [0, 0, 0] : [0, (11 * Math.PI) / 6, 0]}
          /> */}
          <Me4
            ref={character}
            {...props}
            scale={3}
            position={[0, 0, 0]}
            rotation={isMobile ? [0, 0, 0] : [0, (11 * Math.PI) / 6, 0]}
          />
          {/* <Me3 ref={character} {...props} scale={3} position={[0, 0.5, 0]} rotation={[0, 0, 0]} /> */}
          <Float speed={6} rotationIntensity={0} floatIntensity={0.3}>
            <Sphere
              ref={sphereRef}
              args={[2, 32, 32]}
              position={[-0.7, 3.5, 0]}
              scale={0.09}
              onClick={() => {
                if (isMobile) toggleSphere(!sphereActive)
              }}
              onPointerEnter={() => {
                toggleSphere(true)
              }}
              onPointerLeave={() => {
                toggleSphere(false)
              }}
            >
              <MeshDistortMaterial attach={'material'} map={texDark} roughness={1} distort={0.1} />
            </Sphere>
          </Float>
        </group>
      </group>
      <group ref={bubbleRef} visible={pathname.includes('/projects')}>
        <ProjectPlane
          position={isMobile || isTablet ? new THREE.Vector3(0, -4, -2) : new THREE.Vector3(6, 0, -2)}
          {...props}
        />
      </group>
      <group visible={pathname === '/info'}>
        <mesh {...props} position={[0, 0, 0]} scale={[viewport.width * 1.2, viewport.height * 1.2, 1]}>
          <planeGeometry args={[1, 1, 16, 16]} />
          <MeshWobbleMaterial map={texLight} speed={0.5} factor={0.5} />
        </mesh>
      </group>
    </>
  )
}

export default function MainScene() {
  const el = useRef<HTMLDivElement>(null)
  return (
    <div ref={el} className='absolute flex size-full flex-col items-center justify-center'>
      <UseCanvas>
        <ScrollScene hideOffscreen={false} track={el as MutableRefObject<HTMLElement>}>
          {(props) => <Scene {...props} />}
        </ScrollScene>
      </UseCanvas>
    </div>
  )
}
