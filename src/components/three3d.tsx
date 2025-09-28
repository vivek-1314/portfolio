import {Canvas , useFrame , useThree , useLoader} from '@react-three/fiber';
import { CubeTextureLoader , CubeTexture , AnimationMixer , LoopRepeat , Mesh , LoopOnce } from 'three';
import {Environment , useGLTF   } from '@react-three/drei';
import {useRef , useEffect , useState} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';


gsap.registerPlugin(ScrollTrigger);

function Box() {
    const meshRef = useRef<Mesh>(null!);
    const gltf = useGLTF('/3dglbs/Rock.glb');
    const { camera } = useThree();
    const mixer = useRef<AnimationMixer>(null!);

 const action = useRef<any>(null!);
  
  useEffect(() => {
    if (gltf.animations.length) {
      mixer.current = new AnimationMixer(gltf.scene);
      action.current = gltf.animations.map((clip) => {
        const action = mixer.current!.clipAction(clip);
        action.play();
        action.paused = true; // We control time manually
        return action;
      });

      // Pause the action at start (time = 0)
      action.current.time = 0;
      action.current.paused = true;

      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom 100vh",
        scrub: true,  
        onUpdate: self => {
          if (action.current) {
            action.current.forEach((action: THREE.AnimationAction, i: number) => {
                const clip = gltf.animations[i];
                action.time = clip.duration * self.progress * 18;
            });
            mixer.current!.update(0); 
          }
        },
      });
    }
  }, [gltf]);

  useFrame(() => {
    mixer.current?.update(0);
  });

//     useEffect(() => {
//     camera.position.set(5, 2, 5);
//     camera.lookAt(0, 0, 0);
//   }, [camera]);


    return <primitive ref={meshRef} object={gltf.scene} position={[0, -3, -1]} />;
}

function CustomEnvironment() {
  const [envMap, setEnvMap] = useState<CubeTexture | null>(null);

  useEffect(() => {
    new CubeTextureLoader().load(
      [
        '/3dglbs/px.webp',
        '/3dglbs/nx.webp',
        '/3dglbs/py.webp',
        '/3dglbs/ny.webp',
        '/3dglbs/pz.webp',
        '/3dglbs/nz.webp',
      ],
      (texture) => {
        setEnvMap(texture);
      }
    );
  }, []);

  if (!envMap) return null; 
  return <Environment map={envMap} background={false}  />;
}


export default function Three3D() {
    return (
        <Canvas style={{ height: '100vh', width: '100vw' }}>
            <ambientLight intensity={0.4} />
            <pointLight position={[0, 5, 0]} intensity={0.8} />
            <directionalLight color={'gray'} position={[0, 5, -1]} intensity={1.2} />    
            <Box />
            <CustomEnvironment />
        </Canvas>
    )
}