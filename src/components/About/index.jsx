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
import { ClipLoader } from "react-spinners"
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
          I'm very ambitious front-end developer looking for a role in
          established IT company with the opportunity to work with the latest
          technologies on challenging and diverse projects.
        </p>
        <p>
          I'm quietly confident, naturally curious, and perpetually working on
          improving my chops one design problem at a time.
        </p>
        <p>
          If I need to define myself in one sentence that would be a family
          person, father of a beautiful daughter, a snowboard fanatic,
          photography enthusiast, and tech-obsessed!!!
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faJsSquare} color="#444" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faReact} color="#444" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faHtml5} color="#444" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faCss3} color="#444" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faGitAlt} color="#444" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#444" />
          </div>
        </div>
      </div>
    </div>
  )
}

console.log("About End")

export default About
