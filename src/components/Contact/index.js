import { useState, useEffect, useRef } from "react"
import Loader from "react-loaders"
import AnimatedLetters from "../AnimatedLetters/index"
import "./index.scss"
import emailjs from "@emailjs/browser"

const Contact = () => {
	const [letterClass, setLetterClass] = useState("text-animate")
	const form = useRef()

	useEffect(() => {
		setTimeout(() => {
			return setLetterClass("text-animate-hover")
		}, 3000)
	}, [])

	const sendEmail = e => {
		e.preventDefault()

		emailjs
			.sendForm(
				"service_xe7mvsn",
				"template_fpjqand",
				form.current,
				"8NTucHhveCvoZYOq6"
			)
			.then(
				result => {
					alert(result.text)
					window.location.reload(false)
				},
				error => {
					alert("error.text")
				}
			)
	}

	return (
		<>
			<div className='container contact-page'>
				<div className='text-zone'>
					<h1>
						<AnimatedLetters
							letterClass={letterClass}
							strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
							idx={15}
						/>
					</h1>
					<p>
						I am interested in freelance opportunities - especially ambitious or
						large projects. However, if you have other request or question,
						don't hesitate to contact me using below form either.
					</p>
					<div className='contact-form'>
						<form ref={form} onSubmit={sendEmail}>
							<ul>
								<li className='half'>
									<input
										placeholder='Name'
										type='text'
										name='user_name'
										required
									/>
								</li>
								<li className='half'>
									<input
										placeholder='Email'
										type='email'
										name='user_email'
										required
									/>
								</li>
								<li>
									<input
										placeholder='Subject'
										type='text'
										name='subject'
										required
									/>
								</li>
								<li>
									<textarea
										placeholder='Message'
										name='message'
										required></textarea>
								</li>
								<li>
									<input type='submit' className='flat-button' value='Send' />
								</li>
							</ul>
						</form>
					</div>
				</div>
			</div>
			<Loader type='pacman' />
		</>
	)
}

export default Contact
