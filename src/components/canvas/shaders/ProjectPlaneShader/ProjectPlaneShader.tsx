// @ts-nocheck
import * as THREE from 'three'
import { extend, useFrame, useThree } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import vertex from './glsl/shader.vert'
import fragment from './glsl/shader.frag'
import { forwardRef, use, useEffect, useImperativeHandle, useLayoutEffect, useRef, useState } from 'react'
import { useControls } from 'leva'
import useStore from '@/core/store'
import gsap, { useGSAP } from '@/core/lib/gsap'
import { useDeviceType } from '@/core/hooks/useDeviceType'
import { is } from '@react-three/fiber/dist/declarations/src/core/utils'

interface ProjectPlaneShaderProps {
  texture?: THREE.Texture
  [key: string]: any // For any additional props
}

const ProjectPlaneShaderImpl = shaderMaterial(
  {
    uTime: 0,
    uTexture: null,
    uAspect: 1,
    uProgress: 0,
    uTriptychBlend: 0,
    uFbiBlend: 0,
    uSanctaviaBlend: 0,
    uWindRiverBlend: 0,
    uMetaBlend: 0,
    uMastercardBlend: 0,
    uEpbBlend: 0,
    uLMBlend: 0,
    uPanasonicBlend: 0,
    uRobinKnowsBlend: 0,
    uSpareTeethBlend: 0,
    uVolkswagenBlend: 0,
    uJRadioBlend: 0,
    uNorthfaceBlend: 0,
    uIsMobile: false,
    uIsTablet: false,
  },
  vertex,
  fragment,
)

extend({ ProjectPlaneShaderImpl })

const ProjectPlaneShader = forwardRef<ShaderMaterial, ProjectPlaneShaderProps>(({ texture, ...props }, ref) => {
  const localRef = useRef(null)
  const { currentProject } = useStore((state) => ({
    currentProject: state.currentProject,
  }))

  const { isMobile, isTablet } = useDeviceType()

  useImperativeHandle(ref, () => localRef.current)

  useGSAP(() => {
    const duration = 1
    const ease = 'ease.inOut'
    gsap.to(localRef.current, { uTriptychBlend: currentProject?.uri === 'triptych' ? 1 : 0, duration, ease })
    gsap.to(localRef.current, { uFbiBlend: currentProject?.uri === 'fbi' ? 1 : 0, duration, ease })
    gsap.to(localRef.current, { uSanctaviaBlend: currentProject?.uri === 'sanctavia' ? 1 : 0, duration, ease })
    gsap.to(localRef.current, { uWindRiverBlend: currentProject?.uri === 'wind-river' ? 1 : 0, duration, ease })
    gsap.to(localRef.current, { uMetaBlend: currentProject?.uri === 'meta' ? 1 : 0, duration, ease })
    gsap.to(localRef.current, { uMastercardBlend: currentProject?.uri === 'mastercard' ? 1 : 0, duration, ease })
    gsap.to(localRef.current, { uEpbBlend: currentProject?.uri === 'epb' ? 1 : 0, duration, ease })
    gsap.to(localRef.current, {
      uLMBlend: currentProject?.uri === 'lumber-marketplace' ? 1 : 0,
      duration,
      ease,
    })
    gsap.to(localRef.current, { uPanasonicBlend: currentProject?.uri === 'panasonic' ? 1 : 0, duration, ease })
    gsap.to(localRef.current, { uRobinKnowsBlend: currentProject?.uri === 'robin-knows' ? 1 : 0, duration, ease })
    gsap.to(localRef.current, { uSpareTeethBlend: currentProject?.uri === 'spare-teeth' ? 1 : 0, duration, ease })
    gsap.to(localRef.current, { uVolkswagenBlend: currentProject?.uri === 'vw' ? 1 : 0, duration, ease })
    gsap.to(localRef.current, { uJRadioBlend: currentProject?.uri === 'jradio' ? 1 : 0, duration, ease })
    gsap.to(localRef.current, { uNorthfaceBlend: currentProject?.uri === 'northface' ? 1 : 0, duration, ease })
  }, [currentProject])

  const { viewport } = useThree()

  useLayoutEffect(() => {
    localRef.current.uAspect = viewport.width / viewport.height
  }, [viewport.width, viewport.height])

  useLayoutEffect(() => {
    if (texture) {
      console.log('texture: ', texture)
      localRef.current.uTexture = texture
    }
  }, [texture])

  useLayoutEffect(() => {
    if (isMobile) {
      localRef.current.uIsMobile = true
    }
  }, [isMobile])

  useLayoutEffect(() => {
    if (isTablet) {
      localRef.current.uIsTablet = true
    }
  }, [isTablet])

  return (
    <projectPlaneShaderImpl
      glsl={THREE.GLSL3}
      ref={localRef}
      attach='material'
      uTexture={texture || null}
      uProgress={0}
      uAspect={viewport.width / viewport.height}
      uTriptychBlend={0} // Initialize triptych blend to 0
      uFbiBlend={0} // Initialize fbi blend to 0
      uSanctaviaBlend={0}
      uWindRiverBlend={0}
      uMetaBlend={0}
      uMastercardBlend={0}
      uEpbBlend={0}
      uLMBlend={0}
      uPanasonicBlend={0}
      uRobinKnowsBlend={0}
      uSpareTeethBlend={0}
      uVolkswagenBlend={0}
      uJRadioBlend={0}
      uIsMobile={isMobile}
      uIsTablet={isTablet}
      {...props}
    />
  )
})

export default ProjectPlaneShader
