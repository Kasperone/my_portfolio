// import LogoK from "../../assets/images/k-logo.png"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import AnimatedLetters from "../AnimatedLetters"
import "./index.scss"

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
		setTimeout(() => {
			return setLetterClass("text-animate-hover")
		}, 4000)
	}, [])

	return (
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
						idx={15}
					/>
					<AnimatedLetters
						letterClass={letterClass}
						strArray={jobArray}
						idx={22}
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
	)
}

export default Home
