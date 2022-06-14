/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect, useRef } from "react"
import emailjs from "@emailjs/browser"
import ClipLoader from "react-spinners/ClipLoader"
import AnimatedLetters from "../AnimatedLetters/index"
import "./index.scss"

const Contact = () => {
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }
  const [loading, setLoading] = useState(false)
  const [letterClass, setLetterClass] = useState("text-animate")

  const form = useRef()

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)

    setTimeout(() => setLetterClass("text-animate-hover"), 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm("YOUR_SERVICE", "YOUR_TAMPLATE", form.current, "YOUR_API_KEY")
      .then(
        (result) => {
          console.log(result.text)
          console.log("Message Sent")
          window.location.reload(false)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return loading ? (
    <div style={style}>
      <ClipLoader color="#0083ff" loading={loading} size={80} />
    </div>
  ) : (
    <div className="container contact-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
            idx={15}
          />
        </h1>
        <p>
          I'am interested in freelance opportunities - especially ambitious or
          large projects. However, if you have other request or question, don't
          hesitate to contact me using below form either.
        </p>
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input
                  placeholder="Name"
                  type="text"
                  name="user_name"
                  required
                />
              </li>
              <li className="half">
                <input
                  placeholder="Email"
                  type="email"
                  name="user_email"
                  required
                />
              </li>
              <li>
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
              </li>
              <li>
                <textarea placeholder="Message" name="message" required />
              </li>
              <li>
                <input type="submit" className="flat-button" value="Send" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
