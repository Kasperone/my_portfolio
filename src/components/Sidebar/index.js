import { Link, NavLink } from "react-router-dom"
import { useEffect, useRef } from "react"
import "./index.scss"
import "animate.css"
import LogoK from "../../assets/images/k-logo-1.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faHome,
	faUser,
	faEnvelope,
	faComputer,
} from "@fortawesome/free-solid-svg-icons"
import {
	faDiscord,
	faGithub,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

console.log("Sidebar Start")

const Sidebar = () => {
	const menuBtnRef = useRef(null)
	useEffect(() => {
		const menuBtn = document.querySelector(".nav-bar_btn_wrapper")
		const navBar = document.querySelector(".nav-bar_slide")

		console.log(navBar)

		let menuOpen = false

		menuBtn.addEventListener("click", e => {
			e.preventDefault()
			if (!menuOpen) {
				menuBtn.classList.add("open")
				navBar.classList.add("nav-bar_open")

				menuOpen = true
			} else {
				menuBtn.classList.remove("open")
				navBar.classList.remove("nav-bar_open")
				menuOpen = false
			}
		})
	}, [])

	return (
		<header className='header'>
			<Link className='header-top' to='/'>
				<div className='header-top_logo-wrapper'>
					<img src={LogoK} alt='logo' />
				</div>
				<div className='nav-bar_btn_wrapper'>
					<div className='nav-bar_btn-burger' ref={menuBtnRef}></div>
				</div>
			</Link>
			<nav className='nav-bar_slide'>
				<NavLink
					exact='true'
					activeclassname='active'
					className='home-link'
					to='/'>
					<FontAwesomeIcon icon={faHome} color='#4d4d4e' />
				</NavLink>
				<NavLink
					exact='true'
					activeclassname='active'
					className='about-link'
					to='/about'>
					<FontAwesomeIcon icon={faUser} color='#4d4d4e' />
				</NavLink>
				<NavLink
					exact='true'
					activeclassname='active'
					className='skills-link'
					to='/skills'>
					<FontAwesomeIcon icon={faComputer} color='#4d4d4e' />
				</NavLink>
				<NavLink
					exact='true'
					activeclassname='active'
					className='contact-link'
					to='/contact'>
					<FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
				</NavLink>
			</nav>
			<ul>
				<li>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://www.linkedin.com/in/kasper-kosecki-1b128a239/'>
						<FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
					</a>
				</li>
				<li>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://github.com/Kasperone'>
						<FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
					</a>
				</li>
				<li>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://github.com/Kasperone'>
						<FontAwesomeIcon icon={faDiscord} color='#4d4d4e' />
					</a>
				</li>
			</ul>
		</header>
	)
}

console.log("Sidebar End")

export default Sidebar
