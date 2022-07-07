/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react"
import ClipLoader from "react-spinners/ClipLoader"
import AnimatedLetters from "../AnimatedLetters"
import "./index.scss"

const Skills = () => {
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia impedit
          eos atque eum, adipisci animi error, modi hic doloribus neque alias
          aliquam iusto ea distinctio voluptas commodi consectetur voluptates
          labore iste libero. Labore sunt adipisci ea, voluptates quibusdam
          tenetur illum consequuntur architecto odio ab facilis voluptatum
          deleniti ipsum reiciendis quisquam.
        </p>
      </div>
    </div>
  )
}

export default Skills
