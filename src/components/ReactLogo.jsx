import React, {useRef} from 'react'
import {useGLTF} from "@react-three/drei";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

export const ReactLogo = (props) => {
    const targetRef = useRef();
    const { nodes, materials } = useGLTF('/models/react.glb');

    useGSAP(() => {
        gsap.to(targetRef.current.position, {
            y: targetRef.current.position.y + 0.1,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
        });
    });

    return (
    <group {...props} dispose={null} ref={targetRef} rotation={[0, -Math.PI / 4, 0]}>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes['React-Logo_Material002_0'].geometry}
            material={materials['Material.002']}
            position={[0, 0.079, 0.181]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.392, 0.392, 0.527]}
        />
    </group>
    )
}


