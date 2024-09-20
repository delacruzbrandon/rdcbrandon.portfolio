import React from 'react'

export const Footer = () => {
    return (
        <section
            className={"c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5"}>
            <div className={"text-white-500 flex gap-2"}>
                <p>Terms and Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className={"flex gap-3"}>
                <a className={"social-icon"}
                     href={"https://github.com/delacruzbrandon"}
                     target={"_blank"}
                     rel={"noreferrer"}>
                    <img src={"assets/github.svg"} alt={"GitHub"} className={"w-1/2 h-1/2"}/>
                </a>
                <a className={"social-icon"}
                   href={"https://twitter.com/rdcbrandon"}
                   target={"_blank"}
                   rel={"noreferrer"}>
                    <img src={"assets/twitter.svg"} alt={"Twitter"} className={"w-1/2 h-1/2"}/>
                </a>
                <a className={"social-icon"}
                   href={"https://www.linkedin.com/in/dcbrndn/"}
                   target={"_blank"}
                   rel={"noreferrer"}>
                    <img src={"assets/linkedin.svg"} alt={"LinkedIn"} className={"w-1/2 h-1/2"}/>
                </a>
            </div>

            <p className={"text-white-500"}>© 2024 Dela Cruz Brandon. All rights reserved.</p>
        </section>
    )
}
