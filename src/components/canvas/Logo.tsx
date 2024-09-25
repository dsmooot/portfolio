import { UseCanvas, ViewportScrollScene } from '@14islands/r3f-scroll-rig'
import { OrthographicCamera, TorusKnot } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { MutableRefObject, useRef } from 'react'
import * as THREE from 'three'

const LogoScene = ({ ...props }) => {
  const boxRef = useRef<THREE.Mesh>(null)
  useFrame(() => {
    if (boxRef.current) {
      boxRef.current.rotation.y += 0.01
    }
  })
  return (
    <>
      <OrthographicCamera makeDefault position={[0, 0.07, 1]} zoom={200} />
      <directionalLight intensity={1} position={[0, 1, 0]} />
      <ambientLight intensity={1} />
      {/* <Box ref={boxRef} scale={0.1} rotation={[Math.PI / 4, 0, 0]}>
        <meshStandardMaterial color='pink' />
      </Box> */}
      <TorusKnot ref={boxRef} {...props} scale={0.05}>
        <meshStandardMaterial color='lightblue' />
      </TorusKnot>
    </>
  )
}

export default function Logo() {
  const el = useRef<HTMLDivElement>(null)

  return (
    <div ref={el} className='relative size-[64px]'>
      <UseCanvas>
        <ViewportScrollScene track={el as MutableRefObject<HTMLElement>}>
          {(props) => <LogoScene />}
        </ViewportScrollScene>
      </UseCanvas>
    </div>
  )
}
