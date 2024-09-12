import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import CodingRoom from "../components/CodingRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import {Target} from "../components/Target.jsx";
import {ReactLogo} from "../components/ReactLogo.jsx";
import {AndroidLogo} from "../components/AndroidLogo.jsx";

const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: 440});
    const isMobile = useMediaQuery({ maxWidth: 768});
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024});
    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    return (
        <section className="min-h-screen w-full flex-col relative ">
            <div className="w-full mx-auto flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Welcome! <span className="waving-hand">👋</span></p>
                <p className="hero_tag text-gray_gradient">
                    I'm a Developer with many hats.</p>
            </div>
            <div className="w-full h-full absolute inset-0">
                {/*<Leva />*/}
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>

                    <PerspectiveCamera makeDefault position={[0, 0, 25]}/>
                    <CodingRoom
                        scale={sizes.deskScale}
                        position={sizes.deskPosition}
                        rotation={sizes.deskRotation}
                    />
                        <group>
                            <Target position={sizes.targetPosition}/>
                            <ReactLogo position={sizes.reactLogoPosition}/>
                            <AndroidLogo position={sizes.androidLogoPosition}/>
                        </group>
                        <ambientLight intensity={1}/>
                        <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                    </Suspense>
                </Canvas>
            </div>
            </section>
    )
}
export default Hero
