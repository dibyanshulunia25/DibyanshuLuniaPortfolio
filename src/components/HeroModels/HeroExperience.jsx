import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive';
import { Room } from './room';
import HeroLights from './HeroLights';
import Particles from './Particles';

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width:1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width:768px)' });


    return (
        <Canvas camers={{ position: [0, 0, 15], fov: 45 }}>
            {/* <ambientLight intensity={0.2} color="#1a1a40" />
            <directionalLight position={[5, 5, 5]} intensity={2} /> */}
            <OrbitControls
                enablePan={false}
                enableZoom={!isTablet}
                maxZoom={100}
                maxDistance={20}
                minDistance={10}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />
            <HeroLights />
            <Particles count={100} />
            <group scale={isMobile?0.7 :1} position={isMobile?[1,-3.5,0]:[0,-4,0]} rotation={[0,-Math.PI/4,0]} >

                <Room />
            </group>
        </Canvas>
    )
}

export default HeroExperience