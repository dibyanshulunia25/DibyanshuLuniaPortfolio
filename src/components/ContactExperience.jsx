import { Canvas } from '@react-three/fiber';
import React from 'react';
import { ComputerDesk } from './Models/Computer-optimized';
import { Environment, OrbitControls } from '@react-three/drei';


const ContactExperience = () => {
    return (
       <Canvas camera={{position:[0,3,7],fov:45}} shadows>
        <ambientLight intensity={0.5} color='#fff4e6' />
        <directionalLight 
            position={[5,5,3]}
            intensity={1.5}
            color="#ffd9b3"
        />
        <directionalLight 
            position={[5,9,1]}
            castShadow
            intensity={2.5}
            color="#ffd9d3"
        />

        <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 5} maxPolarAngle={Math.PI / 2} />

        <group scale={0.03} position={[0,-1.5,-2]} castShadow>
            <ComputerDesk />
        </group>

        <group scale={[1,1,1]}>
            <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
                <planeGeometry args={[50, 50]}/>
                <meshStandardMaterial color="#66dddd" />
            </mesh>
        </group>
       </Canvas>
    );
};

export default ContactExperience;
