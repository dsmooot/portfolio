// @ts-nocheck
import * as THREE from 'three'
import { extend, useFrame } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import vertex from './glsl/shader.vert'
import fragment from './glsl/shader.frag'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import { useControls } from 'leva'

interface MarbleShaderProps {
  [key: string]: any
}

const MarbleShaderImpl = shaderMaterial(
  {
    uTime: 0,
  },
  vertex,
  fragment,
)

extend({ MarbleShaderImpl })

// eslint-disable-next-line react/display-name
const MarbleShader = forwardRef<ShaderMaterial, MarbleShaderProps>(({ ...props }, ref) => {
  const localRef = useRef(null)

  useImperativeHandle(ref, () => localRef.current)

  // const { progress } = useControls({
  //   progress: { value: 0, min: 0, max: 1, step: 0.01 },
  // })

  useFrame((_, delta) => {
    if (localRef.current) {
      localRef.current.uTime += delta
    }
  })

  return <marbleShaderImpl glsl={THREE.GLSL3} ref={localRef} attach='material' {...props} />
})

export default MarbleShader
