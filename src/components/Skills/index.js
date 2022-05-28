import { useState, useEffect } from "react"
import Loader from "react-loaders"
import AnimatedLetters from "../AnimatedLetters"
import "./index.scss"

const Skills = () => {
	const [letterClass, setLetterClass] = useState("text-animate")

	useEffect(() => {
		setTimeout(() => {
			return setLetterClass("text-animate-hover")
		}, 3000)
	}, [])

	return (
		<>
			<Loader type='pacman' />
			<div className='container skills-page'>
				<div className='text-zone'>
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
						<span class='tech-tag'>HTML5</span>,
						<span class='tech-tag'>CSS3</span>,
						<span class='tech-tag'>JavaScript</span>,
						<span class='tech-tag'>React</span>,
						<span class='tech-tag'>Sass</span>,<span class='tech-tag'>Git</span>
						, etc.
					</p>
					<p>
						I'm not a designer but I have a good sense of aesthetics, and
						experience in responsive, mobile-first web design. I put special
						effort into optimizing my code and providing the best user
						experience. I would love to give you any kind of support also after
						the project's completion. I guarantee a commitment during work on
						your project.
					</p>
				</div>
			</div>
		</>
	)
}

export default Skills
