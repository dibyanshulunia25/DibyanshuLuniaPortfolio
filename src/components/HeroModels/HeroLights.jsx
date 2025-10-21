import * as THREE from 'three';

const HeroLights = () => {
    return (
        <>
            <spotLight
                position={[2, 5, 6]}
                angle={0.15}
                intensity={100}
                penumbra={1}
                color="white"
            />
            <spotLight
                position={[4, 5, 10]}
                angle={0.3}
                intensity={10}
                penumbra={1}
                color="#4cc9f0"
            />
            <spotLight
                position={[-3, 5, 5]}
                angle={0.4}
                intensity={100}
                penumbra={1}
                color="#9d4edd"
            />

            <primitive
                object={new THREE.RectAreaLight('#a259ff', 8, 3, 2)}
                position={[2, 5, 4]}
                penumbra={1}
                intensity={5}
                rotation={[-Math.PI / 4, Math.PI / 4, 0]}
            />
            <pointLight 
                position={[0,0,0]}
                intensity={10}
                color="#7209b7"
            />
            <pointLight 
                position={[0,0,0]}
                intensity={10}
                color="#7209b7"
            />
        </>
    )
}

export default HeroLights