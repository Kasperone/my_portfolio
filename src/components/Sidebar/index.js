import { Link, NavLink } from "react-router-dom"
import "./index.scss"
import LogoK from "../../assets/images/k-logo.png"
import LogoSurname from "../../assets/images/k-surname.png"
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

const Sidebar = () => (
	<div className='nav-bar'>
		<Link className='logo' to='/'>
			<img src={LogoK} alt='logo' />
			<img className='logo-text' src={LogoSurname} alt='kosecki' />
		</Link>
		<nav>
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
				<a target='_blank' rel='noreferrer' href='https://github.com/Kasperone'>
					<FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
				</a>
			</li>
			<li>
				<a target='_blank' rel='noreferrer' href='https://github.com/Kasperone'>
					<FontAwesomeIcon icon={faDiscord} color='#4d4d4e' />
				</a>
			</li>
		</ul>
	</div>
)

export default Sidebar
