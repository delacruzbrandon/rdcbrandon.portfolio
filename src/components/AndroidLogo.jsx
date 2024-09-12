import {Float, useGLTF} from '@react-three/drei'

export const AndroidLogo = (props) => {
    const {nodes, materials} = useGLTF('/models/android-logo.glb')

    return (
        <Float floatIntensity={1}>
            <group
                {...props}
                dispose={null}
                rotation={[0.2, Math.PI / 4, 0]}
                scale={0.6}
            >
                <mesh
                    geometry={nodes.Object_4.geometry}
                    material={materials['Material.001']}
                    scale={[1, 1, 0.31]}
                />
            </group>
        </Float>
    )
}

useGLTF.preload('/android-logo.glb')
