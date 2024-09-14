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
import Cube from "../components/Cube.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: 440});
    const isMobile = useMediaQuery({ maxWidth: 768});
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024});
    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    return (
        <section className="min-h-screen w-full flex-col relative ">
            <div className="w-full mx-auto flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Welcome! Feel free to snoop around<span className="waving-hand">👋</span></p>
                <p className="hero_tag text-gray_gradient">
                    I'm a Developer with many hats.</p>
            </div>
            <div className="w-full h-full absolute inset-0">
                {/*<Leva />*/}
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>

                    <PerspectiveCamera makeDefault position={[0, 0, 25]}/>
                        <HeroCamera isMobile={isMobile}>
                            <CodingRoom
                                scale={sizes.deskScale}
                                position={sizes.deskPosition}
                                rotation={sizes.deskRotation}
                            />
                        </HeroCamera>

                        <group>
                            <Target position={sizes.targetPosition}/>
                            <ReactLogo position={sizes.reactLogoPosition}/>
                            <Cube position={sizes.cubePosition}/>
                            <AndroidLogo position={sizes.androidPosition}/>
                        </group>
                        <ambientLight intensity={1}/>
                        <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                    </Suspense>
                </Canvas>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className={"w-fit"}>
                    <Button name="See More" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
                </a>
            </div>
            </section>
    )
}
export default Hero
