import React from 'react'
import {Canvas} from "@react-three/fiber";
import {workExperiences} from "../constants/index.js";

export const Experiences = () => {
    return (
        <section className={"c-space my-20"} id={"work"}>
            <div className={"w-full text-white-600"}>
                <h3 className={"head-text"}>My Career</h3>
                <div className={"work-container"}>
                    {/*<div className={"work-canvas"}>*/}
                    {/*    <Canvas></Canvas>*/}
                    {/*</div>*/}
                    <div className={"work-content"}> {/*TODO Change col-span to 2*/}
                        <div className={"sm:py-10 py-5 sm:px-5 px-2.5"}>
                            {workExperiences.map(({icon, name, pos, duration, title, animation}, index) => (
                                <div key={index} className={"work-content_container group"}>
                                    <div className={"flex flex-col h-full justify-start items-center py-2"}>
                                        <div className={"work-content_logo"}>
                                            <img src={icon} alt={"experience-logo"}
                                                 className={"h-full w-full object-contain"}/>
                                        </div>
                                        <div className={"work-content_bar"}/>
                                    </div>
                                    <div className={"sm:p-5 px-2.5 py-5"}>
                                        <p className={"font-bold text-white-800"}>{name}</p>
                                        <p className={"text-sm mb-5"}>{pos} -- {duration}</p>
                                        <pre className={"group-hover:text-white transition ease-out duration-500"}>{title}</pre>
                                    </div>
                                    <div className={"sm:p-5 px-2.5 py-5"}>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
