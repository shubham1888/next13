'use client'
import styles from "@/app/contact/contact.module.css"
// import { useState } from "react";
import { Mulish } from "next/font/google";
import { useState } from "react";
const mulish = Mulish({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700', '800', '900']
})

const ContactForm = () => {
    const [userdata, setUserdata] = useState({
        username: "",
        email: "",
        phone: "",
        message: ""
    })

    const handleonchange = (e) => {
        let name = e.target.name
        let val = e.target.value
        setUserdata((prevData) => ({ ...prevData, [name]: val }))
    }
    const handlesubmit = () => {
    }

    return (
        <form className={styles.contact_form} onSubmit={handlesubmit}>
            <div className={styles.input_field}>
                <label htmlFor="username" className={styles.label}>
                    Enter your username :
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                        className={mulish.className}
                        value={userdata.username}
                        onChange={handleonchange}
                    />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="email" className={styles.label}>
                    Enter valid Email :
                    <input
                        type="Email"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        className={mulish.className}
                        value={userdata.email}
                        onChange={handleonchange}
                    />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="phone" className={styles.label}>
                    Enter valid phone :
                    <input
                        type="number"
                        name="phone"
                        id="phone"
                        placeholder="Phone"
                        className={mulish.className}
                        value={userdata.phone}
                        onChange={handleonchange}
                    />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="message" className={styles.label}>
                    Enter your message :
                    <textarea
                        style={{ "resize": "vertical" }}
                        rows={8}
                        name="message"
                        id="message"
                        placeholder="message"
                        className={mulish.className}
                        value={userdata.message}
                        onChange={handleonchange}
                    />
                </label>
            </div>
            <div style={{ "display": "flex", "justifyContent": "center" }}>
                <button type="submit" className={mulish.className}>Send</button>
            </div>
        </form>
    )
}

export default ContactForm