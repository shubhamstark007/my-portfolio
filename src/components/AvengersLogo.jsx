import React from 'react';
import { useGLTF } from '@react-three/drei';

const modelUrl = new URL('/models/avengers-logo.glb', import.meta.url).href;

const AvengersLogo = (props) => {
    const { nodes, materials } = useGLTF(modelUrl);

    return (
        <group {...props} dispose={null}>
            <group position={[0.729, 35.781, 72.028]} scale={[2.113, 2.113, 5.406]}>
                <group position={[-136.962, 12.552, -28.713]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['Logo_07_-_Default_0'].geometry}
                        material={materials['07_-_Default']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['Logo_03_-_Default_0'].geometry}
                        material={materials['03_-_Default']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['Logo_02_-_Default_0'].geometry}
                        material={materials['02_-_Default']}
                    />
                </group>
            </group>
        </group>
    );
};

useGLTF.preload(modelUrl);

export default AvengersLogo;
