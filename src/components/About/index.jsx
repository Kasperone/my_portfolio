/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react"
import ClipLoader from "react-spinners/ClipLoader"
import AnimatedLetters from "../AnimatedLetters/index"
import kPhoto from "../../assets/images/kk-color.jpg"

import "./index.scss"

const About = () => {
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }
  const [loading, setLoading] = useState(false)
  const [letterClass, setLetterClass] = useState("text-animate")

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)

    setTimeout(() => setLetterClass("text-animate-hover"), 3000)
  }, [])

  return loading ? (
    <div style={style}>
      <ClipLoader color="#0083ff" loading={loading} size={80} />
    </div>
  ) : (
    <div className="container about-page">
      <div className="text-zone">
        <div className="about-page_header">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <img className="about-photo" src={kPhoto} alt="my photography" />
        </div>
        <p>
          I am a beginner front-end developer with knowledge of JavaScript,
          HTML/CSS3 and React.js. In 2022, I graduated from CodersLab, where I
          completed a three-month daily course "JavaScript Front-End Developer".
        </p>
        <p>
          Every day I expand my knowledge and skills in front-end programming
          technologies. The next points on my road-map are technologies such as
          React native, TypeScript, Redux, Next.js, which I gradually delve into
          while learning React.js.
        </p>
        <p>
          I am looking for an Internship or a Junior position where I will be
          able to further develop my passion in the best possible way, working
          on projects with a team of experienced programmers.
        </p>
      </div>
    </div>
  )
}

export default About
