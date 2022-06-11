import "./App.scss"
import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Loader1 from "./components/Loader/index.js"

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='loader' element={<Loader1 />} />
					<Route path='about' element={<About />} />
					<Route path='skills' element={<Skills />} />
					<Route path='contact' element={<Contact />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
