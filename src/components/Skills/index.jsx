/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react"
import ClipLoader from "react-spinners/ClipLoader"
import AnimatedLetters from "../AnimatedLetters"
import "./index.scss"

const Skills = () => {
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
    <ClipLoader color="#ffffff" loading={loading} size={150} />
  ) : (
    <div className="container skills-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={[
              "S",
              "k",
              "i",
              "l",
              "l",
              "s",
              " ",
              "&",
              " ",
              "E",
              "x",
              "p",
              "e",
              "r",
              "i",
              "e",
              "n",
              "c",
              "e",
            ]}
            idx={8}
          />
        </h1>
        <p>
          Begginer in front-end development including technologies like
          <span className="tech-tag">HTML5</span>,
          <span className="tech-tag">CSS3</span>,
          <span className="tech-tag">JavaScript</span>,
          <span className="tech-tag">React</span>,
          <span className="tech-tag">Sass</span>,
          <span className="tech-tag">Git</span>, etc.
        </p>
        <p>
          I'm not a designer but I have a good sense of aesthetics, and
          experience in responsive, mobile-first web design. I put special
          effort into optimizing my code and providing the best user experience.
          I would love to give you any kind of support also after the project`s
          completion. I guarantee a commitment during work on your project.
        </p>
      </div>
    </div>
  )
}

export default Skills
