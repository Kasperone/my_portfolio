/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react"
import ClipLoader from "react-spinners/ClipLoader"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faReact,
  faJs,
  faHtml5,
  faCss3,
} from "@fortawesome/free-brands-svg-icons"
import AnimatedLetters from "../AnimatedLetters"
import SphereAnimation, { createSphere } from "../SphereAnimation"
import "./index.scss"

const Home = () => {
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }
  const [loading, setLoading] = useState(false)
  const [letterClass, setLetterClass] = useState("text-animate")
  const nameArray = ["K", "a", "s", "p", "e", "r", " "]
  const jobArray = ["F", "r", "o", "n", "t", "-", "e", "n", "d", " "]
  const devArray = ["d", "e", "v", "e", "l", "o", "p", "e", "r", "."]

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)

    const sphereAnimation = setTimeout(() => createSphere(), 1500)

    setTimeout(() => setLetterClass("text-animate-hover"), 4500)

    return () => clearTimeout(sphereAnimation)
  }, [])

  return loading ? (
    <div style={style}>
      <ClipLoader color="#0083ff" loading={loading} size={80} />
    </div>
  ) : (
    <div className="container home-page">
      <SphereAnimation />
      <div className="text-zone">
        <div className="headline">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _13`}>,&nbsp;</span>
          </h1>
          <br />
          <h1>
            <span className={`${letterClass} _14`}>I</span>
            <span className={`${letterClass} _15`}>'</span>
            <span className={`${letterClass} _16`}>m&nbsp;</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={17}
            />
          </h1>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={devArray}
              idx={29}
            />
          </h1>
        </div>
        <div className="skills-wrapper">
          <div className="skills">
            <div className="skills-element">
              <FontAwesomeIcon icon={faReact} />
              <h2>React.js</h2>
            </div>
            <div className="skills-element">
              <FontAwesomeIcon icon={faJs} />
              <h2>JavaScript</h2>
            </div>
          </div>
          <div className="skills">
            <div className="skills-element">
              <FontAwesomeIcon icon={faHtml5} />
              <h2>HTML5</h2>
            </div>
            <div className="skills-element">
              <FontAwesomeIcon icon={faCss3} />
              <h2>CSS3</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
