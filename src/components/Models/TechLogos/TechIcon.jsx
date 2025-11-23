import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import { useEffect } from 'react';
import * as THREE from 'three';

const TechIcon = ({ model }) => {
    const scene = useGLTF(model.modelPath);

useEffect(()=>{
    if(model.name === "Interactive Developer"){
        scene.scene.traverse((child)=>{
            if(child.isMesh && child.name === 'Object_5'){
                child.material=new THREE.MeshStandardMaterial({
                    color: "white",
                    metalness: 0.5,
                    roughness: 0.1,
                })
            }
        })
    }
})

    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5,5,5]} intensity={1} />
            <Environment preset='city' />
            <OrbitControls enableZoom={false} />

            <Float speed={3.5} rotationIntensity={2} floatIntensity={5}>
                    <primitive object={scene.scene} scale={model.scale} position={model.position} rotation={model.rotation} />
            </Float>
        </Canvas>
    )
}

export default TechIcon