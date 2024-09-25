import { useEffect, useRef, useState } from 'react'
import { useThree, MeshProps, useFrame } from '@react-three/fiber'
import gsap from '@/core/lib/gsap'
import ProjectPlaneShader from '@/components/canvas/shaders/ProjectPlaneShader/ProjectPlaneShader'
import * as THREE from 'three'
import useStore from '@/core/store'
import { useParams, usePathname } from 'next/navigation'

interface IProjectPlaneProps extends MeshProps {
  onClick?: () => void
  position: THREE.Vector3
}

const ProjectPlane = ({ onClick = () => {}, position, ...props }: IProjectPlaneProps) => {
  const [isActive, setIsActive] = useState(false)
  const { viewport } = useThree()
  const meshRef = useRef(null)
  const params = useParams()
  const pathname = usePathname()
  const { currentProject } = useStore((state) => ({
    currentProject: state.currentProject,
  }))

  useEffect(() => {
    if (currentProject && params?.project) {
      setIsActive(true)
      return
    }
    setIsActive(false)
  }, [currentProject, params])

  useEffect(() => {
    if (meshRef.current?.material) {
      gsap.to(meshRef.current.material.uniforms.uProgress, {
        value: isActive ? 1 : 0,
        duration: 1,
        ease: 'power4.inOut',
      })
    }
  }, [isActive, pathname])

  useFrame((_, delta) => {
    if (meshRef.current) {
      if (pathname.includes('/projects/')) {
        meshRef.current.material.uniforms.uTime.value += delta * 0.15
        return
      }
      meshRef.current.material.uniforms.uTime.value += delta * 0.5
    }
  })

  return (
    <group>
      <mesh ref={meshRef} castShadow position={position} scale={0.3}>
        <planeGeometry args={[viewport.width, viewport.height, 128, 128]} />
        <ProjectPlaneShader />
      </mesh>

      {isActive ? (
        <mesh position={[0, 0, 7]}>
          <planeGeometry args={[viewport.width, viewport.height]} />
          <meshBasicMaterial opacity={0} transparent />
        </mesh>
      ) : null}
    </group>
  )
}

export default ProjectPlane
