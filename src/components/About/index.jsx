/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react"
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ClipLoader from "react-spinners/ClipLoader"
import AnimatedLetters from "../AnimatedLetters/index"
import "./index.scss"

console.log("About Start")

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
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
            idx={15}
          />
        </h1>
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

console.log("About End")

export default About
