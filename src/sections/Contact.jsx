import React, {useRef, useState} from 'react'
import emailJs from '@emailjs/browser'

export const Contact = () => {
    const contactFormRef = useRef();

    const [isLoading, setLoading] = useState(false);
    const [isFormClear, setFormClear] = useState(false);
    const [contactForm, setContactForm] = useState({
        email: "",
        name: "",
        message: ""
    })
    const handleFormChange = ({ target: { name, value }}) => {
        setContactForm({ ...contactForm, [name]: value });
    }
    const handleFormClear = () => {
        setContactForm({
            email: "",
            name: "",
            message: ""
        })
        setFormClear(true);
        setTimeout(() => {
            setFormClear(false);
        }, 2000)
    }
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailJs.send(
                "service_zkrr5dd",
                "template_43ax2yu",
                {
                    to_name: "Brandon",
                    to_email: "dcbrh.ph@gmail.com",
                    from_name: contactForm.name,
                    from_email: contactForm.email,
                    message: contactForm.message,
                },
                "BY4wrx3NjXa1dlmTv"
            )

            setLoading(false)
            alert("Your message is in my inbox!")
        } catch (e) {
            console.log(e)
            setLoading(false)
            alert("Message not sent :(")
        }
    }


    // service_zkrr5dd
    return (
        <section className={"c-space my-20"} id={"contact"}>
            <div className={"relative min-h-screen flex items-center justify-center flex-col"}>
                <img src={"/assets/terminal.png"} alt={"terminal-bg"} className={"absolute inset-0 min-h-screen flex"}/>
                <div className={"contact-container"}>
                    <h3 className={"head-text"}>Let's talk!</h3>
                    <p className={"text-lg text-white-600 mt-3"}>
                        Are you trying to build a new website, or mobile app? Feel free to reach out,
                        I've got you covered!
                    </p>
                    <form ref={contactFormRef} onSubmit={handleFormSubmit} className={"mt-12 flex flex-col space-y-7"}>
                        <label className="space-y-3">
                            <span className={"field-label"}>Email</span>
                            <input type={"email"} name={"email"} value={contactForm.email} onChange={handleFormChange}
                                   required className={"field-input"} placeholder={"johndoe@gmail.com"}/>
                        </label>
                        <label className="space-y-3">
                            <span className={"field-label"}>Name</span>
                            <input type={"text"} name={"name"} value={contactForm.name} onChange={handleFormChange}
                                   required className={"field-input"} placeholder={"John Doe"}/>
                        </label>
                        <label className="space-y-3">
                            <span className={"field-label"}>You message</span>
                            <textarea name={"message"} value={contactForm.message} onChange={handleFormChange}
                                   required className={"field-input"} placeholder={"Hello, I wanna give you a taco..."}/>
                        </label>
                        <button className={"field-btn"} type={"submit"} disabled={isLoading}>
                            { isLoading ? "Submitting..." : "Submit" }
                            <img src={"/assets/arrow-up.png"} alt={"arrow-up"} className={"field-btn_arrow"}/>
                        </button>

                        <div className={"text-btn"} onClick={handleFormClear}>{
                            isFormClear ? <img src={"/assets/tick.svg"} alt={"clear-form"}/> :
                                <p className={"text-btn"}>Clear</p>

                        }

                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}
