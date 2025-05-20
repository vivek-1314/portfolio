'use client'

import { useEffect , useRef } from 'react'
import { Canvas , useFrame , useThree } from '@react-three/fiber'
import { useGLTF, useAnimations , Environment , OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function Model() {
    const { scene, animations } = useGLTF('/3dglbs/Rock.glb')
    const { actions, mixer } = useAnimations(animations, scene)
    const scrollProgress = useRef(0)
    const ref = useRef<THREE.Group>(null)

    const { mouse } = useThree()


    useEffect(() => {
    for (let key in actions) {
    
      if(actions[key]) {
        actions[key].paused = true
        actions[key].play()
        actions[key].time = 0
      }
    }

    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      scrollProgress.current = Math.min(scrollTop / docHeight, 1)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [actions])

  useFrame(() => {
    if (ref.current) {
  
      ref.current.rotation.y = THREE.MathUtils.lerp(
        ref.current.rotation.y,
        mouse.x * Math.PI, 
        0.05 
      )
    }
  })

  useFrame((state, delta) => {
    for (let key in actions) {
    const action = actions[key]
    if (action) {
        const duration = action.getClip().duration
        action.time = scrollProgress.current * duration
        mixer.update(0) 
    }
}

  })

  return <primitive ref={ref} object={scene} />
}

function GroundCircle() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
      <circleGeometry args={[20, 64]} /> {/* radius = 5, segments = 64 */}
      <meshStandardMaterial color="white" />
    </mesh>
  )
}

export default function ThreeJSScene() {

    return (
    <Canvas style={{ height: '100%', width: '100%' }} camera={{ position: [1.6, -1, 5], fov: 75 }} gl={{ antialias: true }}>
      <ambientLight color="#ffffff" intensity={0.1} />
      <directionalLight
        position={[2, 5, 2]} 
        intensity={0.1}
      />
      <group position={[0, -3, 0]}>
        <Model />
        </group>
      <GroundCircle />
      <Environment
      files={[
        '/3dglbs/px.webp',
        '/3dglbs/nx.webp',
        '/3dglbs/py.webp',
        '/3dglbs/ny.webp',
        '/3dglbs/pz.webp',
        '/3dglbs/nz.webp',
      ]}
      background={false}
      blur={1.5}
      resolution={256}
    />
    </Canvas>
  )

   }