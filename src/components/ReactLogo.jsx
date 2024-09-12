import {Float, useGLTF} from "@react-three/drei";

export const ReactLogo = (props) => {
    const {nodes, materials} = useGLTF('/models/react-logo.glb');

    return (
        <Float floatIntensity={1}>
            <group
                {...props}
                rotation={[0, -Math.PI / 4, 0]}
                scale={0.4}
            >
                <mesh
                    geometry={nodes['React-Logo_Material002_0'].geometry}
                    material={materials['Material.002']}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.392, 0.392, 0.527]}
                />
            </group>
        </Float>
    )
}


