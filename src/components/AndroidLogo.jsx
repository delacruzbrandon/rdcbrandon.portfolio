import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

export const AndroidLogo = (props) => {
    const targetRef = useRef();
    const { nodes, materials } = useGLTF('/models/android-logo.glb')

    useGSAP(() => {
        gsap.to(targetRef.current.position, {
            y: targetRef.current.position.y + 0.1,
            duration: 1.4,
            repeat: -1,
            yoyo: true,
        });
    });

    return (
        <group {...props} ref={targetRef} dispose={null} rotation={[0.1, Math.PI / 4, 0]}>
            <group position={[1.972, 0.821, 0]} scale={[1.586, 1.586, 0.315]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials['Material.001']}
                    scale={[1, 1, 0.31]}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/android-logo.glb')
