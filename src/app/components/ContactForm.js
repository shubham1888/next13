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
    const [status, setStatus] = useState(null)
    const [userdata, setUserdata] = useState({
        username: "",
        email: "",
        phone: "",
        message: ""
    })

    const handleonchange = (e) => {
        e.preventDefault()
        let name = e.target.name
        let val = e.target.value
        setUserdata((prevData) => ({ ...prevData, [name]: val }))
    }
    const handlesubmit = async () => {
        try {
            let url = "/api/contact"
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userdata), // body data type must match "Content-Type" header
            });
            // let res = await response.json(); // parses JSON response into native JavaScript object
            if (response.status === 200) {
                setUserdata({
                    username: "",
                    email: "",
                    phone: "",
                    message: ""
                })
                setStatus("success")
            } else {
                setStatus("error")
            }
        } catch (e) {
            console.error(e)
        }
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
                {status === "success" && <p className={styles.success_msg}>Thank you for your message.</p>}
                {status === "error" && <p className={styles.error_msg}>There was an error occoured.</p>}
                <button type="submit" className={mulish.className}>Send</button>
            </div>
        </form>
    )
}

export default ContactForm