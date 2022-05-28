// import LogoK from "../../assets/images/k-logo.png"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Loader from "react-loaders"
import AnimatedLetters from "../AnimatedLetters"
import SphereAnimation from "../SphereAnimation"
import { createSphere } from "../SphereAnimation"
import "./index.scss"

console.log("Home Start")

const Home = () => {
	const [letterClass, setLetterClass] = useState("text-animate")
	const nameArray = ["K", "a", "s", "p", "e", "r", " "]
	const jobArray = [
		"J",
		"a",
		"v",
		"a",
		"S",
		"c",
		"r",
		"i",
		"p",
		"t",
		" ",
		"d",
		"e",
		"v",
		"e",
		"l",
		"o",
		"p",
		"e",
		"r",
		".",
	]

	useEffect(() => {
		const timer = setTimeout(() => setLetterClass("text-animate-hover"), 4000)
		setTimeout(() => createSphere(), 1000)
		return () => clearTimeout(timer)
	}, [])

	return (
		<>
			<Loader type='pacman' />
			<SphereAnimation />
			<div className='container home-page'>
				<div className='text-zone'>
					<h1>
						<span className={letterClass}>H</span>
						<span className={`${letterClass} _12`}>i</span>
						<span className={`${letterClass} _13`}>,&nbsp;</span>
						<br />
						<span className={`${letterClass} _14`}>I</span>
						<span className={`${letterClass} _15`}>'</span>
						<span className={`${letterClass} _16`}>m&nbsp;</span>
						<AnimatedLetters
							letterClass={letterClass}
							strArray={nameArray}
							idx={12}
						/>
						<AnimatedLetters
							letterClass={letterClass}
							strArray={jobArray}
							idx={19}
						/>
						{/* <img src={LogoK} alt='logo-k' /> */}
						<br />
					</h1>
					<h2>
						Front-end Developer / JavaScript / React.js
						<Link to='/contact' className='flat-button'>
							CONTACT ME
						</Link>
					</h2>
				</div>
			</div>
		</>
	)
}

console.log("Home End")

export default Home
