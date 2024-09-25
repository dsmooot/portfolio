import { ScrollScene, UseCanvas, ViewportScrollScene, styles, useImageAsTexture } from '@14islands/r3f-scroll-rig'
import { MutableRefObject, useRef } from 'react'
import cx from 'classnames'
import { MeshDistortMaterial, useTexture } from '@react-three/drei'

interface ImageProps {
  src: string
  className?: string
}

function WebGLImage({ ...props }) {
  const texture = useTexture('/img/waves-dark.png')
  return (
    <mesh {...props} position={[0, 0, 0]} scale={1}>
      <planeGeometry args={[1, 1, 16, 16]} />
      <MeshDistortMaterial map={texture} radius={0.99} distort={0.2} speed={3} />
    </mesh>
  )
}

export default function Image({ src, className }: ImageProps) {
  const imageEl = useRef<HTMLImageElement>(null)
  const el = useRef<HTMLDivElement>(null)
  return (
    <div ref={el} className={cx('size-full border border-red-500')}>
      {/* <img ref={imageEl} className={cx(styles.hiddenWhenSmooth, className, 'hidden')} src={src} /> */}
      <UseCanvas>
        <ScrollScene track={el as MutableRefObject<HTMLElement>}>{({ scale }) => <WebGLImage />}</ScrollScene>
      </UseCanvas>
    </div>
  )
}
