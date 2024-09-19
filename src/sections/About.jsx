import React, {useEffect, useRef, useState} from 'react'
import Button from "../components/Button.jsx";
import Globe from "react-globe.gl";

export const About = () => {
    const latitude= 14.5995;
    const longitude= 120.9842;
    const N = 1;
    const gData = [...Array(N).keys()].map(() => ({
        lat: latitude,
        lng: longitude,
        size: 1,
    }));

    const [emailCopied, setEmailCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("dcbrh.ph@gmail.com");
        setEmailCopied(true);
        setTimeout(() => {
            setEmailCopied(false);
        }, 2000)
    }
    return (
        <section className="c-space my-20" id={'about'}>
            <p className={"head-text"}>About Me</p>
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full mt-12">
                <div className={"col-span-1 xl:row-span-3"}>
                    <div className={"grid-container"}>
                        <img src={"/assets/grid1.png"} alt="grid-1"
                             className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className={"grid-headtext"}>Hello, I'm Brandon</p>
                            <p className={"grid-subtext"}>
                                A self-taught guy, with over 4 years of experience in Software Development.
                                My skills comprise Frontend and Backend development, specializing in Android
                                development.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={"col-span-1 xl:row-span-3"}>
                    <div className={"grid-container"}>
                        <img src={"/assets/grid2.png"} alt={"grid-2"}
                             className={"w-full sm:h-[276px] h-fit object-contain"}/>
                        <div>
                            <p className={"grid-headtext"}>Tech Stack</p>
                            <p className={"grid-subtext"}>
                                I specialize in Kotlin with a focus on Jetpack Compose for Android Development.
                                I've developed apps for companies in different industries, from banks to airlines.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={"col-span-1 xl:row-span-4"}>
                    <div className={"grid-container"}>
                        <div className={"rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center"}>
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor={"rgba(0, 0, 0, 0)"}
                                showGraticules
                                globeImageUrl={"//unpkg.com/three-globe/example/img/earth-day.jpg"}
                                labelsData={[{
                                    lat: latitude,
                                    lng: longitude,
                                    text: "I'm here!",
                                    color: "white",
                                    size: 20
                                }]}
                                pointsData={gData}
                            />
                        </div>
                        <div>
                            <p className={"grid-headtext"}>Tech Nomad</p>
                            <p className={"grid-subtext"}>While I'm based in the Philippines. Majority of my experience
                                has been working
                                for companies remotely.</p>
                            <Button name={"Let's Chat"} isBeam containerClass={"w-full mt-20"}/>
                        </div>
                    </div>
                </div>

                <div className={"xl:col-span-2 xl:row-span-3"}>
                    <div className={"grid-container"}>
                        <img src={"/assets/grid3.png"} alt={"grid-3"}
                             className={"w-full sm:h-[266px] h-fit object-contain"}/>
                        <div>
                            <p className={"grid-headtext"}>
                                My Passion for Tech
                            </p>
                            <p className={"grid-subtext"}>
                                As a kid, I always loved to tinker and provide neat solutions.
                                May it be making a mini crossbow with my RC car, or building new and inspiring ideas.
                                And because of this curiosity, software became my gateway to expanding my horizons,
                                outside of just regular coding.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={"col-span-1 xl:row-span-2"}>
                    <div className={"grid-container"}>
                        <img src={"/assets/grid4.png"} alt={"grid-4"}
                             className={"w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"}/>
                        <div className={"space-y-2"}>
                            <p className={"grid-subtext text-center"}>Contact Me</p>
                            <div className={"copy-container"} onClick={handleCopy}>
                                <img src={emailCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt={"copy"}/>
                                <p className={"lg:text-2xl md:text-xl font-medium text-gray_gradient text-white"}>dcbrh.ph@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
