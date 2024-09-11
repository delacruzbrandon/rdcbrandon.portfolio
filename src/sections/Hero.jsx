import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera, SpotLight} from "@react-three/drei";
import CodingRoom from "../components/CodingRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {Leva, useControls} from "leva";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";

const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: 440});
    const isMobile = useMediaQuery({ maxWidth: 768});
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024});
    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    return (
        <section className="min-h-screen w-full flex-col relative ">
            <div className="w-full mx-auto flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Hello, my name's Brandon! <span className="waving-hand">👋</span></p>
                <p className="hero_tag text-gray_gradient">
                    Developer with many hats!</p>
            </div>
            <div className="w-full h-full absolute inset-0">

                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>

                    <PerspectiveCamera makeDefault position={[0, 0, 30]}/>
                    <CodingRoom
                        scale={sizes.deskScale}
                        position={sizes.deskPosition}
                        // position={[0.7, -Math.PI, -2.9]}
                        rotation={[-2.5, -0.1, -3.1]}
                    />
                        <ambientLight intensity={1}/>
                        <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                    </Suspense>
                </Canvas>
            </div>
            </section>
    )
}
export default Hero
